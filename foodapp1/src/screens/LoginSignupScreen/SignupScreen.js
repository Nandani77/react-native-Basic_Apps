import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {btn1, colors, titles, hr80} from '../../globals/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
const SignupScreen = ({navigation}) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [namefocus, setnamefocus] = useState(false);
  const [phonefocus, setphonefocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign Up</Text>
      {/* name */}
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          style={styles.ic1}
          color={namefocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="name"
          onFocus={() => {
            setnamefocus(true);
            setEmailfocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setphonefocus(false);
          }}
        />
      </View>
      {/* email */}
      <View style={styles.inputout}>
        <Fontisto
          name="email"
          size={24}
          style={styles.ic1}
          color={emailfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setphonefocus(false);
            setnamefocus(false);
          }}
        />
      </View>
      {/* phoneno */}
      <View style={styles.inputout}>
        <FontAwesome
          name="mobile-phone"
          size={29}
          style={styles.p}
          color={phonefocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onFocus={() => {
            setphonefocus(true);
            setEmailfocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setnamefocus(false);
          }}
        />
      </View>
      {/* password start */}
      <View style={styles.inputout}>
        <AntDesign
          name="lock"
          size={26}
          style={styles.ic1}
          color={passwordfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setPasswordfocus(true);
            setEmailfocus(false);

            setcPasswordfocus(false);
            setphonefocus(false);
            setnamefocus(false);
          }}
          secureTextEntry={showpassword === false ? true : false}
        />
        <Entypo
          name={showpassword == false ? 'eye-with-line' : 'eye'}
          size={24}
          style={styles.ic1}
          color="black"
          onPress={() => setShowpassword(!showpassword)}
        />
      </View>
      {/*  */}

      <View style={styles.inputout}>
        <AntDesign
          name="lock"
          size={26}
          style={styles.ic1}
          color={cpasswordfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder=" Conform Password"
          onFocus={() => {
            setcPasswordfocus(true);
            setEmailfocus(false);
            setPasswordfocus(false);

            setphonefocus(false);
            setnamefocus(false);
          }}
          secureTextEntry={showcpassword === false ? true : false}
        />
        <Entypo
          name={showcpassword == false ? 'eye-with-line' : 'eye'}
          size={24}
          style={styles.ic1}
          color="black"
          onPress={() => setShowcpassword(!showcpassword)}
        />
      </View>

      {/* password end */}
      <Text style={styles.address}>Please enter your address</Text>
      <View style={styles.inputout}>
        <TextInput style={styles.input1} placeholder="Enter your Address" />
      </View>
      <TouchableOpacity style={btn1}>
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btntxt,
            fontWeight: 'bold',
          }}>
          Sign up
        </Text>
      </TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With</Text>
      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <FontAwesome name="facebook-f" size={24} color="#4267B2" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80}></View>
      <Text style={styles.up}>
        Already have an account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate('login')}>
          {' '}
          Sign In
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: colors.col1,
    paddingBottom: 5,
    marginBottom: 5,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: 'center',
    margin: 10,
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 5,
    backgroundColor: '#b6b9b9',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
    //alignSelf: 'center',
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 4,
    width: '80%',
    color: colors.text3,
  },
  ic1: {
    marginTop: 6,
  },
  forgot: {
    color: colors.text2,
    marginTop: 3,
    marginBottom: 3,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  gftxt: {
    color: colors.text2,
    marginBottom: 10,
    fontSize: 22,
  },
  gf: {
    flexDirection: 'row',
  },
  gficon: {
    backgroundColor: 'white',
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  },
  p: {
    paddingTop: 3,
    marginTop: 6,
  },
  up: {
    color: colors.text2,
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20,
  },
  input1: {
    fontSize: 18,
    marginLeft: 4,
    width: '80%',
    color: colors.text3,
  },
});

export default SignupScreen;
