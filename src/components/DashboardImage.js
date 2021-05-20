import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const DashboardImage = ({source, height, width}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.outerView}>
        <View style={styles.innerView}>
          <Image
            style={styles.imageStyle}
            source={source}
            height={height}
            width={width}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {},
  imageStyle: {
    margin: 20,
    marginTop: 25,
  },
  innerView: {
    backgroundColor: 'grey',
    margin: 10,
    borderRadius: 70,
    borderTopStartRadius: 100,
    borderTopEndRadius: 100,
    borderBottomEndRadius: 120,
    borderBottomStartRadius: 120,
    height: 120,
  },
  outerView: {
    backgroundColor: 'teal',
    margin: 10,
    // borderTopEndRadius: 110,
    // borderTopStartRadius: 110,
    // borderBottomEndRadius: 70,
    // borderBottomStartRadius: 70,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
});

export default DashboardImage;
