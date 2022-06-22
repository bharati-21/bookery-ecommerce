import React from "react";
import { v4 as uuid } from "uuid";

import { BookTypeFilterOption } from "./BookTypeFilterOption";

const BookTypeFilters = () => {
	const bookTypeFiltersList = [
		{ id: uuid(), bookTypeFilter: "Paperback" },
		{ id: uuid(), bookTypeFilter: "Hardcover" },
	];

	const bookTypeFilterMapping = bookTypeFiltersList.map(
		({ id, bookTypeFilter }) => (
			<BookTypeFilterOption key={id} bookTypeFilter={bookTypeFilter} />
		)
	);

	return (
		<div className="filter-category">
			<ul className="list-spaced list-style-none">
				<h6 className="filter-head text-reg list-head px-0-5 py-0-25 mb-0-5">
					Book Cover
				</h6>
				{bookTypeFilterMapping}
			</ul>
		</div>
	);
};

export { BookTypeFilters };
