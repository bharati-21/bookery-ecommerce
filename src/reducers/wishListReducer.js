const wishListActionTypes = {
	INIT_WISHLIST_ITEMS: "INIT_WISHLIST_ITEMS",
	ADD_TO_WISHLIST_FAILURE: "ADD_TO_WISHLIST_FAILURE",
	ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
};

const wishListReducerFunction = (
	prevWishListState,
	{ type, payload: { wishListItems, error, loading } }
) => {
	switch (type) {
		case wishListActionTypes.INIT_WISHLIST_ITEMS:
			return { ...prevWishListState, wishListItems, error, loading };

		case wishListActionTypes.ADD_TO_WISHLIST_FAILURE:
			return {
				...prevWishListState,
				error,
				loading,
			};

		case wishListActionTypes.ADD_TO_WISHLIST:
			return {
				...prevWishListState,
				wishListItems,
				error,
				loading,
			};

		default:
			return { ...prevWishListState };
	}
};

export { wishListReducerFunction };
