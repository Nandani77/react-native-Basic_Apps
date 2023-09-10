import React, {useState} from 'react';
import{
View,
StyleSheet,
} from 'react-native';

import Focus from '../sceen/Focus';
import Timer from '../sceen/Timer';

function AppScreen(){
    const [focusSubject, setFocusSubject] =useState("gardening");
    return(
        <View style={styles.Container}>
             {focusSubject ? (
                <Timer focusSubject={focusSubject}/>
            ):(
                <Focus addSubject ={setFocusSubject} />
            )}   
        </View>
    );   
}
const styles = StyleSheet.create({
    Container:{
                
    },
  });
export default AppScreen;