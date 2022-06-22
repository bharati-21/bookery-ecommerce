import React from "react";

import { useFilter } from "contexts/";

const BookTypeFilterOption = ({ bookTypeFilter }) => {
	const {
		filterState: { bookType },
		filterDispatch,
	} = useFilter();

	const isBookTypeChecked = bookType[bookTypeFilter];

	const handleBookTypeChange = (event) => {
		filterDispatch({
			filterType: "FILTER_BY_BOOK_TYPE",
			filterPayload: event.target.value,
		});
	};

	return (
		<li className="list-item mt-0-75 mb-0-5">
			<label
				htmlFor={`cover-${bookTypeFilter}`}
				className="text-sm book-cover-label flex-row flex-align-center"
			>
				<input
					type="checkbox"
					value={bookTypeFilter}
					className="input-checkbox"
					id={`cover-${bookTypeFilter}`}
					onChange={handleBookTypeChange}
					checked={isBookTypeChecked}
				/>
				<span className="genre-text">{bookTypeFilter}</span>
			</label>
		</li>
	);
};

export { BookTypeFilterOption };
