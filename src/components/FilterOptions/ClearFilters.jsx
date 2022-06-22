import React from "react";
import { Close } from "@mui/icons-material";

import { useFilter } from "contexts/";

const ClearFilters = ({ handleChangeShowFilterDrawer }) => {
	const { filterDispatch } = useFilter();

	const handleClearFilters = (event) => {
		filterDispatch({ filterType: "CLEAR_FILTERS" });
	};

	return (
		<div className="product-filters-head flex-row flex-align-end flex-justify-between mb-1-5 text-underline">
			<h5 className="sidebar-head">Filters</h5>
			<div className="flex-row flex-align-center flex-justify-center clear-filters-button-container">
				<button
					className="btn btn-clear-filters btn-link"
					onClick={handleClearFilters}
				>
					Clear Filters
				</button>
				<button
					className="btn btn-icon btn-close-filters"
					onClick={() => handleChangeShowFilterDrawer(false)}
				>
					<Close />
				</button>
			</div>
		</div>
	);
};

export { ClearFilters };
