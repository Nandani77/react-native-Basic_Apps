import React, { useState } from "react";
import{Text,StyleSheet, View, TouchableOpacity, StatusBar, } from "react-native";

const BgChanger = () =>{
    const[randaomBackground, setRandomBackground]= useState("#ffffff");

    const generateColour = () =>{
        const hexRange = "0123456789ABCDEF";
        let color ="#";
        for(let i = 0; i < 6; i++){
            color += hexRange[Math.floor(Math.random() * 16)]
        }
        setRandomBackground(color)
    }
    return(
        <View style={{flex:1}}>
         <StatusBar backgroundColor={randaomBackground}/>

         <View style={[styles.container, {backgroundColor:randaomBackground}]}>
            <TouchableOpacity onPress={generateColour}>
                <View style={styles.actionBtn}>
                    <Text style={styles.actionBtnTxt}>Press me</Text>
                </View>
            </TouchableOpacity>
         </View>
        
         </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    actionBtn:{
        borderRadius:12,
        paddingVertical:10,
        backgroundColor:"#6A1B4D",
        paddingHorizontal:40,
        
    },
    actionBtnTxt:{
        fontSize:24,
        color:"#FFFFFF",
       textTransform:"uppercase",

    }
});
export default BgChanger;