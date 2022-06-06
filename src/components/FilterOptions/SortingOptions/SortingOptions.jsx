import { v4 as uuid } from "uuid";

import { useFilter } from "contexts/";
import { SortingOptionsItem } from "./SortingOptionsItem";

const SortingOptions = () => {
	const {
		filterDispatch,
		filterState: { sortBy },
	} = useFilter();

	const handleChangeSortingOption = (event) => {
		const { value } = event.target;
		filterDispatch({ filterType: "SORT_BY", filterPayload: value });
	};

	const sortingOptionList = [
		{
			id: uuid(),
			option: "Price- High to Low",
			value: "PRICE_HIGH_TO_LOW",
		},
		{
			id: uuid(),
			option: "Price- Low to High",
			value: "PRICE_LOW_TO_HIGH",
		},
	];

	const sortingOptionsMapping = sortingOptionList.map(
		({ id, option, value }) => (
			<SortingOptionsItem
				key={id}
				option={option}
				handleChangeSortingOption={handleChangeSortingOption}
				value={value}
				sortBy={sortBy}
			/>
		)
	);

	return (
		<div className="filter-ratings">
			<ul className="list-spaced list-style-none">
				<li className="filter-head text-reg list-head px-0-5 py-0-25 my-0-5 mb-0-75">
					Sort By
				</li>
				{sortingOptionsMapping}
			</ul>
		</div>
	);
};

export { SortingOptions };
