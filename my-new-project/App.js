import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';

export default class App extends React.Component {
  render() {
    return <Timer />;
    // return (
    //   <View style={styles.container}>
    //     <Text>이제 이걸로 오늘은 토마토 타이머라는 앱을 만들어 볼꺼야 ~~~</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
