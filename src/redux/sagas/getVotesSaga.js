import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getVotes(action) {
  try {
    const response = yield axios.get(
      `/api/votes/`
    );
    yield put({ type: "SET_VOTES", payload: response.data });
  } catch (error) {
    console.log("Error with getting votes:", error);
  }
}

function* getVotesSaga() {
  yield takeEvery( 'GET_VOTES', getVotes);
}
export default getVotesSaga;