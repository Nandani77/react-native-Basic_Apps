import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import logo1 from '../../../assets/logo1.png';
import {colors, hr80} from '../../globals/style';
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>welcome to Foodie</Text>
      <View style={styles.logoout}>
        <Image source={logo1} style={styles.fooddelivery} />
      </View>
      <View style={hr80} />
      <Text style={styles.text}>
        Find the best food around you at lowest price.
      </Text>
      <View style={hr80} />

      <View style={styles.btnout}>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fb2c1c',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: colors.col1,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '200',
  },
  logoout: {
    width: '80%',
    height: '40%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  fooddelivery: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    width: '80%',
    color: colors.col1,
    textAlign: 'center',
  },
  btnout: {
    flexDirection: 'row',
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
