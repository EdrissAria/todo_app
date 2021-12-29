import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

export const Header = () =>{

    return(
        <View style={styles.header}><Text style={styles.title}>Todo List</Text></View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        height: 80,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold',
        letterSpacing: 1
    }
})