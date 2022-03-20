import { createContext, useContext, useReducer } from 'react';

import { filterReducerFunction } from '../reducers';

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
}

const FilterContext = createContext(initialFilterState);
const { Provider } = FilterContext;

const FilterProvider = ({ children }) => {
    const [filterState, filterDispatch] = useReducer( filterReducerFunction, initialFilterState);

    return (
        <Provider value={{filterState, filterDispatch}}>
            {children}
        </Provider>
    );
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };