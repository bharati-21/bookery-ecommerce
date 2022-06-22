import React from "react";

import { useFilter } from "contexts/";

const RatingFilterOption = ({ ratingFilter, ratingValue }) => {
	const {
		filterState: { ratingsMoreThan },
		filterDispatch,
	} = useFilter();

	const handleRatingChange = (event) => {
		filterDispatch({
			filterType: "FILTER_BY_RATINGS",
			filterPayload: parseInt(event.target.value),
		});
	};

	return (
		<li className="list-item m-0-5">
			<label
				htmlFor={ratingFilter}
				className="text-sm rating-label flex-row flex-align-center"
			>
				<input
					type="radio"
					className="input-radio"
					value={ratingValue}
					id={ratingFilter}
					name="product-ratings"
					onChange={handleRatingChange}
					checked={ratingsMoreThan === ratingValue}
				/>
				<span className="genre-text">{ratingFilter}</span>
			</label>
		</li>
	);
};

export { RatingFilterOption };
