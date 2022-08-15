import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { WishListItem } from "components";
import { useWishList } from "contexts";
import { useDocumentTitle } from "custom-hooks";
import loadingImage from "assets/images/loader.svg";
import "./WishList.css";

const WishList = () => {
	const {
		wishListState: { wishListItems, loading, error },
	} = useWishList();

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("Bookery | Wishlist");
	}, []);

	return (
		<main className="main wishlist-main my-2 mx-auto py-2 px-3">
			{loading ? (
				<img
					src={loadingImage}
					alt="Loading svg"
					className="img img-responsive mx-auto loader-img"
				/>
			) : error ? (
				<h1 className="error text error-color my-2 text-center loader-error">
					{error}
				</h1>
			) : (
				<>
					{wishListItems.length ? (
						<div className="wishlist-main-head">
							<h2 className="main-head text-left mb-2 py-0-25 text-center">
								My Wishlist
							</h2>
							<section className="wishList-wrapper products-container grid grid-autofit">
								{wishListItems.map((wishListItem) => (
									<WishListItem
										key={wishListItem._id}
										wishListItem={wishListItem}
									/>
								))}
							</section>
						</div>
					) : (
						<>
							<div className="wishlist-main-head">
								<h2 className="main-head text-center">
									Your Wishlist empty!
								</h2>
							</div>
						</>
					)}
				</>
			)}
			<button className="btn btn-primary mt-2 px-0-75 py-0-25 mx-auto">
				<Link to="/products">Shop for books!</Link>
			</button>
		</main>
	);
};

export { WishList };
