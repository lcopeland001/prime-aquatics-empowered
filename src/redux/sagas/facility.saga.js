import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* facilitySaga() {
    yield takeLatest("FETCH_FACILITY", fetchSpecificFacility);
    yield takeLatest("FETCH_FACILITIES", fetchAllFacilities);
    yield takeLatest("POST_FACILITY", postFacility);
    yield takeLatest("DELETE_FACILITY", deleteFacility);
    yield takeLatest("PUT_FACILITY", updateFacility);
    yield takeLatest("FETCH_USER_FACILITY", fetchUserFacility);
    yield takeLatest("PUT_USER_FACILITY", updateUserFacility);
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
    try {
        console.log("Fetching all facilities");
        const facilities = yield axios.get("/api/facility/all");
        yield put({
            type: "SET_FACILITY",
            payload: facilities.data,
        });
    } catch (error) {
        console.log("Error fetching all facilities");
        alert("Something went wrong fetching all facilities");
    }
}

function* postFacility() {
    // Post a new facility
}

function* deleteFacility() {
    // Delete a facility
}

function* updateFacility() {}

function* fetchUserFacility(action) {
    try {
        const facilities = yield axios.get(
            `/api/facility/user/${action.payload.id}`
        );
        yield put({ type: "SET_USER_FACILITY", payload: facilities.data });
    } catch (error) {
        console.log("error in fetchAllFacilities saga");
    }
}

function* updateUserFacility(action) {
    console.log("update user facility", action);
    try {
        const facilities = yield axios.put(
            `/api/facility/user/${action.payload.id}`,
            action.payload
        );
        yield put({ type: "SET_USER_FACILITY", payload: facilities.data });
    } catch (error) {
        console.log("error updating user facilities");
    }
}

export default facilitySaga;
