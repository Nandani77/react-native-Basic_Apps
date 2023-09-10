import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    
    
} from 'react-native';
function ScreenC(){
    return(
       <View style={styles.container}>
        <Text style={styles.first}>
            It's me Nandani!!
        </Text>
       
        
        <Image  source={{uri:"https://reactnative.dev/docs/assets/p_cat2.png"}}style = 
                           {{height:50, width: 50 }}  />
        <Text style={{color: 'orange', }}>
                It's me Nandani!
            </Text>
        </View>
       
       
    );
}
const styles = StyleSheet.create({
    container:{
        
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
        
        
    },
    first:{
        color: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});

export default ScreenC;