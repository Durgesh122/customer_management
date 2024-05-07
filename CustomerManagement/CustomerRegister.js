import React, { useState,useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { customer_styles } from "./StyleSheetDemo";
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {CUSTOMER_REGISTER} from './Utility'

export const CustomerRegister = ({navigation}) => { 
    
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("") 
    const [name, setname] = useState("")
    const [gender, setgender] = useState("Male")
    const [balance, setbalance] = useState(0)
    const [account_no, setaccount_no] = useState(0)
    const [accounttype, setaccounttype] = useState("")


    
    const handleRegister = ()=>{
        let params = {
            "name":name,
            "gender":gender,
            "balance":parseInt(balance),
            "account_no":parseInt(account_no),
            "accounttype":accounttype,
            "email":email,
            "password":password
        }
        console.log(params)

        axios.post(CUSTOMER_REGISTER,params)
        .then((response)=>{
            console.log(response.data)
            alert("Customer Register Successfully!!")
            setname("")
            setbalance("")
            setaccount_no("")
            setaccounttype("")
            setemail("")
            setpassword("")
            setgender("")
            navigation.navigate("Login")
        })
        .catch((err)=>{
            console.log(err)
            alert(err)
        })
        
        
    }

    return (
      <View style={{flex:1}}>
        <ScrollView>
        <LinearGradient
                colors={['#d4a0bc', '#9a3e76', '#b16c96', '#cca4cc']}
                style={customer_styles.linearGradient}>
                
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setemail(e)}
                    placeholder="Email"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setname(e)}
                    placeholder="Name"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setpassword(e)}
                    placeholder="Password"
                    secureTextEntry={true}
                ></TextInput>
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setgender(e)}
                    placeholder="Gender"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setbalance(e)}
                    placeholder="Balance"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setaccount_no(e)}
                    placeholder="Account No"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"white"}
                    style={customer_styles.txtInputStyle}
                    onChangeText={e => setaccounttype(e)}
                    placeholder="Account Type"
                ></TextInput>
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
        </ScrollView>
      </View>
    )
}
