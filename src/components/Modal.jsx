import React from "react";
import Wrapper from "../wrappers/Modal";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { hideModal, showModal } from "../features/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="modal">
        <h4>Do you want to clear the bag?</h4>
        <div className="buttons">
          <button
            className="confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(hideModal());
            }}
          >
            Confirm
          </button>
          <button
            className="cancel-btn"
            onClick={() => {
              dispatch(hideModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
