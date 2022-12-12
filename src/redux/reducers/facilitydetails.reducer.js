const facilityDetails = (state = [], action) => {
    switch (action.type) {
        case "SET_FACILITY_DETAILS":
            return action.payload;
        default:
            return state;
    }
};

export default facilityDetails;
