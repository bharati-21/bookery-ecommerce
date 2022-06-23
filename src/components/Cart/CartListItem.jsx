import React, { useState } from "react";
import { useAuth, useCart, useWishList } from "contexts/";
import { getSellingPrice } from "utils/";
import { deleteProductInCart, postToWishList } from "services";
import { useToast, useUpdateCart } from "custom-hooks";

const CartListItem = ({ cartItem }) => {
	const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);
	const {
		author,
		bookType,
		coverImg,
		discountPercent,
		originalPrice,
		_id,
		title,
		qty,
	} = cartItem;

	const sellingPrice = getSellingPrice(originalPrice, discountPercent);

	const localeSellingPrice = sellingPrice.toLocaleString("en-IN", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const {
		authState: { token },
	} = useAuth();
	const { showToast } = useToast();
	const { cartDispatch } = useCart();
	const {
		wishListState: { wishListItems },
		wishListDispatch,
	} = useWishList();

	const { callUpdateProductInCart } = useUpdateCart();

	const handleCartQuantityButtonClick = async (event) => {
		const { value } = event.target;
		let operation = "";
		switch (value) {
			case "DECREASE_QUANTITY":
				operation = "decrement";
				break;
			case "INCREASE_QUANTITY":
				operation = "increment";
				break;
			default:
				operation = "";
				break;
		}

		if (operation === "decrement" && qty === 1) {
			return handleRemoveFromCart();
		}

		setIsOngoingNetworkCall(true);
		await callUpdateProductInCart(_id, operation);

		setIsOngoingNetworkCall(false);
	};

	const handleRemoveFromCart = async (showToastAfterRemovingItem = true) => {
		setIsOngoingNetworkCall(true);
		try {
			const {
				data: { cart },
			} = await deleteProductInCart(_id, token);

			setIsOngoingNetworkCall(false);

			if (showToastAfterRemovingItem)
				showToast("Item removed from cart!", "success");

			cartDispatch({
				type: "SET_CART_ITEMS",
				payload: {
					cartItems: cart,
					error: null,
					loading: false,
				},
			});
		} catch (error) {
			showToast(
				"Failed to remove item from cart. Please try again later.",
				"error"
			);
			setIsOngoingNetworkCall(false);
		}
	};

	const isItemInWishList = wishListItems.find(
		(wishListItem) => wishListItem._id === _id
	);

	const handleMoveItemToWishList = async () => {
		if (isItemInWishList) {
			showToast("Item added to wishlist!", "success");
			handleRemoveFromCart(false);
		} else {
			setIsOngoingNetworkCall(true);
			try {
				const {
					data: { wishlist },
				} = await postToWishList(cartItem, token);

				showToast("Item added to wishlist", "success");

				wishListDispatch({
					type: "ADD_TO_WISHLIST",
					payload: {
						wishListItems: wishlist,
						error: false,
						loading: false,
					},
				});

				setIsOngoingNetworkCall(false);

				handleRemoveFromCart(false);
			} catch (error) {
				showToast(
					"Failed to add item to wishlist. Please try again later.",
					"error"
				);
				setIsOngoingNetworkCall(false);
			}
		}
	};

	return (
		<article className="card card-wt-badge cart-item p-1" id={_id}>
			<span className="badge badge-secondary mx-0-25 my-0-75 text-reg px-0-5">
				{bookType}
			</span>
			<div className="card-header flex-col flex-justify-center">
				<img
					src={coverImg}
					alt={title}
					className="card-img cart-item-img"
				/>
			</div>
			<div className="card-body flex-col flex-justify-centery">
				<div className="card-main flex-col flex-justify-center">
					<h6 className="card-title">{title}</h6>
					<p className="text-sm card-subtitle color-gray mt-0-5">
						{author}
					</p>
				</div>
				<div className="card-content flex-col flex-align-start flex-justify-center">
					<div className="card-price flex-col">
						<p className="price-discounted text-lg">
							₹ {localeSellingPrice}
						</p>
						<p className="discount-percent success-color text-sm">
							You save <span>{discountPercent} %</span>
						</p>
					</div>
					<div className="card-quantity flex-row flex-align-center flex-justify-start">
						<button
							className={`btn btn-quantity btn-decrease-quantity flex-col ${
								isOngoingNetworkCall ? "btn-disabled" : ""
							}`}
							value="DECREASE_QUANTITY"
							disabled={isOngoingNetworkCall}
							onClick={handleCartQuantityButtonClick}
						>
							-
						</button>
						<input
							type="number"
							name="cart-item-quantity"
							className="input-text input-quantity px-0-75 py-0-25 text-center flex-col"
							id="cart-item-quantity"
							value={qty}
							min="1"
							readOnly
						/>
						<button
							className={`btn btn-quantity btn-increase-quantity flex-col ${
								isOngoingNetworkCall ? "btn-disabled" : ""
							}`}
							value="INCREASE_QUANTITY"
							disabled={isOngoingNetworkCall}
							onClick={handleCartQuantityButtonClick}
						>
							+
						</button>
					</div>
				</div>
				<div className="card-footer flex-col flex-align-start flex-justify-content flex-wrap">
					<button
						className={`btn btn-primary px-0-75 py-0-25 btn-full-width text-sm ${
							isOngoingNetworkCall ? "btn-disabled" : ""
						}`}
						disabled={isOngoingNetworkCall}
						onClick={handleMoveItemToWishList}
					>
						Move to wishlist
					</button>
					<button
						className={`btn btn-primary btn-outline px-0-75 py-0-25 btn-full-width text-sm ${
							isOngoingNetworkCall ? "btn-disabled" : ""
						}`}
						disabled={isOngoingNetworkCall}
						onClick={handleRemoveFromCart}
					>
						Remove from cart
					</button>
				</div>
			</div>
		</article>
	);
};

export { CartListItem };
