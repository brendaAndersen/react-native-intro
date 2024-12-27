import React from "react";
import { useState } from "react";
import { StatusBar } from "react-native";
import { User } from "@/components/user";
import { theme } from "@/constants/theme";
import { styles } from "@/components/user/styles";
import { AlertComponent } from "@/components/alert";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

export default function Home(){
    const [users, setUsers] = useState<string[]>([]);
    const [nameUsers, setNameUsers] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);

    const formattedDate = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

    const handlePress = () => {
        setAlertVisible(false);
        
        if(users.includes(nameUsers)){
            return Alert.alert("Participante existente", "Participante já existente")
        }
        if(nameUsers === '' || nameUsers.match(/\d+/g)){
            // \d+ encontra um ou mais dígitos consecutivos. 'g' busca todos os números na string. Retorna null se não houver números
            return Alert.alert("Adicionar valor válido", "é necessário digitar o nome do participante.")
        }
        // pega o estado anterior e junto com o atual
        setUsers(prevState => [...prevState, nameUsers]);
        setNameUsers('');
    };
    
    function handleRemove(item: string){
        setAlertVisible(true);
    }

    return (
        <>
        <StatusBar 
            barStyle="light-content"
            backgroundColor="#323238"
            translucent
        />
        <View style={sheet.container}>
            <Text style={sheet.text}>Evento</Text>
            <Text style={sheet.subText}>{formattedDate}</Text>
            <View style={sheet.form}>
                <TextInput 
                    style={sheet.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setNameUsers}
                    value={nameUsers}
                />
                <TouchableOpacity style={sheet.button} onPress={handlePress}>
                    <Text style={sheet.text}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={users}
                keyExtractor={item => item}
                renderItem={({item, index}) => (
                    <>
                        <User key={index} handleRemove={() => handleRemove(item)} name={item} />
                        <AlertComponent
                            show={alertVisible}
                            message={`Deseja retirar participante ${item}?`}
                            onClose={() => setAlertVisible(false)}
                            onDelete={() => {
                                setUsers(prev => {
                                  const updatedUsers = prev.filter(user => user !== item);
                                  return updatedUsers;
                                });
                                // Coloque o setAlertVisible em uma função de callback ou use um atraso
                                setTimeout(() => setAlertVisible(false), 0); // Coloca com um atraso de 0ms
                              }}
                        />
                    </>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Adicione participantes a sua lista de presença!
                    </Text>
                )}
            />
        
            {/* <ScrollView> */}
            {/* {
                users.map((user, index) => (
                    <User key={index} handleRemove={handleRemove} name={user} />
                ))
            } */}
            {/* </ScrollView> */}
                
        </View>
        </>
    )
}

const sheet = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: theme.colors.grey[600]
        // backgroundColor: "#000",
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    text:  {
        color: 'white',
        fontSize: 24,
        fontWeight: "bold"
    },
    subText: {
        fontSize: 18,
        color: '#6B6B6B'
    },
    input: {
        flex: 1,
        marginRight: 7,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16
    },
    button: {
        backgroundColor: theme.colors.rocketseat.dark,
        paddingVertical: 10,
        borderRadius: 5,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
})