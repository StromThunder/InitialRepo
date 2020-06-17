import React from "react";
import { Text, StyleSheet, Button, View, Image } from "react-native";

const ColorBDetails = ({ colors, onColorIncreased, onColorDecreased }) => {
  return ( 
    <View>
      <Text style={styles.text}>{colors}</Text>
       <Button 
       onPress={() => onColorIncreased()}
       title= {`Increase ${colors}`}/>
       <Button 
       onPress = {() => onColorDecreased()}
       title= {`Decrease ${colors}`}/>
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default ColorBDetails;
