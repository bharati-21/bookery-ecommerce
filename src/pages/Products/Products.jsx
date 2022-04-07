import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProduct, useFilter } from "contexts/";
import { Filters, ProductList, SortingOptions } from "components/";
import "./products.css";


const Products = () => {
	const {
		products,
		productsMessages: { error, loading },
	} = useProduct();
	const location = useLocation();
	const { filterDispatch } = useFilter();

	useEffect(() => {
		const categoryName = location?.state;
		categoryName && filterDispatch({
			filterType: "SET_CATEGORIES",
			filterPayload: categoryName,
		});
	}, [location?.state]);

	return (
		<main className="main products-main my-2 mx-auto py-2 px-3 grid grid-2">
			  {
                loading ? (
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
                        <Filters />
                        <ProductList products={products} />
                    </>
                )
        }
		</main>
	);
};

export { Products };
