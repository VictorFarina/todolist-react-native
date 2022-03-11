import React, { useState } from "react";
import ListItem from "./components/list-items/ListItem.component";
import InputComponent from "./components/input/InputComponent";

import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";

export default function App() {
  
  const [ todoList, setTodoList ]= useState([]);

  const [ pressed, setPressed ] = useState(false);
  
  const addTodo = (input) => { 
   setTodoList([...todoList,{
    key:Math.random(),
    title:input,}
    ]);
  }
    
  return (

    <View style={styles.screen}>

        <Button title="Add todo" onPress={ () => setPressed(!pressed)} />

        <InputComponent visible={pressed} addTodo={addTodo}/> 

        <FlatList 
          data={todoList} 
          renderItem={ itemData => (
            <ListItem itemData={itemData}/>
          )}/>
    </View>

  )
}

const styles = StyleSheet.create({

  screen: {
    backgroundColor: "white",
    margin: 30,

  },

})
