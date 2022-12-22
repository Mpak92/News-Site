const SET_NEWS_ID = 'SET_NEWS_ID';
const ADD_NEWS = 'ADD_NEWS';

const initialState = {
    latestNews: [],
    lastNewsId: []
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_ID:
            return {
                ...state,
                lastNewsId: action.data,
            };

        case ADD_NEWS:
            return {
                ...state,
                latestNews: [...state.latestNews, action.news],
            };

        default:
            return state;
    }
}

export const setNewsId = (data) => {
    return { type: SET_NEWS_ID, data };
};
export const addNews = (news) => {
    return { type: ADD_NEWS, news };
};

export default mainPageReducer;