const SET_NEWS_ID = 'SET_NEWS_ID';

const initialState = {
    lastNewsId: []
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_ID:
            return {
                ...state,
                lastNewsId: action.data,
            };

        default:
            return state;
    }
}

export const setNewsId = (data) => {
    return { type: SET_NEWS_ID, data };
};

export default mainPageReducer;