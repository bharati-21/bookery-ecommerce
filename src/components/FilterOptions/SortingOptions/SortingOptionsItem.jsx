import React from "react";

const SortingOptionsItem = ({
	handleChangeSortingOption,
	option,
	value,
	sortBy,
}) => {
	return (
		<li className="list-item m-0-5">
			<label
				htmlFor={option}
				className="text-sm rating-label flex-row flex-align-center"
			>
				<input
					type="radio"
					className="input-radio"
					value={value}
					id={option}
					name="product-sort"
					onChange={handleChangeSortingOption}
					checked={sortBy === value}
				/>
				<span className="genre-text">{option}</span>
			</label>
		</li>
	);
};

/*
<li className={`sorting-option ${sortBy === value && "border-bottom"}`}>
            <button className="btn btn-link" onClick={handleChangeSortingOption} value={value}>
                { option }
            </button>
        </li>

*/

export { SortingOptionsItem };
