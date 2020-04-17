import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* voteSubmit(action) {
  try {
     console.log("redux saga hit with:", action.payload);
     let votes = {
       firstChoiceId: action.payload[0],
       secondChoiceId: action.payload[1],
       thirdChoiceId: action.payload[2]
     }
     console.log(votes)
    yield axios.post("/api/art/vote-submit", votes);
  } catch (error) {
    console.log("Error with vote submission:", error);
  }
}

function* voteSubmitSaga() {
  yield takeEvery("SUBMIT_VOTE", voteSubmit);
}
export default voteSubmitSaga;
