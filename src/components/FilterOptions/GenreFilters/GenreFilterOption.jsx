import React from "react";

import { useFilter } from "contexts/";

const GenreFilterOption = ({ categoryName }) => {
	const {
		filterState: { genres },
		filterDispatch,
	} = useFilter();

	const isGenreChecked = genres[categoryName];

	const handleGenreChange = (event) => {
		filterDispatch({
			filterType: "FILTER_BY_GENRE",
			filterPayload: event.target.value,
		});
	};

	return (
		<li className="list-item mt-0-25 p-0-25">
			<label
				htmlFor={`genre-${categoryName}`}
				className="text-sm genre-label flex-row flex-align-center"
			>
				<input
					type="checkbox"
					className="input-checkbox"
					value={categoryName}
					id={`genre-${categoryName}`}
					onChange={handleGenreChange}
					checked={isGenreChecked}
				/>
				<span className="genre-text">{categoryName}</span>
			</label>
		</li>
	);
};

export { GenreFilterOption };
