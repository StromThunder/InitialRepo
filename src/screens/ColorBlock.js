import React, { useState } from "react";
import { Text, StyleSheet,View, Button } from "react-native";
import ColorBDetails from '../components/ColorComponent'

const ColorBlockScreen = () => {
  const [red,setRed]=useState(0);
  const [blue,setBlue]=useState(0);
  const [green,setGreen]=useState(0);

  const setColor = (color,value) => {
  switch(color){
      case 'red':
          
          if(red + value >255 || red + value < 0){
              return 
          }else{
          setRed(red + value);
          }
          break;
      case 'blue':
        if(blue + value >255 || blue + value < 0){
            return 
        }
        setBlue(blue + value)
          break;
      case 'green':
        if(green + value >255 || green + value < 0){
            return 
        }
        setGreen(green + value)
          break;     
  }
}


  const COLOR_VALUE = 20;
  
  console.log(red);
  return (
   <View>       
   <ColorBDetails
    onColorIncreased = { () => setColor('red',COLOR_VALUE) }
    onColorDecreased = { () => setColor('red', (-1 * COLOR_VALUE)) }
    colors={'Red'}
    />
   <ColorBDetails
    onColorIncreased = { () => setColor('blue', COLOR_VALUE)}
    onColorDecreased = { () => setColor('blue', -1 * COLOR_VALUE) } 
    colors={'Blue'}
    />
   <ColorBDetails
    onColorIncreased = { () => setColor('green',COLOR_VALUE)}
    onColorDecreased = { () => setColor('green', -1 * COLOR_VALUE) } 
   colors={'Green'}
   />

   <View 
   style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}
   />
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

export default ColorBlockScreen;
