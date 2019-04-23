// #presenter.js 
//  - index.js -> presenter.js(원래 index.js에 있던 내용을 presenter로 이동한다.)
//  - present역할만 하는 것임.
// #index.js : 
//  - state 혹은 리덕스 작업을 할 것임.
//  - store에 필요한 것들을 넣는다.
//  - state을 불러옴, 이는 provider store에서 불러와
//  - 왜냐면 provider는 자동으로 state을 복사하기 때문이지~
//  - store에 있는 state을 복사해서, 타이머에 붙여 넣는다~
//  - funtion 안에서 state을 열고 props를 리턴하는거여~

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state){
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  }
}

function mapsDispatchToProps(dispatch){
  return{
    //key: props 이름(apps.js > this.props 객체에서 확인 할 수 있다.)
    //value: reducer 이름
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  }
}

//# mapStateToProps객체를 Timer에 연결한다!(presenter.js에 있다.)
export default connect(mapStateToProps, mapsDispatchToProps)(Timer);