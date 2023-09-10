import React from "react";
import { View,Text,StyleSheet, ScrollView, Image } from "react-native";
const MeChat = () =>{
    const contacts =[
            {
                uid: 1,
                name: 'Vishnu Kumar',
                status:'Making your GPay smooth',
                imageUrl:'https://media.licdn.com/dms/image/D4D03AQGDc34y69mlPA/profile-displayphoto-shrink_400_400/0/1670562219951?e=1697673600&v=beta&t=CDsX0ZscoqVWdPQ7sZ8MQnGOLh3fLkkpdmEGpNXUA7k'
            },
            { 
                uid: 2,
                name: 'Abhay Kumar ',
                status:'I like to code and Teach',
                imageUrl:'https://media.licdn.com/dms/image/C5103AQHeF8-cos8wPw/profile-displayphoto-shrink_400_400/0/1549647021827?e=1697673600&v=beta&t=5koPVyVb0yMfMh_Mn8dRayP70QzlyYFxHPmi0IDFL_s'
            },
            {
                uid: 3,
                name: 'Saloni Jain',
                status:'Making your GPay smooth',
                imageUrl:'https://media.licdn.com/dms/image/D4D03AQHsJekoCWxNlA/profile-displayphoto-shrink_400_400/0/1680107460992?e=1697673600&v=beta&t=LO6tN8SSGhq6qSobqqKBJm-kWUNIlD_834H4lUhaEYM'
        
            },
            { 
                uid: 4,
                name: 'Er.Shubham',
                status:'Making your GPay smooth',
                imageUrl:'https://media.licdn.com/dms/image/D5635AQHUQErdVkdNGg/profile-framedphoto-shrink_400_400/0/1691077924006?e=1692637200&v=beta&t=oIIjKZCu-naPndrtxoS1PJ7IqjgddzFgBPF8U-QV8GM'
        
            },
            { 
                uid: 5,
                name: 'Md Nazeer',
                status:'Making your GPay smooth',
                imageUrl:'https://media.licdn.com/dms/image/D4D03AQFbn-a2a2SssQ/profile-displayphoto-shrink_400_400/0/1689217871572?e=1697673600&v=beta&t=fdHJwmAQx20GVqM9RvHXks7ADKjM52ursyGyaqgMlp8'
        
            },
    
        {
            uid: 6,
            name: 'Raj Nandani',
            status:'Making your GPay smooth',
           imageUrl:'https://media.licdn.com/dms/image/C4D03AQG2B3QoKe_G0A/profile-displayphoto-shrink_400_400/0/1627964183835?e=1697673600&v=beta&t=fdWYaI88meVZH6UmsxhJKNi4ByXGjIJaDFSxwxDAbpk'
        },
        { 
            uid: 7,
            name: 'Niharika bansal',
            status:'Making your GPay smooth',
            imageUrl:'https://media.licdn.com/dms/image/D5603AQEjNX0u581eIA/profile-displayphoto-shrink_400_400/0/1676009804640?e=1697673600&v=beta&t=xm456NMKGLcfk98HMBlBZfpZOwPZaySLm35g9qyHfhU'
        },
        {
            uid: 8,
            name: 'Pratibha kumari',
            status:'Making your GPay smooth',
            imageUrl:'https://media.licdn.com/dms/image/D4D03AQFgK6yC3s2vDQ/profile-displayphoto-shrink_400_400/0/1679736457421?e=1697673600&v=beta&t=tvNhJeyky8Y1ibbRr2zA2bxtF6IIKy0T5vKO0lWWwWY'
    
        },
        { 
            uid: 9,
            name: 'Vedika bansal',
            status:'Making your GPay smooth',
            imageUrl:'https://media.licdn.com/dms/image/D4D03AQFbwRCYqSrU8w/profile-displayphoto-shrink_400_400/0/1673853930215?e=1697673600&v=beta&t=e6VK0GLSoz3twHtNIucC5hJIJW9aX3h0AP3lK5dXNrk'
    
        },
        { 
            uid: 10,
            name: 'Mitali',
            status:'Making your GPay smooth',
            imageUrl:'https://media.licdn.com/dms/image/C4E03AQHuhHED0snX8A/profile-displayphoto-shrink_400_400/0/1648220862961?e=1697673600&v=beta&t=bRnEg1uW-wVODcw11UUYS79v0SsYj7e6a9yw0lugluI'
    
        }
    ];
    const story =[
        {
            uid: 1,
            name: 'My Story',
            status:'Making your GPay smooth',
            imageUrl:'https://media.licdn.com/dms/image/C4D03AQG2B3QoKe_G0A/profile-displayphoto-shrink_400_400/0/1627964183835?e=1697673600&v=beta&t=fdWYaI88meVZH6UmsxhJKNi4ByXGjIJaDFSxwxDAbpk'
        },
        { 
            uid: 2,
            name: 'Niharika',
            status:'I like to code and Teach',
            imageUrl:'https://media.licdn.com/dms/image/D5603AQEjNX0u581eIA/profile-displayphoto-shrink_400_400/0/1676009804640?e=1697673600&v=beta&t=xm456NMKGLcfk98HMBlBZfpZOwPZaySLm35g9qyHfhU'
        },
        {
            uid: 3,
            name: 'Pratibha',
            status:'Making your GPay smooth',
            imageUrl:'https://media.licdn.com/dms/image/D4D03AQFgK6yC3s2vDQ/profile-displayphoto-shrink_400_400/0/1679736457421?e=1697673600&v=beta&t=tvNhJeyky8Y1ibbRr2zA2bxtF6IIKy0T5vKO0lWWwWY'
    
        },
        { 
            uid: 4,
            name: 'Vedika',
            status:'Making your GPay smooth',
            imageUrl:'https://media.licdn.com/dms/image/D4D03AQFbwRCYqSrU8w/profile-displayphoto-shrink_400_400/0/1673853930215?e=1697673600&v=beta&t=e6VK0GLSoz3twHtNIucC5hJIJW9aX3h0AP3lK5dXNrk'
    
        },
        { 
            uid: 5,
            name: 'Mitali',
            status:'Making your GPay smooth',
            imageUrl:'https://media.licdn.com/dms/image/C4E03AQHuhHED0snX8A/profile-displayphoto-shrink_400_400/0/1648220862961?e=1697673600&v=beta&t=bRnEg1uW-wVODcw11UUYS79v0SsYj7e6a9yw0lugluI'
    
        }
    ];
    return(
        <View>
            <Text style ={styles.headingText}>MeChat</Text>
            <View>
            <Text style ={styles.heading}>Stories</Text>
            <ScrollView style = {styles.containers}
             horizontal = {true}
            >

            {story.map(({uid, name, imageUrl}) => (
            <View key={uid} style={styles.usersCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.usersImage}/>
                <View>
                <Text style={styles.usersName}>{name}</Text>
                </View>
            </View>
          ))
          }   
         </ScrollView>
         <ScrollView style = {styles.container}
             scrollEnabled={false}>
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
        </View>
    );
}
const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: "500",
        paddingHorizontal:8,
        backgroundColor:'#8c52cd',
        paddingBottom:50,
        color:'white',
        
    },
    heading:{
        fontSize: 20,
        fontWeight: "600",
        paddingHorizontal:8,
        color:'#000'
    },
    containers:{
        paddingHorizontal: 16,
        marginBottom:4
        },
        usersCard:{
            flex:1,
            alignItems:'center',
            marginBottom:3,
            padding:4,
            borderRadius:10
           
        },
        usersImage:{
            width:60,
            height:60,
            borderRadius:60/2,
            marginRight:14
        },
        usersName:{
            fontSize: 14,
            fontWeight:'500',
            color:'#000',
            
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
                backgroundColor:'#ededee',
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
                color:'#000'
            },
            userStatus:{
                fontSize:12,
                color:'#000'
            }
});
export default MeChat;