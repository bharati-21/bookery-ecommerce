const filterActions = {
    FILTER_BY_GENRE: 'FILTER_BY_GENRE',
    FILTER_BY_PRICE: 'FILTER_BY_PRICE',
    FILTER_BY_RATINGS: 'FILTER_BY_RATINGS',
    FILTER_BY_BOOK_TYPE: 'FILTER_BY_BOOK_TYPE',
    SORT_BY_PRICE: 'SORT_BY_PRICE',
    SORT_BY_RATINGS: 'SORT_BY_RATINGS'
};

const filterReducerFunction = (prevFilterState, {filterType, filterPayload }) => {
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

    }
}

export { filterReducerFunction };