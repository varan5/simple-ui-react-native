import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DashboardImage from './DashboardImage';
import message from '../../assets/images/message2.png';
import teams from '../../assets/images/teams2.png';
import todo from '../../assets/images/todo.png';
import bell from '../../assets/images/bell2.png';

const DashboardBody = () => {
  return (
    <View style={styles.containerStyle}>
      <DashboardImage source={message} height={60} width={100} />
      {/* <View style={styles.lineStyleVertical}></View> */}
      <DashboardImage source={teams} height={60} width={100} />
      <DashboardImage source={todo} height={60} width={100} />
      <DashboardImage source={bell} height={60} width={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 250,
    marginLeft: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lineStyleVertical: {
    height: '100%',
    width: 2,
    backgroundColor: 'black',
  },
  lineStyleHorizontal: {
    height: '100%',
    width: 2,
    backgroundColor: 'black',
  },
});

export default DashboardBody;
