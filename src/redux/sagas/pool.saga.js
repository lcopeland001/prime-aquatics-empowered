import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* poolSaga() {
    yield takeLatest("FETCH_POOL", fetchSpecificPool);
    yield takeLatest("FETCH_POOLS", fetchAllPools);
    yield takeLatest("POST_POOL", postPool);
    yield takeLatest("DELETE_POOL", deletePool);
    yield takeLatest("PUT_POOL", updatePool);
}

function* fetchSpecificPool(action) {
    console.log("Obtaining a specific pool", action);
    try {
        const pool = yield axios.get(`/api/pool/detail/${action.payload.id}`);
        yield put({ type: "SET_POOL_DETAIL", payload: pool.data });
    } catch (e) {
        console.log("Error getting specific pool", e);
        alert("Something went wrong obtaining a specific pool");
    }
}

function* fetchAllPools() {
    try {
        const pool = yield axios.get("/api/pool");
        console.log("get all:", pool.data);
        yield put({ type: "SET_POOL", payload: pool.data });
    } catch {
        console.log("get all error");
    }
}

function* postPool() {
    // Create a new pool
}

function* deletePool() {
    // Delete a pool
}

function* updatePool() {
    // Edit a pool
}
export default poolSaga;
