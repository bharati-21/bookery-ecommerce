import React from "react";

import { compose } from "utils/";
import { ProductItem } from "./ProductItem/ProductItem";

const ProductList = ({ products }) => {
	const sortedFilteredBooks = compose(products);

	return (
		<section className="product-catalog">
			<article className="products-container grid grid-autofit">
				{sortedFilteredBooks.length > 0 ? (
					<>
						<p className="text-lg grid-row-span text-left">
							Number of Books:{" "}
							<span className="primary-color">
								{sortedFilteredBooks.length}
							</span>
						</p>
						{sortedFilteredBooks.map((book) => (
							<ProductItem book={book} key={book._id} />
						))}
					</>
				) : (
					<h3 className="my-1 text-center error-color grid-row-span">
						No Books Found!
					</h3>
				)}
			</article>
		</section>
	);
};

export { ProductList };
