import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { Entypo } from '@expo/vector-icons'
import axios from "axios";
// const [hidePass, setHidePass] = useState(true);
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backendUrl = 'http://192.168.18.143:3000'//'http://localhost:3000'; // or 'http://127.0.0.1:3000'
  const toggleShowPassword =()=>{
    setHidePass(!hidePass)
  }

 const handleSignup = async()=>{
  try {
    const response = await axios.post(`${backendUrl}/api/auth/signup`, { email, password });
    if (response.status === 200) {
      // Login successful
      Alert.alert('Signup Successful');
      // Navigate to the next screen if needed
    } else {
      // Login failed
      Alert.alert('Signup Failed', response.data.message || 'An error occurred.');
    }
  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'An error occurred. Please try again later.');
  }
 }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/log2.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignup}>
        <Text style={styles.loginText} >SIGNUP</Text> 
      </TouchableOpacity> 
      
      {/* <Entypo name="eye-with-line" size={90} color="black" /> */}
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4B0BB",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    borderRadius: 100
    
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 20,
    // width:"90%"
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});