import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type UserProps = {
    name: string;
    handleRemove: () => void;
}
export function User({ name, handleRemove } : UserProps){

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TextInput 
                style={styles.input}
                placeholderTextColor="#6B6B6B"
            />
            <TouchableOpacity style={styles.button} onPress={handleRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}