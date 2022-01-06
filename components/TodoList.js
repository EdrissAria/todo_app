import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const TodoList = ({ todo, todoHandler }) => {
    return (
        <TouchableOpacity onPress={() => todoHandler(todo.id)}>
            <View style={styles.item}>
                <Text>{todo.text}</Text>
                <MaterialIcons name="delete" size={18} color="#666"/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#aaa',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
});
