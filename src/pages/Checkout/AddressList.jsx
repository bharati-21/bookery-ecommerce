import React, { useEffect, useState } from "react";

import { useAddress, useCart } from "contexts";
import { AddressItem } from "pages";

const AddressList = () => {
	const { addresses, addressDispatch } = useAddress();
	const {
		cartDispatch,
		cartState: { checkoutData },
	} = useCart();
	const [selectedAddress, setSelectedAddress] = useState(
		checkoutData?.address ? { ...checkoutData.address } : -1
	);

	useEffect(() => {
		if (!checkoutData?.address && addresses?.length) {
			cartDispatch({
				type: "SET_CHECKOUT_ADDRESS",
				payload: { address: { ...addresses[0] } },
			});

			setSelectedAddress({ ...addresses[0] });
		}
	}, [addresses?.length]);

	const handleChangeSelectedAddress = (address) => {
		setSelectedAddress({ ...address });
		cartDispatch({
			type: "SET_CHECKOUT_ADDRESS",
			payload: { address },
		});
	};

	const handleChangeAddressModalVisibility = (event) => {
		event.stopPropagation();

		addressDispatch({
			type: "SET_ADDRESS_MODAL_VISIBILITY",
			payload: { modalVisibility: true, addressToEdit: null },
		});
	};

	return (
		<div className="checkout-address-list flex-col flex-align-start flex-justify-center">
			{addresses?.length ? (
				<>
					<h4>Select shipping address</h4>
					{addresses.map((address) => (
						<label
							className="flex-row flex-align-start flex-justify-center"
							key={address._id}
						>
							<input
								type="radio"
								className="mt-0-25"
								value={address._id}
								name="address"
								onChange={(e) =>
									handleChangeSelectedAddress(address)
								}
								checked={address._id === selectedAddress?._id}
							/>
							<AddressItem
								address={address}
								key={address._id}
								page={"checkout"}
							/>
						</label>
					))}
				</>
			) : (
				<h4>No addresses to show!</h4>
			)}
			<button
				className="btn btn-primary py-0-25 px-0-75 my-2"
				onClick={handleChangeAddressModalVisibility}
			>
				Add New Address
			</button>
		</div>
	);
};

export { AddressList };
