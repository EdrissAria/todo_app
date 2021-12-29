import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export const AddTodo = ({submitHandler}) => {

    const [text, setText] = useState(''); 

    const changeHandler = (val) =>{
        setText(val)
    }
    return (
       <View>
           <TextInput 
            style={styles.input} 
            placeholder="new todo..."
            onChangeText={changeHandler}    
           />
           <Button title="Add Todo" onPress={()=> submitHandler(text)} color="coral"/>
       </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        color: '#444',
        fontSize: 18
    }
});
