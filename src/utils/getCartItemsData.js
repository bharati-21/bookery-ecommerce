import { getCartItemsTotalPrice, getCartItemTotalSavingPrice, getCartItemsTotalOriginalPrice } from './';

const getCartItemsData = (cartItems) => {
    let cartItemsTotalPrice = getCartItemsTotalPrice(cartItems);
    const cartItemsTotalSavingPrice = getCartItemTotalSavingPrice(cartItems);
    const cartItemsTotalOriginalPrice = getCartItemsTotalOriginalPrice(cartItems);

    cartItemsTotalPrice += cartItemsTotalPrice < 500 ? 49 : 0;

    return { cartItemsTotalPrice, cartItemsTotalSavingPrice, cartItemsTotalOriginalPrice };
}

export { getCartItemsData };