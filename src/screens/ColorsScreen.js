import React, { useState } from "react";
import { Text, StyleSheet,View, Button } from "react-native";

const colorScreen = () => {
  const [counter,setcounter]=useState([]);
  console.log(generateColor())
  return (
   <View>       
  <Button onPress = {() => {setcounter(counter+1)} } title="Add Color"/>
  </View>
  );
};

const generateColor = () =>{

    const red=Math.floor(Math.random() *256);
    const green=Math.floor(Math.random() *256);
    const blue=Math.floor(Math.random() *256);

    return `rgb(${red},${green},${blue})`
} 

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  },
  text1: {
    fontSize: 20
  },
  
});

export default colorScreen;
