import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TitleBar = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Navaigation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: '34%',
    height: 50,
    width: 430,
    backgroundColor: 'teal',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 12,
    marginLeft: 160,
    marginRight: 50,
  },
});

export default TitleBar;
