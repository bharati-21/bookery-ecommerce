import axios from "axios";
export const fetchCartItems = async (cartDispatch, token) => {
	try {
		const {
			data: { cart },
		} = await axios.get("/api/user/cart", {
			headers: { authorization: token },
		});

		cartDispatch({
			type: "INIT_CART_ITEMS",
			payload: {
				cartItems: cart,
				error: null,
				loading: false,
			},
		});
	} catch (error) {
		cartDispatch({
			type: "INIT_CART_FAILURE",
			payload: {
				error: "Cart items could not be fetched. Try again after sometime",
				loading: false,
			},
		});
	}
};
