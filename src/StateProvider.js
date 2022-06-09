import {
	ProductProvider,
	FilterProvider,
	AuthProvider,
	CartProvider,
	WishListProvider,
	AddressProvider,
} from "contexts/";

const StateProvider = ({ children }) => {
	return (
		<AuthProvider>
			<AddressProvider>
				<WishListProvider>
					<CartProvider>
						<FilterProvider>
							<ProductProvider>{children}</ProductProvider>
						</FilterProvider>
					</CartProvider>
				</WishListProvider>
			</AddressProvider>
		</AuthProvider>
	);
};

export { StateProvider };
