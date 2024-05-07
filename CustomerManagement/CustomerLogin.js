import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { customer_styles } from "./StyleSheetDemo";
import LinearGradient from 'react-native-linear-gradient';
import axios from "axios";
import {CUSTOMER_LOGIN} from './Utility'

export function CustomerLogin({navigation}) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [show, setshow] = useState(false)

    const handleSubmit = () => {
        console.log(email, password)
        let params = {
            email:email,
            password:password
        }
        axios.post(CUSTOMER_LOGIN,params)
        .then((response)=>{
            // console.log(response.data)
            if (response.data.message==undefined) {
                navigation.navigate("Home")
            }else{
                alert("Please enter valid email or password")
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }

    const handleRegister = ()=>{
        navigation.navigate('Register')
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#d4a0bc', '#9a3e76', '#b16c96', '#cca4cc']}
                style={customer_styles.linearGradient}>
                <Text style={customer_styles.buttonText}>
                    Login Page
                </Text>
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setemail(e)}
                    placeholder="Email"
                    // value="vicky@gmail.com"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setpassword(e)}
                    placeholder="Password"
                    secureTextEntry={true}
                    // value="12345"
                ></TextInput>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={handleSubmit}
                >
                    <Text style={customer_styles.buttonText}>
                        LogIn
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={handleRegister}
                >
                    <Text style={customer_styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
                {/* <Text style={customer_styles.buttonText}>
                        Email:{email}
                    </Text> */}
            </LinearGradient>

        </View>
    );
}