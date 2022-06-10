import { AddressForm, CouponOptionsModal } from "components";
import { useAddress, useCart } from "contexts";
import ReactDOM from "react-dom";

const ModalPortal = () => {
	const { addressFormModalVisibility } = useAddress();
	const {
		cartState: { couponOptionsModalVisibility },
	} = useCart();
	if (!addressFormModalVisibility && !couponOptionsModalVisibility) {
		return null;
	}

	return ReactDOM.createPortal(
		<div
			className={`modal-wrapper flex-col flex-align-center flex-justify-center p-2`}
		>
			{couponOptionsModalVisibility ? (
				<CouponOptionsModal />
			) : (
				<AddressForm />
			)}
		</div>,
		document.getElementById("modal-container")
	);
};

export default ModalPortal;
