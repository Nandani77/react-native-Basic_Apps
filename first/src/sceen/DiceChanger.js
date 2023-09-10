import React, { useState } from "react";

import{Text,StyleSheet, View, Image, Pressable} from "react-native";

const Dice = ({imageUrl}) => {
  return(
    <View>
       <Image style ={styles.diceImage} source={imageUrl}/> 
     
    </View>
  )
}

const DiceChanger = () =>{
const DiceOne = require('../../assests/one.jpg')
const DiceTwo = require('../../assests/two.jpg') 
const DiceThree = require('../../assests/three.jpg')
const DiceFour = require('../../assests/four.jpg') 
const DiceFive = require('../../assests/five.jpg') 
const DiceSix = require('../../assests/six.jpg') 
  const[diceImage, setDiceImage] = useState(DiceOne);
  // todo
  const rollDiceTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) +1;

    switch(randomNumber){
      case 1 :
        setDiceImage(DiceOne)
        break;
      case 2 :
        setDiceImage(DiceTwo)
        break;
      case 3 :
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5 :
        setDiceImage(DiceFive)
        break;
      case 6 :
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
      
    }
 
}
    
return(
          <View style={styles.container}>
            <View style= {styles.diceImage}>
            <Dice imageUrl={ diceImage}/>
            </View>
           
         <Pressable onPress={rollDiceTap}>
           <Text style ={styles.rollDiceBtnText}>Roll the Dice</Text>
         </Pressable>  
         </View>
    );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#FFF2F2",
},
diceContainer:{
  margin:12,
},
diceImage:{
  
  width : 100,
  height:100,
},
rollDiceBtnText:{
  paddingVertical:10,
  paddingHorizontal:40,
  borderWidth:2,
  borderRadius:8,
  borderColor:'#2596be',
  fontSize:16,
  color:'black',
  fontWeight: '700',
  textTransform: 'uppercase',
  justifyContent:"flex-end"
},
});
export default DiceChanger;