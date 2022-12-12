import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* facilitySaga() {
    yield takeLatest("FETCH_DEFAULT_FACILITY", fetchDefaultFacility);
    yield takeLatest("FETCH_SPECIFIC_FACILITY", fetchSpecificFacility);
    yield takeLatest("FETCH_FACILITIES", fetchAllFacilities);
    yield takeLatest("POST_FACILITY", postFacility);
    yield takeLatest("DELETE_FACILITY", deleteFacility);
    yield takeLatest("PUT_FACILITY", updateFacility);
    yield takeLatest("FETCH_USER_FACILITY", fetchUserFacility);
    yield takeLatest("PUT_USER_FACILITY", updateUserFacility);
}

function* fetchDefaultFacility(action) {
    console.log("specific facility", action);
    try {
        const facilities = yield axios.put(
            `/api/facility/default/`,
            action.payload
        );
        yield put({ type: "SET_DEFAULT_FACILITY", payload: facilities.data });
    } catch (error) {
        console.log("error in fetchAllFacilities saga");
    }
}

function* fetchSpecificFacility(action) {
    try {
        console.log("Fetching specific facility", action);
        const facility = yield axios.get(
            `/api/facility/edit/${action.payload.id}`
        );
        yield put({
            type: "SET_FACILITY_DETAILS",
            payload: facility.data,
        });
    } catch (e) {
        console.log("Error fetching specific facility");
        alert("Something went wrong fetching specific facility");
    }
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

function* postFacility(action) {
    console.log("postfacility", action);
    try {
        yield axios.post("/api/facility", action.payload);
    } catch (e) {
        console.log("Error creating a new facility", e);
        alert("Something went wrong creating a facility");
    }
}

function* deleteFacility(action) {
    try {
        yield axios.delete(`api/facility/${action.payload.id}`);
        yield put({ type: "FETCH_FACILITIES" });
    } catch (error) {
        console.log("Error deleting specific facility");
        alert("Something went wrong deleting the facility");
    }
}

function* updateFacility(action) {
    try {
        yield axios.put(`api/facility/${action.payload.id}`, action.payload);
    } catch (e) {
        console.log("Something went wrong updating facility details");
        alert("Something went wrong updating facility details");
    }
}

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
