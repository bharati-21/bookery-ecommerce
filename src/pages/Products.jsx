import React from 'react';

import { products } from '../backend/db/products';

import { Filters, ProductList, SortingOptions } from '../components/';

const Products = () => {
    return (
        <main className="products-main my-2 mx-auto py-2 px-3 grid grid-2">
            <div className="grid-row-span">
                <h2 className="main-head text-left mb-2 py-0-25">
                    All products
                </h2>
                <SortingOptions />
            </div>
            <Filters  />
            <ProductList  />
        </main>
    )
}

export { Products };