import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../wrappers/HeroWrapper";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  clearCart,
  increaseAmount,
  decreaseAmount,
  removeItem,
  changeCartAmount,
  changeTotal,
} from "../features/cart/cartSlice";
import { showModal, hideModal } from "../features/modalSlice";
const Hero = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTotal());
  }, [amount]);
  return (
    <Wrapper>
      <div className="hero-container">
        <h1>YOUR BAG</h1>
        <div className="card-container">
          {cartItems.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="details">
                  <img src={item.img} alt="photo" />
                  <div className="info">
                    <div className="name">
                      <h3>{item.title}</h3>
                      <h4>{item.price}</h4>
                    </div>
                    <button
                      onClick={() => {
                        dispatch(removeItem(item.id));
                        dispatch(changeCartAmount());
                      }}
                    >
                      remove
                    </button>
                  </div>
                </div>
                <div className="right">
                  <button
                    onClick={() => {
                      dispatch(increaseAmount(item.id));
                      dispatch(changeCartAmount());
                    }}
                  >
                    <AiOutlineUp />
                  </button>
                  {item.amount}
                  <button
                    onClick={() => {
                      dispatch(decreaseAmount(item.id));
                      dispatch(changeCartAmount());
                    }}
                  >
                    <AiOutlineDown />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="total">
        <h3>Total</h3>
        <h4>{total}</h4>
      </div>
      <div className="clear">
        <button
          className="clear-btn"
          onClick={() => {
            dispatch(showModal());
          }}
        >
          CLEAR BAG
        </button>
      </div>
    </Wrapper>
  );
};

export default Hero;
