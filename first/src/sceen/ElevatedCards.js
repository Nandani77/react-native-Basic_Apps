import React from "react";
import { View, Text, ScrollView,StyleSheet } from "react-native";
const ElevatedCards = () =>{
return(
<View>
    <Text style = {styles.headingText}>Elevated Cards</Text>
    <ScrollView horizontal = {true} style = {styles.container}>
        <View  style ={[styles.cards, styles.cardsElevated]}>
            <Text>Tap</Text>
        </View>
        <View  style ={[styles.cards, styles.cardsElevated]}>
            <Text>me</Text>
        </View>
        <View  style ={[styles.cards, styles.cardsElevated]}>
            <Text>to</Text>
        </View>
        <View  style ={[styles.cards, styles.cardsElevated]}>
            <Text>scroll</Text>
        </View>
        <View  style ={[styles.cards, styles.cardsElevated]}>
            <Text>more...</Text>
        </View>
        <View  style ={[styles.cards, styles.cardsElevated]}>
            <Text>&#128515;</Text>
        </View>
    </ScrollView>
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
        padding:8,
    },
    cards:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        width:100,
        height:100,
        borderRadius: 4,
        margin:8,
    },
    cardsElevated:{
        backgroundColor:'#Ff81fc', 
        elevation: 4,
        shadowColor:{
            width: 1,
            height:1,
        },
        shadowColor:'#be2596',
        shadowOpacity:0.4,
        shadowRadius:2
    }
});
export default ElevatedCards;