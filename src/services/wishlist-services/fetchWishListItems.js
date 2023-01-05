import axios from "axios";

const fetchWishListItems = async (wishListDispatch, token) => {
	try {
		const {
			data: { wishlist },
		} = await axios.get(`${process.env.REACT_APP_API_URL}/users/wishlist`, {
			headers: { authorization: token },
		});

		wishListDispatch({
			type: "INIT_WISHLIST_ITEMS",
			payload: {
				wishListItems: wishlist,
				error: null,
				loading: false,
			},
		});
	} catch (error) {
		wishListDispatch({
			type: "ADD_TO_WISHLIST_FAILURE",
			payload: {
				error: "Wishlist items could not be fetched. Try again after sometime",
				loading: false,
			},
		});
	}
};

export { fetchWishListItems };
