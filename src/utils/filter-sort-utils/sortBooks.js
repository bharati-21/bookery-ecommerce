import { getSellingPrice } from "../getSellingPrice";

const sortBooks = (filteredBooks, sortByOption) => {
	switch (sortByOption) {
		case "PRICE_LOW_TO_HIGH":
			return [...filteredBooks].sort((filteredBookA, filteredBookB) => {
				const sellingPriceA = getSellingPrice(
					filteredBookA.originalPrice,
					filteredBookA.discountPercent
				);
				const sellingPriceB = getSellingPrice(
					filteredBookB.originalPrice,
					filteredBookB.discountPercent
				);
				return sellingPriceA - sellingPriceB;
			});
		case "PRICE_HIGH_TO_LOW":
			return [...filteredBooks].sort((filteredBookA, filteredBookB) => {
				const sellingPriceA = getSellingPrice(
					filteredBookA.originalPrice,
					filteredBookA.discountPercent
				);
				const sellingPriceB = getSellingPrice(
					filteredBookB.originalPrice,
					filteredBookB.discountPercent
				);
				return sellingPriceB - sellingPriceA;
			});

		default:
			return filteredBooks;
	}
};

export { sortBooks };
