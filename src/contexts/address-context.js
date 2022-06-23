import { createContext, useContext, useEffect, useReducer } from "react";

import { addressReducerFunction } from "reducers";
import { getAllAddresses } from "services";
import { useAuth } from "./";

const initialAddressState = {
	addresses: [],
	addressLoading: true,
	addressError: null,
	addressFormModalVisibility: false,
	addressToEdit: null,
};

const AddressContext = createContext(initialAddressState);
const { Provider } = AddressContext;

const AddressProvider = ({ children }) => {
	const {
		authState: { isAuth, token },
	} = useAuth();

	const fetchAddresses = async () => {
		try {
			const {
				data: { address },
			} = await getAllAddresses(token);
			addressDispatch({
				type: "SET_ADDRESSES",
				payload: { addresses: address },
			});
			addressDispatch({
				type: "SET_ADDRESS_LOADER_ERROR",
				payload: { loading: false, error: null },
			});
		} catch (error) {
			addressDispatch({
				type: "SET_ADDRESS_LOADER_ERROR",
				payload: { loading: false, error },
			});
		}
	};

	useEffect(() => {
		if (isAuth) {
			fetchAddresses();
		}
	}, [isAuth]);

	const [addressState, addressDispatch] = useReducer(
		addressReducerFunction,
		initialAddressState
	);

	return (
		<Provider value={{ ...addressState, addressDispatch }}>
			{children}
		</Provider>
	);
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
