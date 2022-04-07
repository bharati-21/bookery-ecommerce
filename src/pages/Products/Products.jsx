import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useProduct, useFilter } from "contexts/";
import { Filters, ProductList, SortingOptions } from "components/";
import "./products.css";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Products = () => {
	const {
		products,
		productsMessages: { error, loading },
	} = useProduct();
	const location = useLocation();
	const { filterDispatch } = useFilter();

    const [showFilterDrawer, setShowFilterDrawer] = useState(false);

	useEffect(() => {
		const categoryName = location?.state;
		categoryName && filterDispatch({
			filterType: "SET_CATEGORIES",
			filterPayload: categoryName,
		});
	}, [location?.state]);

    const handleChangeShowFilterDrawer = isShown => {
        setShowFilterDrawer(isShown);
    }

	return (
		<main className="main products-main my-2 mx-auto py-2 px-3 grid grid-2">
			{loading ? (
				<h1 className="loading text success-color my-2 text-center">
					Loading Books...
				</h1>
			) : error ? (
				<h1 className="error text error-color my-2 text-center">
					{error}
				</h1>
			) : (
				<>
					<div className="grid-row-span">
						<h2 className="main-head text-left mb-2 py-0-25">
							All products
						</h2>
						<SortingOptions />
					</div>
					<div className="mobile-filters">
						<div className="filter-sidebar-toggler flex-row flex-justify-between flex-align-center p-0-5 px-1">
							<p className="text-lg">Filters</p>
							<label>
								<input
									type="checkbox"
									className="checkbox-filter"
									id="checkbox-filter"
									checked={showFilterDrawer}
									onChange={() =>
										handleChangeShowFilterDrawer(true)
									}
								/>
								<span className="btn btn-icon">
									<FilterAltIcon />
								</span>
							</label>
						</div>
						<div
							className={`filter-sidebar-drawer ${
								showFilterDrawer
									? "filter-drawer-open"
									: "filter-drawer-close"
							}`}
						>
							<Filters
								showCloseIcon={true}
								handleChangeShowFilterDrawer={
									handleChangeShowFilterDrawer
								}
							/>
						</div>
					</div>
					<div className="filter-sidebar-desktop">
						<Filters />
					</div>
                    <div className={`product-list-wrapper`}>
                        <ProductList products={products} />
                    </div>
				</>
			)}
		</main>
	);
};

export { Products };
