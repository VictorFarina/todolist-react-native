import React, { useState } from "react"
import ListItem from "./components/list-items/ListItem.component"
import InputComponent from "./components/input/InputComponent"

import { StyleSheet, View, FlatList, Button } from "react-native"

export default function App() {
  const [todoList, setTodoList]   = useState([])
  const [pressed, setPressed]     = useState(false)
  const addTodo = (_input) => {
    setTodoList([
      ...todoList,
      {
        key: Math.random(),
        title: _input,
      },
    ])
    setPressed(false)
  }
  const cancelTodo = (_input) => {
    setPressed(false)
  }
  const deleteTodo = (_input) => {
    setTodoList((newList) => {
      return newList.filter((todo) => todo.key !== _input)
    })
  }
  return (
    <View style={styles.screen}>
      <View style={styles.btnContainer}>
        <Button
          title='Add todo'
          onPress={() => setPressed(true)}
        />
      </View>
      <InputComponent
        visible={pressed}
        addTodo={addTodo}
        cancelTodo={cancelTodo}
      />
      <FlatList
        data={todoList}
        renderItem={(itemData) => (
          <ListItem itemData={itemData} deleteTodo={deleteTodo} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    marginVertical: 60,
    backgroundColor:'#7CB9E8',
  },
  screen: {
    backgroundColor: "white",
    margin: 30,
  },
})
