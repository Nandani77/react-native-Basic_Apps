import React from "react";
import{ StyleSheet, Text, View, } from "react-native";
const RoundedButton = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>hello this is nanadani</Text>
        </View>
    );
}
const styles =() => StyleSheet.create({
   container:{

   },
   text:{
    backgroundColor:'white',
    padding:20,
    justifyContent:'center'
   },
    
})
export default RoundedButton;