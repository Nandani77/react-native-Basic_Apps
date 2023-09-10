import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet,} from "react-native";

const minutesToMillis = (min) => min * 1000 * 60;
const FormatTime = (time)=> time < 10 ? `0${time}`: time;

const Countdown=({
    minutes = 0.5,
    isPaused,
    onProgress,
    onEnd,
    millis,
    setMillis
}) => {

const interval = React.useRef(null);
//const[progress, setProgress] = useState(null);


    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;

const Countdown = () =>{
    setMillis((time) => {
        if(time == 0){
           clearInterval(interval.current);
           onEnd();
            return time;
        }
        const timeLeft = time - 1000;
        onProgress(timeLeft / minutesToMillis(minutes))
        return timeLeft;
    })
}
useEffect (()=>{
    setMillis(minutesToMillis(minutes))},
    [minutes])

useEffect (()=>{
    console.log(millis)},
    [millis])

useEffect (()=>{
    if(isPaused){
        if(interval.current) clearInterval(interval.current);
        return;
    }
interval.current = setInterval(Countdown, 1000);
return ()=> clearInterval(interval.current)
}, [isPaused])

    
    return(
        <Text style={styles.text}>{FormatTime(minute) }:{FormatTime(seconds)}</Text>
    );
}
const styles = StyleSheet.create({
text:{
    fontSize:80,
    fontWeight:"bold",
    color:"white",
    padding:18,
    backgroundColor:"#37578c",
}
});
export default Countdown;