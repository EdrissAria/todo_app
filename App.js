import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
 

export default function App() {

  const [todo, setTodo] = useState([{ text: 'go shopping', id: 1 }, { text: 'do homeworks', id: 2 }, { text: 'learn reactnative', id: 3 }])

  const todoHandler = (id) => {
    return setTodo((ptodo) => ptodo.filter(td => td.id != id))
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo(prevTodo => {
        return [{ text: text, id: Math.random() }, ...prevTodo]
      })
    }else{
      Alert.alert('oops!', 'Todos must over 3 chars',[
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => <TodoList todo={item} todoHandler={todoHandler} />}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 34
  },
  list: {
    flex: 1,
    marginTop: 16,
  }
});
