import React from 'react'
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    header:{
        flex:1,
        backgroundColor:'#128C7E',
        flexDirection:'row',
        borderTopLeftRadius:5,
        borderTopRightRadius:5, 
    },
    whatsapp:{
        backgroundColor:'#128C7E',
        fontWeight:'bold',
        width:200,
        fontSize:28,
        marginTop:15,
        marginLeft:5,
        color:'white',

        

    },
    search:{
        marginLeft:10,
        alignSelf:'flex-end',
        marginLeft:110,
        marginBottom:10,
    },
    dotmenu:{
        
        alignSelf:'flex-end',
        marginLeft:10,
        marginBottom:10, 
    },
    menu:{
        flex:1,
        backgroundColor:'#128C7E',
        flexDirection:'row',

    },
    camera:{
        marginTop:15,
        paddingLeft:10,   
    },
    text:{
        padding:20,
        paddingLeft:30,
        color:'white'
    },

    inner_container:{
        flex:10,
        backgroundColor:'white',
        flexDirection:'row'
        
    },
    image_container:{
        width:80,
        height:80,
       
        margin:10
    },
    image:{
        width: 100,
        height: 100,
        borderRadius:2500,
    },
    chats:{
        marginTop:28,
        marginLeft:20
    },
    user_name:{
       fontSize:22,
       fontWeight:'bold',
       color:'black' 
    },
    slm:{
        marginLeft:-120,
        marginTop:60,
        fontSize:18,
        fontStyle:'italic',
        color:'gray',
    },
    body:{
        flexDirection:'row',
        height:100,
        width: 300,
    },
    


})