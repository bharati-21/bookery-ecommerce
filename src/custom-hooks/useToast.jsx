import React from "react";
import { toast } from "react-toastify";

const useToast = () => {
	const showToast = (
		toastText = "Successfully completed task!",
		toastTheme = "success"
	) => {
		const notify = () => {
			toast[toastTheme](toastText, {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		};
		notify();
	};

	return { showToast };
};

export { useToast };
