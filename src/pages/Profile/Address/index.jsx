import React from "react";

import { useAddress } from "contexts";
import { AddressItem } from "./AddressItem";
import ProfileCSS from "../Profile.module.css";

const Address = () => {
	const { addressHeader, addressWrapper, addressList } = ProfileCSS;
	const { addressDispatch, addresses } = useAddress();

	const handleChangeAddressModalVisibility = (event) => {
		event.stopPropagation();

		addressDispatch({
			type: "SET_ADDRESS_MODAL_VISIBILITY",
			payload: { modalVisibility: true, addressToEdit: null },
		});
	};

	return (
		<div
			className={`${addressWrapper} flex-col flex-align-center flex-justify-center mt-2`}
		>
			<div
				className={`${addressHeader} flex-row flex-justify-between flex-align-center pb-1`}
			>
				<h4>My Addresses</h4>
				<button
					className="btn btn-primary py-0-25 px-0-75"
					onClick={handleChangeAddressModalVisibility}
				>
					Add New Address
				</button>
			</div>
			<ul
				className={`${addressList} mt-2 flex-col flex-align-start flex-justify-center list list-style-none`}
			>
				{!addresses?.length ? (
					<h5>No addresses to show!</h5>
				) : (
					addresses.map((address) => (
						<AddressItem address={address} key={address._id} />
					))
				)}
			</ul>
		</div>
	);
};

export { Address };
