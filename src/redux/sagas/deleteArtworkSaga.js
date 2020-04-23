import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* deleteArtwork(action) {
  try {
    console.log(action.payload);
    yield axios.delete("/api/art/delete/" + action.payload);
    yield put({ type: "GET_ALL_ART" });
  } catch (error) {
    console.log("error deleting item", error);
  }
}

function* deleteArtworkSaga() {
  yield takeEvery("DELETE_ARTWORK", deleteArtwork);
}

export default deleteArtworkSaga;
