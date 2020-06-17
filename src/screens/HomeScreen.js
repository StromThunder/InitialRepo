import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = props => {
  return ( 
    <View>
      <TouchableOpacity>
      <Text onPress={ () => { props.navigation.navigate('Nextpage') } }
      style={styles.text}>First Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text onPress={ () => { props.navigation.navigate('ListPage') } }
      style={styles.text}>Second Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text onPress={ () => { props.navigation.navigate('ImagePage') } }
      style={styles.text}>Thrid Screen</Text>

      <Text onPress={ () => { props.navigation.navigate('ColorPage') } }
      style={styles.text}>Colors Screen</Text>

      <Text onPress={ () => { props.navigation.navigate('ColorBlockPage') } }
      style={styles.text}>Colors Block Screen</Text>
      </TouchableOpacity>

    </View>
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
