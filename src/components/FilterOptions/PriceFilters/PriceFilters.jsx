import React from "react";

import { useFilter } from "contexts/";

const PriceFilters = () => {
	const {
		filterState: { price },
		filterDispatch,
	} = useFilter();

	const handlePriceChange = (event) => {
		filterDispatch({
			filterType: "FILTER_BY_PRICE",
			filterPayload: parseInt(event.target.value),
		});
	};

	return (
		<div className="filter-price mt-1 mb-2 filter">
			<ul className="list list-stacked list-style-none mt-1 mb-1-5 filter-list">
				<label htmlFor="product-price-slider">
					<h6 className="filter-head text-reg list-head px-0-5 py-0-25 my-0-5">
						Price - ₹ {price}
					</h6>
					<input
						type="range"
						className="input-range"
						id="product-price-slider"
						min="100"
						max="1000"
						step="50"
						onChange={handlePriceChange}
						value={price}
					/>
				</label>
				<div className="slider-price-range flex-row flex-justify-between flex-align-center">
					<span className="text-sm min-price">₹ 100</span>
					<span className="text-sm min-price">₹ 1,000</span>
				</div>
			</ul>
		</div>
	);
};

export { PriceFilters };
