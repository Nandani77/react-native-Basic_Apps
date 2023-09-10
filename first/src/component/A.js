import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
const A = () =>{

    return(
        <View>
            <Text>Hello A</Text>
            <View style={styles.Container}>
                <Text style={styles.Title}>Guys just chill</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        padding:24,
        
    },
    Title:{
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    }
})
export default A;