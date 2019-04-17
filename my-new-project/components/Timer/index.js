//index.js-> presenter.js
//index.js: store에 필요한 것들을 넣는다.

//#presenter에는 자바스크립트 여기에는 present만 하는것임
//#indext에서는 state 혹은 리덕스 작업을 할 것임. 
//#이 컴포넌트의 현재 state을 불러옴, 이는 provider store에서 불러와
//왜냐면 provider는 자동으로 state을 복사하기 때문이지~
//store에 있는 state을 복사해서, 타이머에 붙여 넣는다.~
//funtion안에서 state을 열고 props를 리턴하는거여~

import { connect } from "react-redux";
import Timer from "./presenter";

function mapStateToProps(state){
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  }
}

//mapStateToProps객체를 Timer에 연결한다!(presenter.js에 있다.)
export default connect(mapStateToProps)(Timer);