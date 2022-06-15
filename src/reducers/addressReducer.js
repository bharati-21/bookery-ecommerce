const addressActionTypes = {
	SET_ADDRESSES: "SET_ADDRESSES",
	SET_ADDRESS_LOADER_ERROR: "SET_ADDRESS_LOADER_ERROR",
	SET_ADDRESS_MODAL_VISIBILITY: "SET_ADDRESS_MODAL_VISIBILITY",
};

const addressReducerFunction = (prevAddressState, { type, payload }) => {
	switch (type) {
		case addressActionTypes.SET_ADDRESSES:
			return {
				...prevAddressState,
				addresses: payload.addresses,
			};

		case addressActionTypes.SET_ADDRESS_LOADER_ERROR:
			return {
				...prevAddressState,
				addressLoading: payload.loading,
				addressError: payload.error,
			};

		case addressActionTypes.SET_ADDRESS_MODAL_VISIBILITY:
			return {
				...prevAddressState,
				addressFormModalVisibility: payload.modalVisibility,
				addressToEdit: payload.addressToEdit,
			};

		default:
			return { ...prevAddressState };
	}
};

export { addressReducerFunction };
