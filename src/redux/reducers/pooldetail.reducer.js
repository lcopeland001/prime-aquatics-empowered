const poolDetail = (state = [], action) => {
    switch (action.type) {
        case "SET_POOL_DETAIL":
            return action.payload;
        default:
            return state;
    }
};

export default poolDetail;
