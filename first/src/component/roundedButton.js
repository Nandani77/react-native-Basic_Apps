import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const RoundedButton =(
   props 
)=>{
    return(
        <TouchableOpacity style={styles.redius} onPress={props.onPress} >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
        
    );
}
const styles =StyleSheet.create({
    redius:{
        
        borderRadius:80,
        width:105,
        alignItems:'center',
        borderColor:'white',
        borderWidth:2,
        padding:15

        

    },
    text:{
        color:'white',
        fontSize:20,
        padding:5
        
    }
})
export default RoundedButton;