import React, { useState, useEffect } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

import { useCart, useAuth, useWishList, useProduct } from "contexts";
import {
	postToCart,
	postToWishList,
	deleteProductInWishList,
	getSellingPrice,
} from "utils/";
import { useDocumentTitle, useToast } from "custom-hooks";
import { useNavigate, useParams } from "react-router-dom";

const ProductPageItem = () => {
	const { productId } = useParams();
	const {
		products,
		productsMessages: { loading, error },
	} = useProduct();
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
	const { setDocumentTitle } = useDocumentTitle();

	const book = products?.find((product) => product.id === productId);

	useEffect(() => {
		setDocumentTitle("Bookery | Book");
	}, []);

	useEffect(() => {
		if (book) {
			const isBookInCart = cartItems.find(
				(cartItem) => cartItem._id === _id
			);
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
		}
	}, [book]);

	if (loading) {
		return (
			<main className="main product-page-main flex-col flex-align-center flex-justify-center">
				<h2 className="text-center loading-message success-color">
					Loading...
				</h2>
			</main>
		);
	}
	if (error) {
		return (
			<main className="main product-page-main flex-col flex-align-center flex-justify-center">
				<h2 className="text-center loading-message error-color">
					{error}
				</h2>
			</main>
		);
	}

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
			className="badge text-xs badge-secondary p-0-25 px-0-5 genre-item"
		>
			{genre}
		</li>
	));

	const productBadge =
		bookType === "Hardcover" ? (
			<span className="badge badge-secondary mx-0-25 my-0-75 text-reg px-0-5">
				{bookType}
			</span>
		) : offers.bestSeller ? (
			<span className="badge badge-secondary mx-0-25 my-0-75 text-reg  px-0-75">
				Best Seller
			</span>
		) : offers.newArrival ? (
			<span className="badge badge-error mx-0-25 my-0-75 text-reg  px-0-75">
				New Arrival
			</span>
		) : null;

	const handleAddToCart = async () => {
		if (outOfStock) return;
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

	const handleAddToWishList = async () => {
		if (outOfStock) return;
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
		<main className="main product-page-main flex-col flex-align-center flex-justify-center">
			<div
				className="product-card card card-horizontal card-wt-dismiss card-wt-badge"
				id={_id}
			>
				{productBadge ?? productBadge}
				<button
					className={`btn btn-primary btn-icon btn-dismiss btn-card-wishlist m-0-5 flex--col flex-align-center flex-justify-center ${
						isOngoingNetworkCall || outOfStock ? "btn-disabled" : ""
					}`}
					onClick={handleAddToWishList}
					disabled={isOngoingNetworkCall}
				>
					<span className="icon">
						{bookInWishList ? (
							<FavoriteIcon />
						) : (
							<FavoriteBorderIcon />
						)}
					</span>
				</button>

				<div className="card-header mx-auto mx-auto p-1">
					<img src={coverImg} alt={title} />
					<div className="rating-container rating-badge m-1 px-0-75">
						<span className="rating-value flex-row flex-align-center flex-justify-center">
							{totalStars}
							<StarIcon className="star-icon ml-0-25 mr-0-5 success-color" />
							|
							<span className="ml-0-5 rating-count">
								{localeTotalRatings}
							</span>
						</span>
					</div>
				</div>
				<div className="card-body p-1">
					<div className="card-description my-0-25">
						<h6 className="text-lg card-title">{title}</h6>
						<p className="mt-0-25 text-sm card-subtitle">
							{author}
						</p>
					</div>
					<div className="card-content my-1">
						<div className="card-price flex-row flex-align-start flex-justify-between">
							<div className="discounted-price flex-col">
								<p className="price-discounted">
									₹ {localeSellingPrice}
								</p>
								<span className="success-color percentage-discount">
									{discountPercent} %
								</span>
							</div>
							<p className="price-original">
								<span className="text-linethrough error-color">
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
					<div className="card-footer mt-1 mb-0-75">
						<button
							className={`btn btn-primary btn-text-icon btn-full-width p-0-25 ${
								isOngoingNetworkCall || outOfStock
									? "btn-disabled"
									: ""
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
								<ShoppingCartIcon />
							</span>
						</button>
					</div>
					{outOfStock ? (
						<div className="btn p-0-5 mt-2 mx-auto">
							Out of stock
						</div>
					) : null}
				</div>
			</div>
		</main>
	);
};

export { ProductPageItem };
