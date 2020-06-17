import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

const ImageDetails = props => {
  return ( 
    <View>
      <Image source={props.ImagePath}/>
      <Text style={styles.text}>{props.title}</Text>
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default ImageDetails;
