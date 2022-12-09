import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
    try {
        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        };

        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.get("/api/user", config);

        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        yield put({ type: "SET_USER", payload: response.data });
    } catch (error) {
        console.log("User get request failed", error);
    }
}

function* fetchAllUsers() {
    try {
        const users = yield axios.get("/api/user/all");
        yield put({
            type: "SET_USERS",
            payload: users.data,
        });
    } catch (error) {
        console.log("Error fetching all users", error);
        alert("Something went wrong fetching all users");
    }
}

function* updateUserProfile(action) {
    try {
        yield axios.put(
            `/api/user/profile/${action.payload.id}`,
            action.payload
        );
        yield put({
            type: "FETCH_USER",
        });
    } catch (error) {
        console.log("Error updating user profile", error);
        alert("Something went wrong updating user profile");
    }
}

function* updateUserAccess(action) {
    console.log("updateUserAccess is", action);
    try {
        yield axios.put(
            `/api/user/access/${action.payload.id}`,
            action.payload
        );
        yield put({
            type: "FETCH_USER",
        });
    } catch (error) {
        console.log("Something went wrong updating user access", error);
        alert("Something went wrong updating user access");
    }
}

function* userSaga() {
    yield takeLatest("FETCH_USER", fetchUser);
    yield takeLatest("FETCH_USERS", fetchAllUsers);
    yield takeLatest("PUT_USER_PROFILE", updateUserProfile);
    yield takeLatest("PUT_USER_ACCESS", updateUserAccess);
}

export default userSaga;
