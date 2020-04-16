import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* addFirstVote(action) {
  try {
    console.log('redux saga hit with:', action.payload)
    let newState = {firstPlace: action.payload, secondPlace: '', thirdPlace: ''}
    yield put ({
        type: "SET_VOTE_CHOICES",
        payload: newState
    })
  } catch (error) {
    console.log("Error with vote:", error);
  }
}

function* votingSaga() {
  yield takeEvery("ADD_FIRST_VOTE", addFirstVote);
}
export default votingSaga;
