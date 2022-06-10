import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useCart, useAuth, useWishList } from "contexts";
import {
	postToCart,
	postToWishList,
	deleteProductInWishList,
	getSellingPrice,
} from "utils/";
import { useToast } from "custom-hooks";

const ProductItem = ({ book }) => {
	const {
		cartState: { cartItems },
		cartDispatch,
	} = useCart();
	const {
		wishListState: { wishListItems },
		wishListDispatch,
	} = useWishList();
	const {
		authState: { token, isAuth },
	} = useAuth();
	const { showToast } = useToast();
	const [bookInCart, setBookInCart] = useState(false);
	const [bookInWishList, setBookInWishList] = useState(false);
	const navigate = useNavigate();
	const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);

	const {
		author,
		bookType,
		coverImg,
		discountPercent,
		genres,
		_id,
		id,
		offers,
		originalPrice,
		title,
		totalRatings,
		totalStars,
	} = book;

	const sellingPrice = getSellingPrice(originalPrice, discountPercent);

	useEffect(() => {
		const isBookInCart = cartItems.find((cartItem) => cartItem._id === _id);
		const isBookInWishList = wishListItems.find(
			(wishListItem) => wishListItem._id === _id
		);
		if (isBookInCart) {
			setBookInCart(true);
		} else {
			setBookInCart(false);
		}

		if (isBookInWishList) {
			setBookInWishList(true);
		} else {
			setBookInWishList(false);
		}
	}, []);

	const outOfStock = !offers.inStock;

	const localeOriginalPrice = originalPrice.toLocaleString("en-IN", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	const localeSellingPrice = sellingPrice.toLocaleString("en-IN", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const localeTotalRatings = totalRatings.toLocaleString("en-IN");

	const genreMapping = genres.map((genre) => (
		<li
			key={`${_id}-${genre}`}
			className="badge text-xs badge-secondary text-xs p-0-25 px-0-5 genre-item"
		>
			{genre}
		</li>
	));

	const productBadge =
		bookType === "Hardcover" ? (
			<span className="badge badge-secondary my-0-5 text-sm px-0-5">
				{bookType}
			</span>
		) : offers.bestSeller ? (
			<span className="badge badge-secondary my-0-5 text-sm px-0-75">
				Best Seller
			</span>
		) : offers.newArrival ? (
			<span className="badge badge-error my-0-5 text-sm px-0-75">
				New Arrival
			</span>
		) : null;

	const handleAddToCart = async (e) => {
		if (outOfStock) return;
		e.preventDefault();
		e.stopPropagation();
		setIsOngoingNetworkCall(true);
		if (isAuth) {
			if (bookInCart) {
				navigate("/cart");
			} else {
				const productPostedToCart = await postToCart(book, token);

				if (productPostedToCart) {
					showToast("Item added to cart", "success");
					cartDispatch({
						type: "ADD_TO_CART",
						payload: {
							cartItems: productPostedToCart,
							error: false,
							loading: false,
						},
					});
					setBookInCart(true);
				} else {
					showToast(
						"Failed to add item to cart. Please try again later.",
						"error"
					);
				}
			}
		} else {
			navigate("/login");
		}
		setIsOngoingNetworkCall(false);
	};

	const handleAddToWishList = async (e) => {
		if (outOfStock) return;
		e.preventDefault();
		e.stopPropagation();
		setIsOngoingNetworkCall(true);
		if (isAuth) {
			if (bookInWishList) {
				const prodcutDeletedFromWishList =
					await deleteProductInWishList(_id, token);
				if (prodcutDeletedFromWishList) {
					showToast("Item removed from wishlist", "success");
					wishListDispatch({
						type: "ADD_TO_WISHLIST",
						payload: {
							wishListItems: prodcutDeletedFromWishList,
							error: false,
							loading: false,
						},
					});
					setBookInWishList(false);
				} else {
					showToast(
						"Failed to remove item from wishlist. Please try again later.",
						"error"
					);
				}
			} else {
				const productPostedToWishList = await postToWishList(
					book,
					token
				);

				if (productPostedToWishList) {
					showToast("Item added to wishlist", "success");
					wishListDispatch({
						type: "ADD_TO_WISHLIST",
						payload: {
							wishListItems: productPostedToWishList,
							error: false,
							loading: false,
						},
					});
					setBookInWishList(true);
				} else {
					showToast(
						"Failed to add item to wishlist. Please try again later.",
						"error"
					);
				}
			}
		} else {
			navigate("/login");
		}
		setIsOngoingNetworkCall(false);
	};

	return (
		<Link
			to={`/products/${id}`}
			className={`product-card card card-vertical card-wt-dismiss card-wt-badge ${
				outOfStock ? "out-of-stock" : "in-stock"
			}`}
		>
			<div id={_id}></div>
			{productBadge ?? productBadge}
			<button
				className={`btn btn-primary btn-icon btn-dismiss btn-card-wishlist m-0-5 flex--col flex-align-center flex-justify-center ${
					isOngoingNetworkCall || outOfStock ? "btn-disabled" : ""
				}`}
				onClick={handleAddToWishList}
				disabled={isOngoingNetworkCall}
			>
				<span className="icon flex-col flex-align-center flex-justify-center">
					{bookInWishList ? (
						<i className="fa-solid fa-heart text-reg"></i>
					) : (
						<i className="fa-regular fa-heart text-reg"></i>
					)}
				</span>
			</button>

			{outOfStock ? (
				<div className="container-out-of-stock py-0-25 px-0-5 text-center text-sm">
					Out of Stock
				</div>
			) : null}

			<div className="card-header p-0-75">
				<img src={coverImg} alt={title} />
				<div className="rating-container rating-badge m-1 px-0-75">
					<span className="rating-value flex-row flex-align-center flex-justify-center text-xs">
						{totalStars}
						<i className="fa-solid fa-star star-icon ml-0-25 mr-0-5 success-color flex-col flex-justify-center flex-align-center"></i>
						|
						<span className="ml-0-5 rating-count">
							{localeTotalRatings}
						</span>
					</span>
				</div>
			</div>
			<div className="card-body px-0-75">
				<div className="card-description my-0-25">
					<h6 className="text-reg card-title">{title}</h6>
					<p className="mt-0-25 text-xs card-subtitle">{author}</p>
				</div>
				<div className="card-content my-1">
					<div className="card-price flex-row flex-align-start flex-justify-between">
						<div className="discounted-price flex-col">
							<p className="price-discounted text-sm">
								₹ {localeSellingPrice}
							</p>
							<span className="success-color percentage-discount text-sm">
								{discountPercent} %
							</span>
						</div>
						<p className="price-original">
							<span className="text-linethrough error-color text-sm">
								₹ {localeOriginalPrice}
							</span>
						</p>
					</div>
					<div className="card-genres">
						<ul className="list list-inline list-style-none mt-1-5 flex-row flex-wrap flex-justify-start">
							{genreMapping}
						</ul>
					</div>
				</div>
			</div>
			<div className="card-footer mt-1 mb-0-75 text-sm py-0-25 px-0-75">
				<button
					className={`btn btn-primary btn-text-icon btn-full-width p-0-25 ${
						isOngoingNetworkCall || outOfStock ? "btn-disabled" : ""
					}`}
					disabled={isOngoingNetworkCall}
					onClick={handleAddToCart}
				>
					{bookInCart ? (
						<span>Go to Cart</span>
					) : (
						<span>Add to Cart</span>
					)}
					<span className="icon">
						<i className="fa-solid fa-cart-shopping"></i>
					</span>
				</button>
			</div>
		</Link>
	);
};

export { ProductItem };
