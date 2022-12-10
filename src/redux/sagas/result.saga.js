import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* resultSaga() {
    yield takeLatest("FETCH_RESULT", fetchSpecificResult);
    yield takeLatest("FETCH_RESULTS", fetchAllResults);
    yield takeLatest("POST_RESULT", postResult);
    yield takeLatest("DELETE_RESULT", deleteResult);
}

function* fetchSpecificResult() {
    // Fetch a specific test result
    try {
      const result = yield axios.get('/api/result/');
      console.log('get result', result.data);
      yield put ({ type: 'SET_RESULT', payload: result.data });
    }catch(error) {
      console.log('get Result error', error);
    }
}

function* fetchAllResults() {
    // Fetch all test results
}

function* postResult(action) {
    try {
        console.log('post result saga')
        yield axios.post(`/api/result`, action.payload);
        if (action.history) {
          action.history.push(`/results/${results.data.id}`);
        }
      } catch (e) {
        console.log(e);
        alert('something went wrong');
      }
    }


function* deleteResult() {
    // Delete a test result
}

export default resultSaga;
