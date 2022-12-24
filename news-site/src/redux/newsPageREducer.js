const SET_NEWS_DATA = 'SET_NEWS_DATA';
const ADD_NEWS_COMMENT = 'ADD_NEWS_COMMENT';

const initialState = {
    newsData: {},
    comments: []
};

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_DATA:
            return {
                ...state,
                newsData: action.data
            };

        case ADD_NEWS_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            };

        default:
            return state;
    }
}

export const setNewsData = (data) => {
    return { type: SET_NEWS_DATA, data };
};
export const addNewsComment = (comment) => {
    return { type: ADD_NEWS_COMMENT, comment };
};

export default newsPageReducer;