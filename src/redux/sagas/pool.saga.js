import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* poolSaga() {
    yield takeLatest("FETCH_POOL", fetchSpecificPool);
    yield takeLatest("FETCH_POOLS", fetchAllPools);
    yield takeLatest("POST_POOL", postPool);
    yield takeLatest("DELETE_POOL", deletePool);
    yield takeLatest("PUT_POOL", updatePool);
}

function* fetchSpecificPool() {
    // Fetch a specific pool
}

function* fetchAllPools() {
    try {
        const pool = yield axios.get('/api/pool');
        console.log('get all:', pool.data);
        yield put({ type: 'SET_POOL', payload: pool.data });

    } catch {
        console.log('get all error');
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
