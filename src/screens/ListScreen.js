import React from "react";
import { Text, StyleSheet,View, FlatList } from "react-native";

const ListScreen = () => {
  const display = [{name: 'num#1'}
                  ,{name: 'num#2'}
                  ,{name: 'num#3'},
                  {name: 'num#4'},
                  {name: 'num#5'},
                  {name: 'num#6'}];  
  return (
   <View>       
  
  <FlatList
    keyExtractor={(item) => { return item.name}}
    data = {display}
    renderItem ={ ({item}) => {
      return (
      <Text>{item.name}</Text>
      );
    } 
    }
  />
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

export default ListScreen;
