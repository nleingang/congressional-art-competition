import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* addNewArtwork(action) {
  try {
      console.log('add new artwork saga hit with: ', action.payload)
    yield axios.post("/api/art/add-new-artwork", action.payload);
    // yield put({ type: "CLEAR_ITEMS" });
    // yield put({ type: "GET_AUCTION_ITEMS", payload: action.payload.auctionId });
  } catch (error) {
    console.log("Error with adding new item:", error);
  }
}

function* addNewArtworkSaga() {
  yield takeEvery("ADD_NEW_ARTWORK", addNewArtwork);
}
export default addNewArtworkSaga;
