import { theme } from "@/constants/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: theme.colors.grey[100],
        marginLeft: 5
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FFF",
        fontSize: 16
    },
    button: {
        backgroundColor: theme.colors.danger.light,
        paddingVertical: 10,
        borderRadius: 5,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    listEmptyText: {
        color: theme.colors.grey[100]
    }
})