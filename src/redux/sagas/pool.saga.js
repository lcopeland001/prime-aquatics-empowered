import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* poolSaga() {
    yield takeLatest("FETCH_POOL", fetchSpecificPool);
    yield takeLatest("FETCH_POOLS", fetchAllPools);
    yield takeLatest("POST_FACILITY", postPool);
    yield takeLatest("DELETE_POOL", deletePool);
    yield takeLatest("PUT_POOL", updatePool);
    yield takeLatest("FETCH_USER_POOL", fetchUserPool);
    yield takeLatest("PUT_USER_POOL", updateUserPool);
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

function* postPool(action) {
    console.log("postPool", action);
    try {
        yield axios.post("/api/pool", action.payload);
    } catch (e) {
        console.log("Error creating a new pool", e);
        alert("Something went wrong creating a pool");
    }
}

function* deletePool(action) {
    try {
        yield axios.delete(`api/facility/${action.payload.id}`);
        yield put({ type: "FETCH_POOLS" });
    } catch (error) {
        console.log("Error deleting specific pool");
        alert("Something went wrong deleting the pool");
    }
}

function* updatePool(action) {
    try {
        yield axios.put(`api/pool/${action.payload.id}`, action.payload);
    } catch (e) {
        console.log("Something went wrong updating pool details");
        alert("Something went wrong updating pool details");
    }
}

function* fetchUserPool(action) {
    try {
        const pool = yield axios.get(
            `/api/pool/user/${action.payload.id}`
        );
        yield put({ type: "SET_USER_POOL", payload: pool.data });
    } catch (error) {
        console.log("error in fetchAllFacilities saga");
    }
}

function* updateUserPool(action) {
    console.log("update user pool", action);
    try {
        const pool = yield axios.put(
            `/api/pool/user/${action.payload.id}`,
            action.payload
        );
        yield put({ type: "SET_USER_POOL", payload: pool.data });
    } catch (error) {
        console.log("error updating user pool");
    }
}

export default poolSaga;
