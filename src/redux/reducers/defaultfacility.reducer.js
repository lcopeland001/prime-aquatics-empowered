const defaultFacility = (state = [], action) => {
    switch (action.type) {
        case "SET_DEFAULT_FACILITY":
            return action.payload;
        default:
            return state;
    }
};

export default defaultFacility;
