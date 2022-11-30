const resultReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_RESULT":
            return action.payload;
        default:
            return state;
    }
};

export default resultReducer;
