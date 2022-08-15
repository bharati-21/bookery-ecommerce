import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useProduct, useFilter } from "contexts/";
import { Filters, ProductList } from "components/";
import { useDocumentTitle, useMedia } from "custom-hooks";
import loadingImage from "assets/images/loader.svg";
import "./products.css";

const Products = () => {
	const {
		products,
		productsMessages: { error, loading },
	} = useProduct();
	const location = useLocation();
	const { filterDispatch } = useFilter();

	const [showFilterDrawer, setShowFilterDrawer] = useState(false);
	const doesMediaQueryMatches = useMedia("(min-width: 641px)");

	const { setDocumentTitle } = useDocumentTitle();

	useEffect(() => {
		setDocumentTitle("Bookery | Products");
	}, []);

	useEffect(() => {
		const categoryName = location?.state;
		categoryName &&
			filterDispatch({
				filterType: "SET_CATEGORIES",
				filterPayload: categoryName,
			});
	}, [location?.state]);

	useEffect(() => {
		if (doesMediaQueryMatches && showFilterDrawer) {
			document.body.style.overflowY = "scroll";
			setShowFilterDrawer(false);
		} else if (!doesMediaQueryMatches && showFilterDrawer) {
			document.body.style.overflowY = "hidden";
		} else if (!doesMediaQueryMatches && !showFilterDrawer) {
			document.body.style.overflowY = "scroll";
		}
	}, [showFilterDrawer, doesMediaQueryMatches]);

	const handleChangeShowFilterDrawer = (isShown) => {
		setShowFilterDrawer(isShown);
	};

	return (
		<main className="main products-main my-2 mx-auto py-2 px-3 grid grid-2">
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
					<div className="filters-wrapper py-1-5 px-1">
						<Filters
							handleChangeShowFilterDrawer={
								handleChangeShowFilterDrawer
							}
							showFilterDrawer={showFilterDrawer}
						/>
						<div className="mobile-filters flex-row flex-align-center flex-justify-between py-0-75 px-1">
							<h5>Filters</h5>
							<button
								className="btn btn-primary btn-icon"
								onClick={() =>
									handleChangeShowFilterDrawer(true)
								}
							>
								<i className="fa-solid fa-sliders fa-icon"></i>
							</button>
						</div>
					</div>
					<div className={`product-list-wrapper`}>
						<div className="grid-row-span">
							<h3 className="main-head text-left py-0-25">
								Products
							</h3>
						</div>
						<ProductList products={products} />
					</div>
				</>
			)}
		</main>
	);
};

export { Products };
