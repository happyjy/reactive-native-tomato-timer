import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import Timer from "./components/Timer";

let store = createStore(reducer);

console.log("### THIS IS STORE OBJECT");
console.log(store.getState());
console.log(store);

export default class App extends React.Component {
  render() {
    return (
      //이 뜻은 timer가 store와 연결 된다라는 의미
      <Provider store={store}>  
        <Timer />
      </Provider>
    );
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
