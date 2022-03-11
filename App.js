import React, { useState } from "react";
import ListItem from "./components/list-items/ListItem.component";
import InputComponent from "./components/input/InputComponent";

import {
  StyleSheet,
  View,
  FlatList
} from "react-native";

export default function App() {

  const [ todoList, setTodoList ]= useState([]);

  const addTodo = (input) => { 
   setTodoList([...todoList,{
    key:Math.random(),
    title:input,}
    ]);
  }
    
  return (

    <View style={styles.screen}>

        <InputComponent addTodo={addTodo}/> 

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
