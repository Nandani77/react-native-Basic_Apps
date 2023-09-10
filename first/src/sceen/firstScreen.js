import React from "react";
import {
    View,
    Text,
    Button
    
    
} from "react-native";



const FirstScreen = () =>{

    return(
        <View>
            <Text>
                Hello firstScreen

            </Text>
        
         
         <Text> Hey I am Nandani </Text>
         <Text> Hey I am Nandani </Text>
         <Text> Hey I am Nandani </Text>
         <Text> Hey I am Nandani </Text>
         <Text> Hey I am Nandani </Text>
         <Button  title='Close' onPress={()=>{
          console.log("hallo guys ")
          }}/>
        </View>
    );
}

export default FirstScreen;
