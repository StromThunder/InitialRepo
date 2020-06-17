import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import ImageDetails from "../components/Details"; 

const ImageScreen = props => {
  return ( 
    <View>
      <ImageDetails title={'Forest'}
                    ImagePath={require('../../assets/forest.jpg')}/>
      <ImageDetails title={'Beach'}
                    ImagePath={require('../../assets/beach.jpg')}/>
      <ImageDetails title={'Mountain'}
                    ImagePath={require('../../assets/mountain.jpg')}/>
    </View>
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default ImageScreen;
