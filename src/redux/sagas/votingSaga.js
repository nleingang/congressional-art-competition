import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* voting(action) {
    console.log("voting saga hit with:" , action)
}

function* votingSaga() {
    takeEvery("SET_VOTE", voting);
}
export default votingSaga;
