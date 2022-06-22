import React from "react";

import {
	GenreFilters,
	BookTypeFilters,
	RatingFilters,
	PriceFilters,
	ClearFilters,
	SortingOptions,
} from "components";

const Filters = ({ handleChangeShowFilterDrawer, showFilterDrawer }) => {
	return (
		<aside
			className={`sidebar product-filters ${
				showFilterDrawer ? "show-filters" : "hide-filters"
			}`}
		>
			<ClearFilters
				handleChangeShowFilterDrawer={handleChangeShowFilterDrawer}
			/>
			<SortingOptions />
			<GenreFilters />
			<PriceFilters />
			<RatingFilters />
			<BookTypeFilters />
		</aside>
	);
};

export { Filters };
