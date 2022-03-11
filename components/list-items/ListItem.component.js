import React, { useState } from "react";
import { StyleSheet, Text, Button, Pressable } from "react-native";

const ListItem = (props) => {



  const [pressed, setPressed] = useState(false)

  const handlePress = () => {
    setPressed(!pressed)
  }
  const handleDelete = () => {
   props.deleteTodo(props.itemData.item.key)
  }

  return (
    <Pressable
      style={[
        styles.listItem,
        pressed ? styles.bgBabyBlue : styles.bgAliceBlue,
      ]}
      onPress={handlePress}>
      <Text style={styles.text}>{props.itemData.item.title}</Text>
      <Text style={styles.text}>{props.itemData.item.key}</Text>
      <Button style={styles.delButton} title='DELETE' onPress={handleDelete}/>

  

    </Pressable>
  )
}

const styles = StyleSheet.create({
  bgAliceBlue: {
    backgroundColor: "#F0F8FF",
  },

  bgBabyBlue: {
    backgroundColor: "#89CFF0",
  },

  listItem: {
    minHeight: 80,
    maxHeight: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
  },

  text: {
    marginVertical: "auto",
    width: 50,
    marginLeft: 30,
  },

  delButton: {
    backgroundColor: "green",
    marginRight: 3,
    height: 10,
  },
})

export default ListItem
