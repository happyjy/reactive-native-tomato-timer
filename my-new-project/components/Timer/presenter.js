import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render(){
    console.log("### PRESENTER> THIS.PROPS"); 
    console.log(this.props);
    const { isPlaying, elapsedTime, timerDuration } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}> 25:00 </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && (
            <Button iconName="play-circle" onPress={ () => alert("this is play") }/>
          )}
          {isPlaying && (
            <Button iconName="stop-circle" onPress={ () => alert("this is stop") }/>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc0b24'
  },
  upper: {
    flex: 2,
    justifyContent: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: 'white',
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;