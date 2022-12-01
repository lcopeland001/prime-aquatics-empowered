import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* facilitySaga() {
    yield takeLatest("FETCH_FACILITY", fetchSpecificFacility);
    yield takeLatest("FETCH_FACILITIES", fetchAllFacilities);
    yield takeLatest("POST_FACILITY", postFacility);
    yield takeLatest("DELETE_FACILITY", deleteFacility);
    yield takeLatest("PUT_FACILITY", updateFacility);
}

function* fetchSpecificFacility() {
    // Fetch specific facility
    // try {
    //     const facility = yield axios.get ('/api/facility');
    //     console.log('get facility:', facility.data);
    //     yield put ({ type: 'SET_FACILITY', payload: })
    // }
}

function* fetchAllFacilities() {
    // Fetch all facilities user has access to
}

function* postFacility() {
    // Post a new facility
}

function* deleteFacility() {
    // Delete a facility
}

function* updateFacility() {}

export default facilitySaga;
