const getCartItemsTotal = (cartItems, sumType) => {
    switch (sumType) {
        case 'TOTAL_SELLING_PRICE':
            return cartItems.reduce((previousCartItemsTotal, { sellingPrice, qty }) => (
                sellingPrice + previousCartItemsTotal) * qty, 
                0
            );
        case 'TOTAL_COST_PRICE':
            return cartItems.reduce((previousCartItemsTotal, { originalPrice, qty }) => ( 
                previousCartItemsTotal + originalPrice) * qty, 
            0);
        case 'TOTAL_DISCOUNT_PRICE':
            return cartItems.reduce((previousCartItemsTotal, { discountPrice, qty }) => (
                previousCartItemsTotal + discountPrice) * qty,
            0);
        case 'TOTAL_ITEMS':
            return cartItems.reduce((previousCartItemsQuantity, { qty }) => previousCartItemsQuantity + qty, 0);
        default:
            return cartItems.reduce((previousCartItemsQuantity, { qty }) => previousCartItemsQuantity + qty, 0);
    }

}
export { getCartItemsTotal };