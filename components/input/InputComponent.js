import React , {useState} from "react"
import { View, TextInput, Button, StyleSheet , Modal} from "react-native"


const InputComponent = (props) => {
  console.log(props.visible);

  const [newTodo,setNewTodo]= useState('');

  const handleChange = (text) => {
    setNewTodo(text);
  }
   
  const handlePress = () => {
    props.addTodo(newTodo);
  }

  return (
    <Modal 
      visible={props.visible}
      animationType='slide'
      style={styles.modal}>
      <View 
        style={styles.container}>
        <TextInput
          placeholder='Write here'
          style={styles.textInput}
          onChangeText={handleChange}
        />
        <Button title='Add' onPress={handlePress}/>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  modal:{
    marginTop:40,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
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

