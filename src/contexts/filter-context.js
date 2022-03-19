import { createContext, useContext, useReducer } from 'react';

import { filterReducerFunction } from '../reducers';

const initialFilterState = {
    sortBy: '',
    genres: {
        isFiction: false,
        isNonFiction: false,
        isRomance: false,
        isClassics: false,
        isFantasy: false,
        isMystery: false,
        isThriller: false,
        isHumor: false
    },
    ratings: '',
    price: 1000,
    bookType: {
        isPaperback: false,
        isHardcover: false
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