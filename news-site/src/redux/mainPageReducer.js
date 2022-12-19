const initialState = {
    newsName: 'newsName',
    rating: 0,
    authorName: 'authorName',
    publicationDate: 'publicationDate'
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default mainPageReducer;