import React, { useState } from "react";
import { Text, StyleSheet,View, Button } from "react-native";

const secondScreen = () => {
  const [counter,setcounter]=useState(0);
  const display = 'Dispaly';  
  return (
   <View>       
  <Text style={styles.text}>The text {counter}</Text>

  <Button onPress = {() => {setcounter(counter+1)} } title="Increment"/>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  },
  text1: {
    fontSize: 20
  },
  
});

export default secondScreen;
