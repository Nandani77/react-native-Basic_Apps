import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import RoundedButton from "../component/roundedButton";


const Focus = ({addSubject}) => {
    const [tempItem, setTempItem] = useState(null);
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What do you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput  placeholder='enter your like' style={{borderColor:"black",borderWidth:2, padding: 10, width:'80%', marginRight:20 }} onChangeText={(val)=>{setTempItem(val)}}
                    />
                    
                    <RoundedButton title="+" onPress={() =>{addSubject(tempItem)} }/>
                </View>

            </View>

        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        alignItems:'center'
        
    },
    titleContainer:{
        
        padding: 16,
        justifyContent: 'center',
    },
    title:{
        
        fontWeight: 'bold',
        fontWeight:'bold',
        fontSize: 24,
    },
    inputContainer:{
        paddingTop: 20,
        flexDirection: 'row',
        alignItems:"center"
    },
})
export default Focus;