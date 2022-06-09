import { AddressForm } from "components";
import { useAddress } from "contexts";
import React from "react";
import ProfileCSS from "../Profile.module.css";
import { AddressItem } from "./AddressItem";

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
				<h5>My Addresses</h5>
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
					<h4>No addresses to show!</h4>
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