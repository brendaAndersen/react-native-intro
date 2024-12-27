import { theme } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const sheet = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: 20,
        gap: 10
    },
    modal:  {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    modalContainer: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: theme.colors.grey[900],
    },
    message: {  
        color: 'white',
        marginBottom: 20,
        fontSize: 18,
    },
    containerButtons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: theme.colors.discover.dark,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      deleteButton: {
        backgroundColor: theme.colors.danger.base,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
});