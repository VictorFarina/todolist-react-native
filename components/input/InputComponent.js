import React , {useState} from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"


const InputComponent = (props) => {

 
  const [newTodo,setNewTodo]= useState('');

  const handleChange = (text) => {
    setNewTodo(text);
  }
   
  const handlePress = () => {
    props.addTodo(newTodo);
  }

  return (
    <View style={styles.card}>
      <TextInput
        placeholder='Write here'
        style={styles.textInput}
        onChangeText={handleChange}
      />
      
      <Button title='Add' onPress={handlePress}/>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 20,
    borderColor: "black",
    borderWidth: 0.1,
  },
  textInput: {
    padding: 9,
    marginLeft: 3,
  },
})

export default InputComponent

