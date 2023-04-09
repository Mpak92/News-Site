const SET_NEWS_DATA = 'SET_NEWS_DATA';
const ADD_ROOT_COMMENTS = 'ADD_ROOT_COMMENTS';
const SHOW_NESTED_COMMENTS = 'SHOW_NESTED_COMMENTS';

const initialState = {
    newsData: {},
    rootComments: {}
};

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_DATA:
            return {
                ...state,
                newsData: action.data
            };

        case ADD_ROOT_COMMENTS:
            const listOfRootId = {};
            for (let i = 0; i < action.rootId.length; i++) {
                listOfRootId[action.rootId[i]] = false;
            }

            return {
                ...state,
                rootComments: listOfRootId
            };

        case SHOW_NESTED_COMMENTS:
            return {
                ...state,
                rootComments: {
                    ...state.rootComments,
                    [action.id]: !state.rootComments[action.id]
                }
            };

        default:
            return state;
    }
}

export const setNewsData = (data) => {
    return { type: SET_NEWS_DATA, data };
};
export const addRootComments = (rootId) => {
    return { type: ADD_ROOT_COMMENTS, rootId };
};
export const showNestedComments = (id) => {
    return { type: SHOW_NESTED_COMMENTS, id };
};

export default newsPageReducer;