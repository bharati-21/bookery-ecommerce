import React from "react";
import { v4 as uuid } from "uuid";

import { GenreFilterOption } from "./GenreFilterOption";

const GenreFilters = () => {
	const genreFiltersList = [
		{ id: uuid(), categoryName: "Fiction" },
		{ id: uuid(), categoryName: "Non-Fiction" },
		{ id: uuid(), categoryName: "Romance" },
		{ id: uuid(), categoryName: "Classics" },
		{ id: uuid(), categoryName: "Fantasy" },
		{ id: uuid(), categoryName: "Mystery" },
		{ id: uuid(), categoryName: "Thriller" },
	];

	const genreFilterMapping = genreFiltersList.map(({ id, categoryName }) => (
		<GenreFilterOption key={id} categoryName={categoryName} />
	));

	return (
		<div className="filter-category filter">
			<ul className="list list-stacked list-style-none mt-1 filter-list">
				<li className="filter-head text-reg list-head px-0-5 py-0-25 mt-0-5 no-hover-bg">
					Genre Category
				</li>
				{genreFilterMapping}
			</ul>
		</div>
	);
};

export { GenreFilters };
