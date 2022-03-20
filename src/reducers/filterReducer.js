const filterActions = {
    FILTER_BY_GENRE: 'FILTER_BY_GENRE',
    FILTER_BY_PRICE: 'FILTER_BY_PRICE',
    FILTER_BY_RATINGS: 'FILTER_BY_RATINGS',
    FILTER_BY_BOOK_TYPE: 'FILTER_BY_BOOK_TYPE',
    SORT_BY: 'SORT_BY',
    CLEAR_FILTERS: 'CLEAR_FILTERS'
};

const initialFilterState = {
    sortBy: '',
    genres: {
        "Fiction": false,
        "Non-Fiction": false,
        "Romance": false,
        "Classics": false,
        "Fantasy": false,
        "Mystery": false,
        "Thriller": false,
    },
    ratingsMoreThan: 0,
    price: 1000,
    bookType: {
        Paperback: false,
        Hardcover: false
    }
};

const filterReducerFunction = (prevFilterState, { filterType, filterPayload }) => {
    switch(filterType) {
        case filterActions.FILTER_BY_GENRE:
            return {...prevFilterState, 
                genres: {
                    ...prevFilterState.genres,
                    [filterPayload]: !prevFilterState.genres[filterPayload]
                }
            };

        case filterActions.FILTER_BY_BOOK_TYPE:
            return {...prevFilterState, 
                bookType: {
                    ...prevFilterState.bookType,
                    [filterPayload]: !prevFilterState.bookType[filterPayload]
                }
            };

        case filterActions.FILTER_BY_RATINGS: 
            return {...prevFilterState, ratingsMoreThan: filterPayload};

        case filterActions.FILTER_BY_PRICE: 
            return {...prevFilterState, price: filterPayload};
        
        case filterActions.SORT_BY:
            return {...prevFilterState, sortBy: filterPayload};
        
        case filterActions.CLEAR_FILTERS:
            return { ...initialFilterState };
    }
}

export { filterReducerFunction, initialFilterState};