import React, {useState} from 'react';

import{
View,
Text,
StyleSheet,

} from 'react-native';
import ScreenE from '../sceen/ScreenE';

function ScreenD(){
    const [focusSubject, setFocusSubject] =useState(null);
    return(
        <View style={styles.Container}>
             {focusSubject ? (
                <Text>here is Where i am going to build a Timer</Text>
            ):(
                <ScreenE addSubject ={setFocusSubject} />
            )}
            <Text>{focusSubject}</Text>
        </View>
    );   
}
const styles = StyleSheet.create({
    Container:{
        
        padding: 50
        
    },
  });
export default ScreenD;