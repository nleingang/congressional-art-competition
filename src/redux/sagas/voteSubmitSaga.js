import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

const zipArray = [
    55305,
    55343,
    55401,
    55402,
    55403,
    55404,
    55405,
    55406,
    55407,
    55408,
    55409,
    55410,
    55411,
    55412,
    55413,
    55414,
    55415,
    55416,
    55417,
    55418,
    55419,
    55421,
    55422,
    55423,
    55424,
    55426,
    55427,
    55428,
    55429,
    55430,
    55432,
    55436,
    55444,
    55450,
    55454,
    55455,
]

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

function* emailSecurityCheck(action) {

  let newEmail = action.payload.email;

  try {
    const invalidEmail = yield axios.get('/api/voters/' + newEmail);
    if (invalidEmail.data) {
      yield put({ type: 'EMAIL_ALREADY_IN_USE' });
    } else {
      yield put({ type: 'CLEAR_EMAIL_ERROR' });
    }
  } catch (error) {
    yield put({ type: 'INVALID_EMAIL' });
    console.log(error);
  }
}

function* zipSecurityCheck(action) {

  let newZip = action.payload.zip;

  try {
    if (zipArray.find( zip => newZip == zip )) {
      yield put({ type: 'CLEAR_ZIP_ERROR' });
    } else {
      yield put ({ type: 'INVALID_ZIP' });
    }
  } catch (error) {
    console.log(error);
  }
}

function* voteSubmitSaga() {
  yield takeEvery("SUBMIT_VOTE", voteSubmit);
  yield takeEvery("EMAIL_SECURITY_CHECK", emailSecurityCheck);
  yield takeEvery("ZIP_SECURITY_CHECK", zipSecurityCheck);
}
export default voteSubmitSaga;
