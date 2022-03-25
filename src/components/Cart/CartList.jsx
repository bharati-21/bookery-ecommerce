import { useCart } from 'contexts';
import { CartListItem } from './CartListItem';


const CartList = () => {
    const { cartState: { cart } } = useCart();

    return (
        <section className="cart-list flex-col flex-align-center flex-justify-center">
            {
                cart.map(cartItem => <CartListItem cartItem={cartItem} key={cartItem.id} />)
            }
        </section>
    )
}

export { CartList };