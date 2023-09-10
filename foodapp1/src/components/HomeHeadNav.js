import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../globals/style';
const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
      <Fontisto
        name="nav-icon-list-a"
        size={20}
        color="black"
        style={styles.myicon}
      />
      <View style={styles.containerin}>
        <Text style={styles.mytext}>Foodie</Text>
        <MaterialCommunityIcons
          name="food-outline"
          size={26}
          color="black"
          style={styles.myicon}
        />
      </View>
      <FontAwesome
        name="user-circle"
        size={26}
        color="black"
        style={styles.myicon}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.col1,
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerin: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  myicon: {
    color: colors.text1,
  },
  mytext: {
    color: colors.text1,
    fontSize: 24,
  },
});
export default HomeHeadNav;
