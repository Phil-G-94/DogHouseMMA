import { createPortal } from "react-dom";

const Backdrop = (props) => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-screen z-20"
            onClick={props.onClose}
        ></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className="md:max-w-2xl">
            <div className="flex place-content-center fixed bg-slate-200 z-30 p-4 rounded-2xl shadow-sm">
                <div>{props.children}</div>
            </div>
        </div>
    );
};

// lg:top-32 lg:left-16 lg:w-11/12

const portalElement = document.getElementById("overlay");

export default function CartModal(props) {
    return (
        <>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}
