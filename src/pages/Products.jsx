import React from 'react';

import { useProduct } from '../contexts/product-context';
import { Filters, ProductList, SortingOptions } from '../components/';

const Products = () => {
    const { productState: { products, loading, error} } = useProduct();
    return (
        <main className="products-main my-2 mx-auto py-2 px-3 grid grid-2">
            {
                loading ? <h1 className="loading text success-color my-2 text-center">Loading Books...</h1>
                :
                error ? <h1 className="error text error-color my-2 text-center">{error}</h1>
                :
                <>
                    <div className="grid-row-span">
                        <h2 className="main-head text-left mb-2 py-0-25">
                            All products
                        </h2>
                        <SortingOptions />
                    </div>
                    <Filters  />
                    <ProductList products={products} />
                </>
            }
        </main>
    )
}

export { Products };