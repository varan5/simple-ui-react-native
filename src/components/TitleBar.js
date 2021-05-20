import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TitleIcon from './TitleIcon';
import profile from '../../assets/images/profile.jpeg';
import settings from '../../assets/images/settings.jpeg';

const TitleBar = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Dashboard</Text>
      <TitleIcon style={styles.iconStyle} source={profile} />
      <TitleIcon style={styles.iconStyle} source={settings} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 430,
    backgroundColor: 'teal',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 120,
    marginRight: 50,
  },
});

export default TitleBar;
