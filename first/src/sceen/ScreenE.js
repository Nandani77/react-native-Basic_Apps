import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import B from '../component/B';


const ScreenE = ({addSubject}) => {
    const [tempItem, setTempItem] = useState(null);
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What do you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput  placeholder='enter your like' style={{borderColor:"black",borderWidth:2, padding: 10, width:'80%', marginRight:20 }} onChangeText={(val)=>{setTempItem(val)}}
                    />
                    
                    <B title="+" onPress={() =>{addSubject(tempItem)} } />
                </View>

            </View>

        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        
        
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
export default ScreenE;