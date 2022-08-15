import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ShoppingCart } from "@mui/icons-material";

import { useCart, useAuth, useWishList, useProduct } from "contexts";
import { getSellingPrice } from "utils/";
import {
	postToCart,
	postToWishList,
	deleteProductInWishList,
	getProductItem,
} from "services";
import { useDocumentTitle, useToast } from "custom-hooks";
import loadingImage from "assets/images/loader.svg";
import "./product-page-main.css";

const ProductPageItem = () => {
	const { productId } = useParams();
	const {
		productItem,
		productItemMessages: { loading, error },
		productDispatch,
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
	const navigate = useNavigate();
	const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);
	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("Bookery | Product");

		(async () => {
			productDispatch({
				type: "SET_PRODUCT_ITEM_MESSAGES",
				payload: {
					productItemMessages: { loading: true, error: null },
				},
			});
			try {
				const {
					data: { product },
				} = await getProductItem(productId);
				productDispatch({
					type: "SET_PRODUCT_ITEM",
					payload: {
						productItem: product,
						productItemMessages: { loading: false, error: null },
					},
				});
			} catch (error) {
				showToast("Could not retrieve product item details.", "error");
				productDispatch({
					type: "SET_PRODUCT_ITEM_MESSAGES",
					payload: {
						productItemMessages: {
							loading: false,
							error: "Could not retrieve product item details.",
						},
					},
				});
			}
		})();
	}, []);

	const bookInCart = cartItems?.find((item) => item._id == productId);
	const bookInWishList = wishListItems?.find((item) => item._id == productId);

	if (loading) {
		return (
			<main className="main product-page-main flex-col flex-align-center flex-justify-center">
				<img
					src={loadingImage}
					alt="Loading image"
					className="img-responsive img"
				/>
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
		description,
		originalPrice,
		title,
		totalRatings,
		totalStars,
		inStock,
	} = productItem;

	const sellingPrice = getSellingPrice(originalPrice, discountPercent);
	const outOfStock = !inStock;

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

	const productBadge = (
		<h6 className="badge text-xs badge-secondary my-0-5 p-0-25 px-0-5">
			{bookType}
		</h6>
	);

	const handleAddToCart = async () => {
		if (outOfStock) return;
		setIsOngoingNetworkCall(true);

		if (!isAuth) {
			return navigate("/login", { state: { from: `/products/${_id}` } });
		}

		if (bookInCart) {
			return navigate("/cart");
		} else {
			try {
				const {
					data: { cart },
				} = await postToCart(productItem, token);

				showToast("Item added to cart", "success");
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
					"Failed to add item to cart. Please try again later.",
					"error"
				);
			}
		}
		setIsOngoingNetworkCall(false);
	};

	const handleAddToWishList = async () => {
		if (outOfStock) return;
		setIsOngoingNetworkCall(true);

		if (!isAuth) {
			return navigate("/login", { state: { from: `/products/${_id}` } });
		}

		try {
			const {
				data: { wishlist },
			} = bookInWishList
				? await deleteProductInWishList(_id, token)
				: await postToWishList(productItem, token);
			showToast(
				`Item ${bookInWishList ? "removed from" : "added to"} wishlist`,
				"success"
			);
			wishListDispatch({
				type: "ADD_TO_WISHLIST",
				payload: {
					wishListItems: wishlist,
					error: false,
					loading: false,
				},
			});
		} catch (error) {
			showToast(
				"Failed to remove item from wishlist. Please try again later.",
				"error"
			);
		}
		setIsOngoingNetworkCall(false);
	};

	return (
		<main className="main product-page-main mx-auto px-5 p-2 flex-col flex-align-center flex-justify-center">
			<section className="product-page-content">
				{productBadge}
				<div className="product-image-container flex-col flex-justify-start mx-auto mx-auto p-1-5 px-1">
					<img
						src={coverImg}
						alt={title}
						className="img img-responsive product-image"
					/>
				</div>
				<div className="product-details text-left flex-col flex-align-center flex-justify-start p-1">
					<button
						className={`btn btn-primary btn-icon btn-dismiss btn-card-wishlist mx-1 my-0-75 flex-col flex-align-center flex-justify-center ${
							isOngoingNetworkCall || outOfStock
								? "btn-disabled"
								: ""
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
					<div className="product-heading pr-2">
						<h6 className="text-lg card-title">{title}</h6>
						<p className="text-sm card-subtitle">{author}</p>
					</div>
					<div className="product-price-ratings-container flex-row flex-justify-between flex-align-start">
						<div className="product-price flex-row flex-align-start flex-justify-start">
							<div className="discounted-price flex-col">
								<p className="price-discounted">
									₹ {localeSellingPrice}
								</p>
								<span className="success-color percentage-discount">
									{discountPercent} % Off
								</span>
							</div>
							<p className="price-original">
								₹ {localeOriginalPrice}
							</p>
						</div>
						<div className="product-ratings flex-row flex-align-center flex-justify-end rating-badge">
							<span className="rating-stars text-sm">
								{totalStars}
							</span>
							<i className="fa-solid fa-star ml-0-25 mr-0-5 success-color"></i>
							|
							<span className="ml-0-5 rating-count text-sm">
								{localeTotalRatings} Ratings
							</span>
						</div>
					</div>
					{outOfStock ? (
						<div className="badge-out-of-stock p-0-25">
							Out of stock
						</div>
					) : null}
					<div className="product-description text-sm">
						{description}
					</div>
					<div className="card-genres">
						<ul className="list list-inline list-style-none flex-row flex-wrap flex-justify-start">
							{genreMapping}
						</ul>
					</div>
					<div className="product-offers flex-col flex-align-start flex-justify-center">
						<h6 className="text-sm offer flex-row flex-align-start">
							<i className="fa-solid fa-truck-fast pt-0-25 text-reg success-color"></i>
							<span className="offer-text">
								Express Delivery - guaranteed delivery within 72
								hours
							</span>
						</h6>
						<h6 className="text-sm offer flex-row flex-align-start">
							<i className="fa-solid fa-arrow-rotate-left pt-0-25 text-reg success-color"></i>
							<span className="offer-text">
								Fair Replacement Policy - replace within 10 days
								after delivery
							</span>
						</h6>
						<h6 className="text-sm offer flex-row flex-align-start">
							<i className="fa-solid fa-shield-virus pt-0-25 text-reg success-color"></i>
							<span className="offer-text">
								Safe Delivery - Safe delivery with COVID-19
								safety protocols and measures
							</span>
						</h6>
					</div>
					<div className="product-footer mt-1 mb-0-75">
						<button
							className={`btn btn-primary btn-text-icon text-reg px-0-5 py-0-25 ${
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
								<ShoppingCart />
							</span>
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};

export { ProductPageItem };
