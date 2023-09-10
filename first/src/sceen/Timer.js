import React,{useState} from "react";
import{ StyleSheet, View,Text, Vibration, Platform } from "react-native";
import{ProgressBar} from 'react-native-paper';

import Countdown from '../component/Countdown';
import RoundedButton from "../component/roundedButton";
import Timing from '../sceen/Timing';

const Timer = ({focusSubject}) => {
  const minutesToMillis = (min) => min * 1000 * 60;

const[millis, setMillis]= useState(minutesToMillis(minutes));
const[minutes , setMinutes] = useState(0.1);
const[isSterted, setIsStarted] = useState(false);
const[progress, setProgress] = useState(1);

const onProgress = (progress) =>{
  setProgress(progress)};

const vibrate =() =>{
  if(Platform.OS === 'android'){
const interval = setInterval (()=> Vibration.vibrate(), 1000);
    setTimeout(()=>clearInterval(interval), 10000);
  }else{
    Vibration.vibrate('10s');
  }
};
const onEnd = () =>{
  vibrate();
};
const changeTime = (min) =>{
  setMinutes(min);
  setProgress(1);
  setIsStarted(false);
  
};


  return(
    <View style = {styles.container}>
      <View style = {styles.Countdown}>
        <Countdown minutes={minutes} isPaused={!isSterted} onProgress={onProgress} onEnd={onEnd} millis={millis} setMillis={setMillis}/>
      </View>
      <View style = {{padding:30}}>
        <Text style = {styles.title}>Focusing on:</Text>
        <Text style = {styles.task}>{focusSubject}</Text>
      </View>
      <View style={{paddingTop:2}}>
      <ProgressBar
      progress={progress}
      color="#5E84E2"
      style={{height:10}}
      />
      </View>
      <View style = {styles.buttonWrapper}>
        <Timing onChangeTime = {changeTime}/>
      </View>
      <View style ={styles.buttonWrapper}>
        {isSterted ?
          (
             <RoundedButton title="pause" onPress={()=>setIsStarted(false)}/>
          ):( 
             <RoundedButton title="start" onPress={()=>setIsStarted(true)}/>
          )
        }
      </View>
     
      
    </View>
  );

}
 const styles = StyleSheet.create({
    container:{
        
    },
    title:{
        color:"white",
        textAlign:"center"
    },
    task:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
    },
    Countdown:{
      alignContent:"center",
      justifyContent:"center",
      padding:50,
      marginTop:50
    },
    buttonWrapper:{
      alignItems:"center",
      justifyContent:"center",
      padding:15,
      flexDirection:"row",
      
    }
   
 });
 export default Timer;