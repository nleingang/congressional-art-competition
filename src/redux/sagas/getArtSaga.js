import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getArt(action) {
  try {
    const response = yield axios.get(
      `/api/art/`
    );
    yield put({ type: "SET_ALL_ART", payload: response.data });
  } catch (error) {
    console.log("Error with getting art:", error);
  }
}

function* getAuctionItemsSaga() {
  yield takeEvery("GET_ALL_ART", getArt);
}
export default getAuctionItemsSaga;