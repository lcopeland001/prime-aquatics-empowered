const userFacility = (state = [], action) => {
    switch (action.type) {
        case "SET_USER_FACILITY":
            return action.payload;
        default:
            return state;
    }
};

export default userFacility;
