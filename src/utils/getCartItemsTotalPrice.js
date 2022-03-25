const getCartItemsTotalPrice = cartItems =>
    cartItems.reduce((previousCartItemsTotal, { sellingPrice }) =>
    sellingPrice + previousCartItemsTotal,
        0
    );

const getCartItemTotalSavingPrice = cartItems => cartItems.reduce((previousCartItemsTotal, { discountPrice }) => previousCartItemsTotal + discountPrice, 0);

const getCartItemsTotalOriginalPrice = cartItems => cartItems.reduce((previousCartItemsTotal, { originalPrice }) => previousCartItemsTotal + originalPrice, 0);


export { getCartItemsTotalPrice, getCartItemTotalSavingPrice, getCartItemsTotalOriginalPrice };