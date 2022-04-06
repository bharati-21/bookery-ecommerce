import { ProductProvider, FilterProvider, AuthProvider, CartProvider, WishListProvider } from "contexts/";

const StateProvider = ({ children }) => {
    return (
        <AuthProvider>
            <WishListProvider>
                <CartProvider>
                    <FilterProvider>
                        <ProductProvider>
                            {children}
                        </ProductProvider>
                    </FilterProvider>
                </CartProvider>
            </WishListProvider>
        </AuthProvider>
    )
}

export { StateProvider };