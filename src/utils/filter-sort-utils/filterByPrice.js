import { getSellingPrice } from "../getSellingPrice";

const filterByPrice = (genreFilteredBooks, maxPriceValue) =>
	genreFilteredBooks.filter(
		({ originalPrice, discountPercent }) =>
			getSellingPrice(originalPrice, discountPercent) <= maxPriceValue
	);

export { filterByPrice };
