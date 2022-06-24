import { createContext, useContext, useReducer } from "react";

import { filterReducerFunction, initialFilterState } from "reducers/";

const FilterContext = createContext(initialFilterState);
const { Provider } = FilterContext;

const FilterProvider = ({ children }) => {
	const [filterState, filterDispatch] = useReducer(
		filterReducerFunction,
		initialFilterState
	);

	return (
		<Provider value={{ filterState, filterDispatch }}>{children}</Provider>
	);
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
