import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* resultSaga() {
    yield takeLatest("FETCH_RESULT", fetchSpecificResult);
    yield takeLatest("FETCH_RESULTS_BY_POOL", fetchResultsByPool);
    yield takeLatest("POST_RESULT", postResult);
    yield takeLatest("DELETE_RESULT", deleteResult);
}

// This fetches a specific result by the id of the result

function* fetchSpecificResult(action) {
    // Fetch a specific test result
    try {
        const result = yield axios.get(
            `/api/result/detail/${action.payload.id}`
        );
        console.log("Specific result", result);
        yield put({ type: "SET_RESULT", payload: result.data });
    } catch (error) {
        console.log("get Result error", error);
    }
}

// This fetches ALL results for a chosen pool (by pool id)

function* fetchResultsByPool(action) {
    // Fetch all test results
    try {
        const result = yield axios.get(`/api/result/pool/${action.payload.id}`);
        console.log("All results for chosen pool", result);
        yield put({ type: "SET_RESULT", payload: result.data });
    } catch (error) {
        console.log("get Result error", error);
    }
}

function* postResult(action) {
    try {
        const results = yield axios.post(`/api/result`, action.payload);
        console.log("what is coming back from the server?", results.data.id);
        if (action.history) {
            action.history.push(`/result/${results.data.id}`);
        }
    } catch (e) {
        console.log(e);
        alert("something went wrong");
    }
}

function* deleteResult() {
    // Delete a test result
}

export default resultSaga;
