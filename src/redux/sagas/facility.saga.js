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
    // try{
    //     const config = {
    //         headers: { 'Content-Type' : 'application/json' },
    //         withCredentials: true,
    //     }
    //     const facility = yield axios.get('/api/facility', config);
    //     yield put ({ type: 'SET_FACILITY', payload: facility.data});
    // }catch(error){
    //     console.log('error in fetchAllFacilities saga');
    // }

}

function* fetchAllFacilities() {
    // Fetch all facilities user has access to
    // try{
    //     const facilities = yield axios.get("/api/facility");
    //     yield put ({ type: 'SET_FACILITY', payload: facilities.data});
    //     console.log('data here:',facilities.data)
    // }catch(error){
    //     console.log('error in fetchAllFacilities saga');
    // }
}

function* postFacility() {
    // Post a new facility
}

function* deleteFacility() {
    // Delete a facility
}

function* updateFacility() {}

export default facilitySaga;
