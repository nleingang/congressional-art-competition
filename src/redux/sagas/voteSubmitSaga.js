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

function* securityCheck(action) {
  console.log(action.payload.email)
  try {
    const invalidEmail = yield axios.get('/api/voters/' + action.payload.email);
    if (invalidEmail.data) {
      yield put({ type: 'EMAIL_ALREADY_IN_USE' });
    } else {
      yield put({ type: 'CLEAR_EMAIL_ERROR' });
    }
    console.log("is email invalid?", invalidEmail)
  } catch (error) {
    yield put({ type: 'INVALID_EMAIL' });
    console.log(error);
  }
}

function* voteSubmitSaga() {
  yield takeEvery("SUBMIT_VOTE", voteSubmit);
  yield takeEvery("SECURITY_CHECK", securityCheck);
}
export default voteSubmitSaga;
