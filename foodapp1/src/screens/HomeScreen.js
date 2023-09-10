import React from 'react';
import {View, Text, StatusBar, TextInput, StyleSheet} from 'react-native';
import HomeHeadNav from '../components/HomeHeadNav';
import Categories from '../components/Categories';
import OfferSlider from '../components/OfferSlider';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../globals/style';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeadNav />
      <View style={styles.searchbox}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={styles.searchicon}
        />
        <TextInput style={styles.input} placeholder="search" />
      </View>
      <Categories />
      <OfferSlider />

      {/* <Text>HomeScreen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    alignItems: 'center',
    width: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
});
export default HomeScreen;
