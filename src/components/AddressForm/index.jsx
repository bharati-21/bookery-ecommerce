import React, { useReducer, useRef, useState } from "react";
import { Close } from "@mui/icons-material";

import { useAddress, useAuth } from "contexts";
import { useOutsideClick, useToast } from "custom-hooks";
import { validateAddressData } from "utils";
import { editAddress, postNewAddress } from "services";
import {
	formDataReducerFunction,
	formDataErrorReducerFunction,
} from "reducers";
import ProfileCSS from "pages/Profile/Profile.module.css";

const AddressForm = () => {
	const {
		addressFormContainer,
		addressFormHeader,
		addressForm,
		inputGroup,
		formButtonsContainer,
	} = ProfileCSS;

	const formContainerReference = useRef(null);
	const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);
	const { addressDispatch, addressToEdit, addresses } = useAddress();

	const { showToast } = useToast();

	const {
		authState: { token },
	} = useAuth();

	const addressDataToEdit =
		addressToEdit &&
		addresses?.find((address) => address._id === addressToEdit);

	const initialFormDataState = addressDataToEdit ?? {
		name: "",
		addressLine: "",
		city: "",
		state: "",
		pincode: "",
		phoneNumber: "",
	};

	const initialFormDataErrorState = {
		nameError: null,
		addressLineError: null,
		cityError: null,
		stateError: null,
		pincodeError: null,
		phoneNumberError: null,
	};

	const [formData, formDataDispatch] = useReducer(
		formDataReducerFunction,
		initialFormDataState
	);

	const [formDataError, formDataErrorDispatch] = useReducer(
		formDataErrorReducerFunction,
		initialFormDataErrorState
	);

	const handleAddressFormSubmit = async (event) => {
		event.preventDefault();
		event.preventDefault();
		if (!validateAddressData(formData, formDataErrorDispatch)) {
			return;
		}

		setIsOngoingNetworkCall(true);

		try {
			const {
				data: { address },
			} = addressToEdit
				? await editAddress(token, formData)
				: await postNewAddress(token, formData);

			addressDispatch({
				type: "SET_ADDRESSES",
				payload: { addresses: address },
			});

			showToast(
				`Address ${addressToEdit ? "edited " : "saved"} successfully.`,
				"success"
			);

			addressDispatch({
				type: "SET_ADDRESS_MODAL_VISIBILITY",
				payload: { modalVisibility: false, addressToEdit: null },
			});
		} catch (error) {
			setIsOngoingNetworkCall(false);
			showToast(
				`Failed to ${
					addressToEdit ? "edit " : "save"
				} address. Please try again later.`,
				"error"
			);
		}
	};

	const handleFormDataChange = (event) => {
		const {
			target: { value, name },
		} = event;
		event.stopPropagation();
		formDataErrorDispatch({
			type: "CLEAR_ERROR",
			payload: { name: name + "Error" },
		});
		formDataDispatch({ type: "SET_FORM_DATA", payload: { name, value } });
	};

	const handleAddDummyAddress = (event) => {
		formDataDispatch({ type: "SET_DUMMY_ADDRESS" });
	};

	const handleModalClose = (event) => {
		if (event) event.stopPropagation();
		addressDispatch({
			type: "SET_ADDRESS_MODAL_VISIBILITY",
			payload: {
				addressModalVisibility: false,
				addressToEdit: -1,
			},
		});
	};

	useOutsideClick(formContainerReference, handleModalClose);

	const { name, addressLine, city, state, pincode, phoneNumber } = formData;
	const {
		nameError,
		addressLineError,
		cityError,
		stateError,
		pincodeError,
		phoneNumberError,
	} = formDataError;

	const disableButton = () =>
		isOngoingNetworkCall ||
		(addressToEdit &&
			addressDataToEdit.name === name &&
			addressDataToEdit.addressLine === addressLine &&
			addressDataToEdit.city === city &&
			addressDataToEdit.state === state &&
			addressDataToEdit.pincode === pincode &&
			addressDataToEdit.phoneNumber === phoneNumber) ||
		!name ||
		!addressLine ||
		!city ||
		!state ||
		!pincode ||
		!phoneNumber;

	return (
		<div
			className={`${addressFormContainer} p-1`}
			ref={formContainerReference}
		>
			<div className="flex-col flex-justify-center flex-align-start">
				<div
					className={`${addressFormHeader} flex-row text-left flex-justify-between flex-align-center`}
				>
					<h6>Address Form</h6>
					<button className="btn btn-icon" onClick={handleModalClose}>
						<Close />
					</button>
				</div>
				<form
					className={`${addressForm} flex-col flex-align-start flex-justify-center text-left`}
					onSubmit={handleAddressFormSubmit}
				>
					<div className={`${inputGroup} input-group`}>
						<label
							className="text-label flex-col text-sm"
							htmlFor="input-name"
						>
							Name
							<input
								type="text"
								id="input-name"
								className="input-text text-sm px-0-75 py-0-25"
								placeholder="Jane Doe"
								name="name"
								onChange={handleFormDataChange}
								value={name}
								required
							/>
						</label>
						<span className="text-message error-color text-sm mt-0-25">
							{nameError}
						</span>
					</div>
					<div className={`${inputGroup} input-group`}>
						<label
							className="text-label flex-col text-sm"
							htmlFor="input-address-line"
						>
							House No., Colony, Area
							<input
								type="text"
								id="input-address-line"
								className="input-text text-sm px-0-75 py-0-25"
								placeholder="Opp. Avenue hotel, Kandivali East"
								name="addressLine"
								onChange={handleFormDataChange}
								value={addressLine}
								required
							/>
						</label>
						<span className="text-message error-color text-sm mt-0-25">
							{addressLineError}
						</span>
					</div>
					<div className={`${inputGroup} input-group`}>
						<label
							className="text-label flex-col text-sm"
							htmlFor="input-city"
						>
							City
							<input
								type="text"
								id="input-city"
								className="input-text text-sm px-0-75 py-0-25"
								placeholder="Mumbai"
								name="city"
								onChange={handleFormDataChange}
								value={city}
								required
							/>
						</label>
						<span className="text-message error-color text-sm mt-0-25">
							{cityError}
						</span>
					</div>
					<div className={`${inputGroup} input-group`}>
						<label
							className="text-label flex-col text-sm"
							htmlFor="input-state"
						>
							State
							<input
								type="text"
								id="input-state"
								className="input-text text-sm px-0-75 py-0-25"
								placeholder="Maharashtra"
								name="state"
								onChange={handleFormDataChange}
								value={state}
								required
							/>
						</label>
						<span className="text-message error-color text-sm mt-0-25">
							{stateError}
						</span>
					</div>
					<div className={`${inputGroup} input-group`}>
						<label
							className="text-label flex-col text-sm"
							htmlFor="input-pincode"
						>
							Pincode
							<input
								type="text"
								id="input-pincode"
								className="input-text text-sm px-0-75 py-0-25"
								placeholder="400101"
								name="pincode"
								onChange={handleFormDataChange}
								value={pincode}
								required
							/>
						</label>
						<span className="text-message error-color text-sm mt-0-25">
							{pincodeError}
						</span>
					</div>
					<div className={`${inputGroup} input-group`}>
						<label
							className="text-label flex-col text-sm"
							htmlFor="input-phone-number"
						>
							Phone Number
							<input
								type="text"
								id="input-phone-number"
								className="input-text text-sm px-0-5 py-0-25"
								placeholder="9879871022"
								name="phoneNumber"
								onChange={handleFormDataChange}
								value={phoneNumber}
								required
							/>
						</label>
						<span className="text-message error-color text-sm mt-0-25">
							{phoneNumberError}
						</span>
					</div>
					<div
						className={`${formButtonsContainer} flex-row flex-align-center flex-justify-end`}
					>
						<button
							type="button"
							className="btn btn-primary btn-outline px-0-5 py-0-25"
							onClick={handleAddDummyAddress}
						>
							Fill Dummy Address
						</button>
						<input
							type="submit"
							className="btn btn-primary p-0-25"
							value="Save"
							disabled={disableButton()}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export { AddressForm };
