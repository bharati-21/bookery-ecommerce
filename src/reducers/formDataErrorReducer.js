const formDataErrorReducerFunction = (state, { type, payload }) => {
	switch (type) {
		case "SET_ERROR":
			return { ...state, [payload.name]: payload.value };
		case "CLEAR_ERROR":
			return { ...state, [payload.name]: null };
	}
};

export { formDataErrorReducerFunction };
