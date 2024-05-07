//import liraries
import React, { useState, useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList,Alert, TextInput } from 'react-native';
import { customer_styles } from "./StyleSheetDemo";
import axios from 'axios';
import { CUSTOMER_LIST ,APP_NAME, CUSTOMER_DELETE} from './Utility'
// create a component
const CustomerHome = ({ navigation }) => {
    const searchdata = useRef();
    
    const [cust_list, setcust_list] = useState([])
    const [categorylist, setcategorylist] = useState([])

    useEffect(() => {
        getAllCustomers()
        console.log("hii")
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            getAllCustomers()
            console.log("hello")
          });
      
          // Return the function to unsubscribe from the event so it gets removed on unmount
          return unsubscribe;
    }, [])


    const getAllCustomers = () => {
        axios.get(CUSTOMER_LIST)
            .then((response) => {
                // console.log(response.data)
                setcust_list(response.data)
                setcategorylist(response.data)
            })
            .catch((err) => {
                alert(err)
            })
    }

    const handleLogout = () => {
        navigation.popToTop()
    }

    const handleEdit = (gId)=>{
        navigation.navigate("Edit",
        {
            gId:gId
        })
    }
    
    const deleteAlert = (gId) =>
    Alert.alert(APP_NAME, 'Are you sure you want to delete record', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', 
        onPress: () => {
            deleteCustomer(gId)
        }
    },
    ]);

    const deleteCustomer=(gId)=>{
        const url = CUSTOMER_DELETE+gId+"/"
        console.log(url)
        axios.delete(url)
        .then((response)=>{
            console.log(response.data)
            getAllCustomers()
            alert("Customer Record Delete Successfully!!")
        })
        .catch((err)=>{
            alert(err)
        })
    }

    const handleSearch=(e)=>{
        searchdata.current.valueOf().value = e 
        var value = searchdata.current.valueOf().value
        // console.log(value)

        if (value != "") {
            var newData = cust_list.filter((user) => {
                console.log(Object.values(user).join(" "))
                return Object.values(user).join(" ").includes(value)
            })
            // console.log(newData)
            setcust_list(newData)
        }else{
            setcust_list(categorylist)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={customer_styles.childViewStyle}>
                <Text style={customer_styles.btnLogoutText}>
                    Home
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
                    ref={searchdata}
                    onChangeText={ handleSearch}
                    placeholder="Search By Name or Email"
                ></TextInput>
                {/* <Text style={customer_styles.txtInput1Style}>{searchdata}</Text> */}
            {cust_list.length>0?
            <FlatList
            data={cust_list}
            keyExtractor={item=>item.id}
            renderItem={({item,index})=>
            <View style={{margin:10,backgroundColor:'teal',borderRadius:10,padding:10}}>
                <Text style={customer_styles.txtViewStyle}>
                {index+1}.
                </Text>
                <Text style={customer_styles.txtViewStyle}>Name:{item.name}</Text>
                <Text style={customer_styles.txtViewStyle}>Email:{item.email}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={customer_styles.txtViewStyle}>Gender:{item.gender}</Text>
                <Text style={customer_styles.txtViewStyle}>Acc-type:{item.accounttype}</Text>
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={customer_styles.txtViewStyle}>Acc-No:{item.account_no}</Text>
                <Text style={customer_styles.txtViewStyle}>Balance:&#8377;{item.balance}</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={{backgroundColor: 'darkgoldenrod',flex:1,borderRadius:20,margin:5}}
                    onPress={()=>handleEdit(item.id)}
                >
                    <Text style={customer_styles.btnUpdateStyle}>
                        Edit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={{backgroundColor: 'red',flex:1,borderRadius:20,margin:5}}
                    onPress={()=>deleteAlert(item.id)}
                >
                    <Text style={customer_styles.btnDeleteStyle}>
                        Delete
                    </Text>
                </TouchableOpacity>
                </View>    
            </View>
        }
            ></FlatList>:<Text style={customer_styles.title}>No Record Found</Text>}
        </View>
    );
};



//make this component available to the app
export default CustomerHome;
