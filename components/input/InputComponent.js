import React , {useState} from "react"
import { View, TextInput, Button, StyleSheet , Modal} from "react-native"

const InputComponent = (props) => {

  
  const [newTodo,setNewTodo]= useState('');
  const [error,setError]= useState(false);

  const handleChange = (text) => {
    setNewTodo(text);
  }
  
  const handleAdd = () => {
    if(newTodo.length==0){
     setError(true);
    }else{
        props.addTodo(newTodo);
    }
  }

  const handleCancel = () => {
     setError(false);
    props.cancelTodo();
  }
  

  return (
    <Modal 
      visible={props.visible}
      animationType='slide'
      style={styles.modal}>

      <View 
        style={styles.container} >
        <TextInput
          placeholder={!error ? 'Write here' : 'You have to write something'}
          style={[styles.textInput,
          error ? styles.inputError  : '' ]}
          onChangeText={handleChange}
        />
        <View style={styles.btnContainer}>
          <Button 
            title='Cancel' 
            color='red' 
            onPress={handleCancel}/>
          <Button 
            title='ADD' 
            onPress={handleAdd}/>
        </View>

      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  modal:{
    marginTop:200,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#F0F8FF",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.1,
  },
  textInput: {
    backgroundColor: "white",
    padding: 9,

    borderRadius:20,
    height: 60,
    width: 300,
  },
  btnContainer: {
    padding:30,
    width: 300,
    flexDirection:'row',
    justifyContent:'space-between',

  },
  inputError:{
    borderWidth:2,
    borderColor:'red'

  }

})

export default InputComponent

