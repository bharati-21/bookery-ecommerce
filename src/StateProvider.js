import {
	ProductProvider,
	FilterProvider,
	AuthProvider,
	CartProvider,
	WishListProvider,
	AddressProvider,
	OrdersProvider,
} from "contexts/";

const StateProvider = ({ children }) => {
	return (
		<AuthProvider>
			<AddressProvider>
				<OrdersProvider>
					<WishListProvider>
						<CartProvider>
							<FilterProvider>
								<ProductProvider>{children}</ProductProvider>
							</FilterProvider>
						</CartProvider>
					</WishListProvider>
				</OrdersProvider>
			</AddressProvider>
		</AuthProvider>
	);
};

export { StateProvider };
