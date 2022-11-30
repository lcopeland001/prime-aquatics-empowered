const facilityReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_FACILITIES":
            return action.payload;
        default:
            return state;
    }
};

export default facilityReducer;
