import React from "react";
import { View,Text, StyleSheet } from "react-native";

const ProjectOne = () =>{
    return(
        <View>
            <Text style = {styles.headingText}>Flat Cards</Text>
            <View style = {styles.container}>
                <View style = {[styles.cards, styles.cardOne]}>
                    <Text>RED</Text>
                </View>
                <View style = {[styles.cards, styles.cardTwo]}>
                    <Text>VOILET</Text>
                </View>
                <View style = {[styles.cards, styles.cardThree]}>
                    <Text>GREEN</Text>

                </View>
                <View style = {[styles.cards, styles.cardfour]}>
                    <Text>PINK</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal:8, 
       
    },
    container:{
        flex:1,
        flexDirection:"row",
        padding:8
    },
    cards:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardOne:{
        backgroundColor:'#EF5354',
    },
    cardTwo:{
        backgroundColor:'#6c25be',
    },
    cardThree:{
        backgroundColor:'#96be25',
    },
    cardfour:{
        backgroundColor:'#be2596',
        
    }
});
export default ProjectOne;