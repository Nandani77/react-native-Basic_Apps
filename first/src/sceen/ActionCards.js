import React from "react";
import { View, Text , StyleSheet, Linking,Image,TouchableOpacity} from "react-native";
const ActionCards = () => {
    function openWebsite(websiteLink){
Linking.openURL(websiteLink)
    }
    return(
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View  style ={[styles.cards, styles.cardsElevated]}>
                <View  style={styles.headingContainer}>
                    <Text  style={styles.headerText}> What's new in javascrip 21 - ES12</Text>
                </View>
                <Image 
                source={{uri:'https://escalla.co.uk/wp-content/uploads/2020/02/Software-Developer-Apprentice.jpg'}} style ={styles.CardsImage}/>
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>Just like every year, Javascript brings in new features.
                    This year javascript is bringing 4 new features, which are almost in production rollout.
                    I won't be wasting much more time and directly jump to code with easy to understand examples.
                    Use the latest node version, if you want to play around with these features.
                    15.8.0 worked fine for me.
                    Once the compatible node version is available, simply create a new JS file, and let's get 
                    started.</Text>
                </View>
                <View style={styles.footerContainer}>
                   <TouchableOpacity onPress={()=> openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                    <Text style={styles.socialLinks}>read more</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=> openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                    <Text style={styles.socialLinks}>follow me</Text>
                   </TouchableOpacity>
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
        height:350,
        width:340,
        borderRadius:6,
        marginHorizontal:16,
        marginVertical:12
    },
    cardsElevated:{
        backgroundColor:'#Fa8f31',
        elevation:3,
        shadowOffset:{
            width: 1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600'
    },
    CardsImage:{
        height:190,
    },
    bodyContainer:{
      padding:10
    },
    footerContainer:{
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        padding:8
    },
    socialLinks:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }

});
export default ActionCards;