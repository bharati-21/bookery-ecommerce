import React from "react";
import { v4 as uuid } from "uuid";

import { RatingFilterOption } from "./RatingFilterOption";

const RatingFilters = () => {
	const ratingFiltersList = [
		{ id: uuid(), ratingFilter: "4 stars & above", value: 4 },
		{ id: uuid(), ratingFilter: "3 stars & above", value: 3 },
		{ id: uuid(), ratingFilter: "2 stars & above", value: 2 },
		{ id: uuid(), ratingFilter: "1 stars & above", value: 1 },
	];

	const ratingFilterMapping = ratingFiltersList.map(
		({ id, ratingFilter, value }) => (
			<RatingFilterOption
				key={id}
				ratingFilter={ratingFilter}
				ratingValue={value}
			/>
		)
	);

	return (
		<div className="filter-ratings mt-1 mb-2">
			<ul className="list-spaced list-style-none">
				<li className="filter-head text-reg list-head px-0-5 py-0-25 my-0-5 mb-0-75">
					Ratings
				</li>
				{ratingFilterMapping}
			</ul>
		</div>
	);
};

export { RatingFilters };
