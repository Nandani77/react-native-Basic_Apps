import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const B =(
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
        
        borderRadius: 30,
        width:55,
        alignItems:'center',
        borderColor:'white',
        borderWidth:2,
        padding:5
    },
    text:{
        color:'white',
        fontSize:16,
        padding:10
    }
})
export default B;