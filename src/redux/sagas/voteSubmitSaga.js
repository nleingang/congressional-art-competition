import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* voteSubmit(action) {
  try {
    yield axios.post("/api/art/vote-submit", action.payload);
    // console.log('redux saga hit with:', action.payload)
  } catch (error) {
    console.log("Error with vote submission:", error);
  }
}

function* voteSubmitSaga() {
  yield takeEvery("ADD_NEW_ITEM", voteSubmit);
}
export default voteSubmitSaga;
