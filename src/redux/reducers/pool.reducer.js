const poolReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_POOL":
            return action.payload;
        default:
            return state;
    }
};

export default poolReducer;
