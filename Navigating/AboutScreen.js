import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={require('./assets/pngtree-whats-app-pink-icon-vector-png-image_2351874.jpg')} style = {{height: 160, width: 160, resizeMode : 'contain', alignContent: 'center'}} />
      {/* <Text style ={{color: '#C8A2C8', fontSize: 50, fontWeight: 'bold'}}>BrainT</Text> */}
      <View style = {{alignContent: 'center', backgroundColor: 'white', borderRadius: 8, paddingVertical: 35, paddingHorizontal: 20, marginVertical: 10,  }}>
        <View style = {{justifyContent: 'center', borderColor: '#000000',  shadowOffset: {width: -2, height: 4}, shadowColor: '#171717', shadowOpacity: 0.9, shadowRadius: 9,  backgroundColor: 'white'}}>
             <Ionicons name="person-add" size = {69} color = '#C8A2C8' style = {{marginLeft: 95}}/>
             <Text style = {{color: '#C8A2C8', fontSize: 28, marginLeft: 85, marginBottom: 25}}>Sign Up</Text>
             <TextInput placeholder="Name*" style = {styles.fields}></TextInput>
            <TextInput placeholder="Username*" style = {styles.fields}></TextInput>
            <TextInput placeholder="Password*" style = {styles.fields}></TextInput>
            <TextInput placeholder="Confirm Password*" style = {styles.fields}></TextInput>
            <Button mode="contained" onPress={() => navigation.navigate("HTS")} style = {{margin: 20}}>
              SignUp
            </Button>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({  
  fields:{
    padding: 2,
    margin: 10,
    borderRadius: 10,
    width: 235,
    height: 40
  }

});