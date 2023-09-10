import React from "react";
import {View, StyleSheet} from "react-native";
import RoundedButton from "../component/roundedButton";


 const Timing = ({onChangeTime}) =>{
return(
    <>
    <View style={styles.TimingButton}>
    <RoundedButton  title = "10" onPress={()=>onChangeTime(10)}/>
    </View>
    <View style={styles.TimingButton}>
    <RoundedButton  title = "15" onPress={()=>onChangeTime(15)}/>
    </View>
    <View style={styles.TimingButton}>
    <RoundedButton title = "20" onPress={()=>onChangeTime(20)}/>
    </View>
    </>
);
 }

 const styles = StyleSheet.create({
    TimingButton:{
       alignItems:"center",
       
    }
 });
 export default Timing;