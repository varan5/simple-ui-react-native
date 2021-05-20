import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TitleBar from './TitleBar';

const DashboardTitle = () => {
  return (
    <View style={styles.containerStyle}>
      <TitleBar />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    width: 100,
  },
});

export default DashboardTitle;
