const getSellingPrice = (price, discount) =>
	Math.round(price - (discount / 100) * price);

export { getSellingPrice };
