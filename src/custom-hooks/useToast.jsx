import { toast } from 'react-toastify';

const useToast = () => {

    const showToast = (toastText, toastTheme) => {
        const notify = () => {
            toast[toastTheme](toastText, {
                position: toast.POSITION.BOTTOM_LEFT,
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        notify();
    }

    
    return ({ showToast });
}

export { useToast };