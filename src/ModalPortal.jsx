import { AddressForm } from "components";
import { useAddress } from "contexts";
import ReactDOM from "react-dom";

const ModalPortal = () => {
	const { addressFormModalVisibility } = useAddress();
	if (!addressFormModalVisibility) return null;

	return ReactDOM.createPortal(
		<div
			className={`modal-wrapper flex-col flex-align-center flex-justify-center p-2`}
		>
			<AddressForm />
		</div>,
		document.getElementById("modal-container")
	);
};

export default ModalPortal;
