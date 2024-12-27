import React from "react";
import { Modal, View, Text, Button, TouchableOpacity } from "react-native";
import { sheet } from "./styles";

type AlertProps= {
    show: boolean;
    message: string;
    onClose: () => void;
    onDelete?: () => void;
}
export function AlertComponent({ show, message, onClose, onDelete } : AlertProps) {
    return (<>
    <Modal transparent={true} visible={show} animationType="fade">
      <View style={sheet.modal}>
        <View style={sheet.modalContainer}>
          <Text style={sheet.message}>{message}</Text>
           <View style={sheet.container}>
            <TouchableOpacity style={sheet.deleteButton}>
                <Text style={sheet.buttonText} onPress={onDelete}>Deletar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={sheet.button} onPress={onClose}>
                <Text style={sheet.buttonText}>Fechar</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    </Modal>
    </>)
}