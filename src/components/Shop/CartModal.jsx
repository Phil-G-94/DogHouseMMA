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
        <div className="fixed top-8 left-24 w-11/12 bg-slate-200 z-30 p-4 rounded-2xl shadow-sm">
            <div>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlay");

export default function CartModal(props) {
    return (
        <>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
}
