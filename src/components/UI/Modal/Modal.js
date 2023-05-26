import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className="flex fixed inset-0 bg-beige/5 backdrop-blur-sm z-10">
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="flex-col m-auto w-2/3 md:w-2/5 drop-shadow-lg bg-beige shadow rounded-xl">
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop>
          <ModalOverlay>{props.children}</ModalOverlay>
        </Backdrop>,
        portalElement
      )}
    </>
  );
};

export default Modal;
