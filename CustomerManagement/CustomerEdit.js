//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList,Alert, TextInput,ScrollView } from 'react-native';
import { customer_styles } from "./StyleSheetDemo";
import axios from 'axios';
import { CUSTOMER_LIST,APP_NAME, CUSTOMER_EDIT,CUSTOMER_SINGLE_RECORD} from './Utility'


// create a component
const CustomerEdit = ({navigation,route}) => {
    
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("") 
    const [name, setname] = useState("")
    const [gender, setgender] = useState("Male")
    const [balance, setbalance] = useState(0)
    const [account_no, setaccount_no] = useState(0)
    const [accounttype, setaccounttype] = useState("")

    useEffect(()=>{
        console.log(route.params?.gId)
        axios.get(CUSTOMER_SINGLE_RECORD+route.params?.gId+"/")
        .then((response)=>{
            console.log(response.data)
            const {name,email,password,gender,balance,account_no,accounttype} = response.data
            setname(name)
            setemail(email)
            setpassword(password)
            setgender(gender)
            setbalance(balance)
            setaccount_no(account_no)
            setaccounttype(accounttype)
        })
        .catch((err)=>{
            alert(err)
        })
    },[])


    const handleEdit = ()=>{
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

        axios.put(CUSTOMER_EDIT+route.params?.gId+"/",params)
        .then((response)=>{
            console.log(response.data)
            alert("Customer Profile Updated Successfully!!")
            navigation.navigate("Home")
        })
        .catch((err)=>{
            console.log(err)
            alert(err)
        })
    }
    const handleLogout = () => {
        navigation.popToTop()
    }
    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <View style={{flex:1}}>
            <ScrollView>
            <View style={customer_styles.childViewStyle}>
            <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={handleBack}
                >
                    <Text style={customer_styles.btnLogoutText}>
                    {"< "}Back
                    </Text>
            </TouchableOpacity>    
          
                <Text style={customer_styles.btnLogoutText}>
                    Edit
                </Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={handleLogout}
                >
                    <Text style={customer_styles.btnLogoutText}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
            <TextInput
                    placeholderTextColor={"black"}
                    style={customer_styles.txtInput1Style}
                    editable={false}
                    value={email}
                    onChangeText={e => setemail(e)}
                    placeholder="Email"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"black"}
                    value={name}
                    style={customer_styles.txtInput1Style}
                    onChangeText={e => setname(e)}
                    placeholder="Name"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"black"}
                    style={customer_styles.txtInput1Style}
                    value={password}
                    onChangeText={e => setpassword(e)}
                    placeholder="Password"
                    secureTextEntry={true}
                ></TextInput>
                <TextInput
                    placeholderTextColor={"black"}
                    value={gender}
                    style={customer_styles.txtInput1Style}
                    onChangeText={e => setgender(e)}
                    placeholder="Gender"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"black"}
                    value={balance.toString()}
                    style={customer_styles.txtInput1Style}
                    onChangeText={e => setbalance(e)}
                    placeholder="Balance"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"black"}
                    value={account_no.toString()}
                    style={customer_styles.txtInput1Style}
                    onChangeText={e => setaccount_no(e)}
                    placeholder="Account No"
                ></TextInput>
                <TextInput
                    placeholderTextColor={"black"}
                    value={accounttype}
                    style={customer_styles.txtInput1Style}
                    onChangeText={e => setaccounttype(e)}
                    placeholder="Account Type"
                ></TextInput>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={handleEdit}
                    style={{borderRadius:10}}
                >
                    <Text style={customer_styles.btnEditStyle}>
                        Update
                    </Text>
                </TouchableOpacity>
                </ScrollView>
        </View>
    );
};

export default CustomerEdit;
