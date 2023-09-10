import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const FancyCards =() =>{
    return(
        <View>
            <Text style = {styles.headingText}>Trainding places</Text>
            <View style ={[styles.cards, styles.cardsElevated]}>
                <Image 
                source={{ uri:'https://th.bing.com/th/id/OIP.k574Xz5W6lZQGCT-TZdL6wHaE7?pid=ImgDet&rs=1'}}
                style = {styles.cardImage}/>
                <View style = {styles.cardBody}>
                    <Text style = {styles.cardTitle} >HAWA MAHAL</Text>
                    <Text style = {styles.cardLebal} >pink city, jaipur</Text>
                    <Text style = {styles.cardDiscription} >The Hawa Mahal is a palace in the city of Jaipur,
                     India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur,
                      and extends to the Zenana, or women's chambers. </Text>
                    <Text style = {styles.cardFooter} >12 mins away</Text>
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
cards:{
    width:350,
    height:360,
    borderRadius:12,
    marginHorizontal:16,
    marginVertical:12,
},
cardsElevated:{
    backgroundColor:'#FFFFFF',
    elevation:3,
    shadowColor:{
        width: 1,
        height:1,
    },
},
cardImage:{
    height:180,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
    
},
cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
},
cardTitle:{
    color:'#000000',
    fontWeight:"bold",
    fontSize:22,
    marginBottom:4
},
cardLebal:{
    color:'#000000',
    fontSize:14,
    marginBottom:6
},
cardDiscription:{
    color:'#000000',
    fontSize:12,
    marginBottom:12,
    flexShrink:1,
    marginTop: 4
},
cardFooter:{
    color:'#000000',
}
});
export default FancyCards;