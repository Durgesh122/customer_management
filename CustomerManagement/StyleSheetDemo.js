import {StyleSheet} from 'react-native'

export const customer_styles = StyleSheet.create({
    title:{
        fontSize:30,
        backgroundColor:'brown',
        color:'white',
        textAlign:'center',
        padding:10,
        borderRadius:10,
        margin:10
    },
    linearGradient: {
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 24,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      btnEditStyle: {
        fontSize: 24,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        padding:10,
        fontWeight:'bold',
        color: 'white',
        backgroundColor: 'brown',
        borderRadius:10
      },
      btnLogoutText: {
        fontSize: 24,
        fontFamily: 'Gill Sans',
        margin: 10,
        color: 'white',
        textAlign:'center',
        fontWeight:'bold',
        backgroundColor: 'transparent',
      },
      txtInputStyle: {
        fontSize: 22, 
        borderWidth: 1, 
        borderColor: 'white',
        marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: 'white'
    },
    txtInput1Style: {
      fontSize: 22, 
      borderWidth: 1, 
      borderColor: 'black',
      margin: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      color: 'black'
  },
    childViewStyle:{
      flexDirection:'row',justifyContent:"space-between",backgroundColor:'brown',borderRadius:10,margin:10
    },
    txtViewStyle:{
      color:'white',fontSize:24,fontWeight:'bold',
    },
    btnUpdateStyle: {
      fontSize: 24,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: 'white',
      fontWeight:'bold',
      backgroundColor: 'darkgoldenrod',
    },
    btnDeleteStyle: {
      fontSize: 24,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      fontWeight:'bold',
      color: 'white'
    },
})