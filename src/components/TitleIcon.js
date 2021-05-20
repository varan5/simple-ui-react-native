import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const TitleIcon = ({source}) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 30,
    width: 30,
    marginLeft: 20,
  },
});

export default TitleIcon;
