const testResultReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_TEST_RESULT":
            return action.payload;
        default:
            return state;
    }
};

export default testResultReducer;
