import { useState } from "react";
import { useAuth, useCart, useWishList } from "contexts/";
import {
	updateProductInCart,
	deleteProductInCart,
	postToWishList,
} from "utils/";
import { useToast } from "custom-hooks/useToast";

const CartListItem = ({ cartItem }) => {
	const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);
	const {
		author,
		bookType,
		coverImg,
		discountPercent,
		_id,
		sellingPrice,
		title,
		qty,
	} = cartItem;

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

        if(operation === "decrement" && qty === 1) {
            return handleRemoveFromCart();
        }

		try {
			setIsOngoingNetworkCall(true);
			const productUpdatedInCart = await updateProductInCart(
				_id,
				token,
				operation
			);

			if (productUpdatedInCart) {
				showToast("Quantity updated successfully!", "success");
				cartDispatch({
					type: "ADD_TO_CART",
					payload: {
						cartItems: productUpdatedInCart,
						error: false,
						loading: false,
					},
				});
			} else {
				showToast(
					"Failed to update quantity. Please try again later.",
					"error"
				);
			}
			setIsOngoingNetworkCall(false);
		} catch (error) {
			console.log("Something went really wrong!");
			setIsOngoingNetworkCall(false);
		}
	};

	const handleRemoveFromCart = async (showToastAfterRemovingItem = true) => {
        setIsOngoingNetworkCall(true);
		try {
			const productDeletedInCart = await deleteProductInCart(_id, token);
			if (productDeletedInCart) {
				if (showToastAfterRemovingItem)
					showToast("Item removed from cart!", "success");
				cartDispatch({
					type: "ADD_TO_CART",
					payload: {
						cartItems: productDeletedInCart,
						error: false,
						loading: false,
					},
				});
			} else {
				if (showToastAfterRemovingItem)
					showToast(
						"Failed to remove item from cart. Please try again later.",
						"error"
					);
			}
		} catch (error) {
			console.log("Something went really wrong!");
		}
        setIsOngoingNetworkCall(true);
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
				const itemPostedToWishList = await postToWishList(
					cartItem,
					token
				);
				if (itemPostedToWishList) {
					showToast("Item added to wishlist", "success");
					wishListDispatch({
						type: "ADD_TO_WISHLIST",
						payload: {
							wishListItems: itemPostedToWishList,
							error: false,
							loading: false,
						},
					});
					handleRemoveFromCart(false);
				} else {
					showToast(
						"Failed to add item to wishlist. Please try again later.",
						"error"
					);
				}
			} catch (error) {
				console.log(error.message);
				console.log("Something went really wrong!");
			}
			setIsOngoingNetworkCall(false);
		}
	};

	return (
		<article
			className="card card-horizontal product-card cart-item flex-row flex-align-center flex-justify-center p-1"
			id={_id}
		>
			<div className="card-header">
				<img
					src={coverImg}
					alt={title}
					className="card-img cart-item-img"
				/>
			</div>
			<div className="card-body">
				<div className="card-main flex-col flex-justify-center">
					<h6 className="card-title">{title}</h6>
					<p className="text-sm card-subtitle color-gray mt-0-5">
						{author}
					</p>
					<p className="text-sm text-uppercase mt-0-5">{bookType}</p>
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
								isOngoingNetworkCall
									? "btn-disabled"
									: ""
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
			</div>
			<div className="card-footer flex-row flex-align-center flex-justify-content flex-wrap">
				<button
					className={`btn btn-primary px-0-75 py-0-25 btn-full-width text-reg ${
						isOngoingNetworkCall ? "btn-disabled" : ""
					}`}
					onClick={handleMoveItemToWishList}
				>
					Move to wishlist
				</button>
				<button
					className={`btn btn-primary btn-outline px-0-75 py-0-25 btn-full-width text-reg ${
						isOngoingNetworkCall ? "btn-disabled" : ""
					}`}
					onClick={handleRemoveFromCart}
				>
					Remove from cart
				</button>
			</div>
		</article>
	);
};

export { CartListItem };
