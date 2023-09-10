import React from "react";
import { View,Text, StyleSheet, ScrollView, Image } from "react-native";


const ContectList=()=>{
    const contacts =[
    {
        uid: 1,
        name: 'Raj Nandani',
        status:'Making your GPay smooth',
        imageUrl:'https://media.licdn.com/dms/image/C4D03AQG2B3QoKe_G0A/profile-displayphoto-shrink_400_400/0/1627964183835?e=1697673600&v=beta&t=fdWYaI88meVZH6UmsxhJKNi4ByXGjIJaDFSxwxDAbpk'
    },
    { 
        uid: 2,
        name: 'Niharika Bansal',
        status:'I like to code and Teach',
        imageUrl:'https://media.licdn.com/dms/image/D5603AQEjNX0u581eIA/profile-displayphoto-shrink_400_400/0/1676009804640?e=1697673600&v=beta&t=xm456NMKGLcfk98HMBlBZfpZOwPZaySLm35g9qyHfhU'
    },
    {
        uid: 3,
        name: 'Pratibha Kumari',
        status:'Making your GPay smooth',
        imageUrl:'https://media.licdn.com/dms/image/D4D03AQFgK6yC3s2vDQ/profile-displayphoto-shrink_400_400/0/1679736457421?e=1697673600&v=beta&t=tvNhJeyky8Y1ibbRr2zA2bxtF6IIKy0T5vKO0lWWwWY'

    },
    { 
        uid: 4,
        name: 'Vedika Bansal',
        status:'Making your GPay smooth',
        imageUrl:'https://media.licdn.com/dms/image/D4D03AQFbwRCYqSrU8w/profile-displayphoto-shrink_400_400/0/1673853930215?e=1697673600&v=beta&t=e6VK0GLSoz3twHtNIucC5hJIJW9aX3h0AP3lK5dXNrk'

    },
    { 
        uid: 5,
        name: 'Mitali Singh',
        status:'Making your GPay smooth',
        imageUrl:'https://media.licdn.com/dms/image/C4E03AQHuhHED0snX8A/profile-displayphoto-shrink_400_400/0/1648220862961?e=1697673600&v=beta&t=bRnEg1uW-wVODcw11UUYS79v0SsYj7e6a9yw0lugluI'

    }
];
    return(
        <View>
            <Text style ={styles.headingText}> ContectList</Text>
            <ScrollView style = {styles.container}
             scrollEnabled={false}
            >

            {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}/>
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style = {styles.userStatus}>{status}</Text>
                </View>
            </View>
          ))
          }   
         </ScrollView>
        
        </View>
    );

}
const styles = StyleSheet.create({
headingText:{
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal:8,
},
container:{
paddingHorizontal: 16,
marginBottom:4
},
userCard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:3,
    backgroundColor:'#8d3daf',
    padding:4,
    borderRadius:10
   
},
userImage:{
    width:60,
    height:60,
    borderRadius:60/2,
    marginRight:14
},
userName:{
    fontSize: 16,
    fontWeight:'600',
    color:'#FFF'
},
userStatus:{
    fontSize:12
}
});
export default ContectList;