import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../globals/style';
const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categoties</Text>

      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={24}
            color="black"
            style={styles.myicon}
          />
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={24}
            color="black"
            style={styles.myicon}
          />
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="egg-fried"
            size={24}
            color="black"
            style={styles.myicon}
          />
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="ice-cream"
            size={24}
            color="black"
            style={styles.myicon}
          />
        </View>
        <View style={styles.box}>
          <FontAwesome6
            name="bowl-rice"
            size={24}
            color="black"
            style={styles.myicon}
          />
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="cookie-bite"
            size={24}
            color="black"
            style={styles.myicon}
          />
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="drumstick-bite"
            size={24}
            color="black"
            style={styles.myicon}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    width: '90%',
    elevation: 10,
    borderRadius: 10,
  },
  head: {
    color: colors.text1,
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  myicon: {
    marginRight: 10,
    color: colors.text3,
  },
});

export default Categories;
