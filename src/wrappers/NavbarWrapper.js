import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #94a3b8;
  nav {
    width: 90vw;
    margin: auto;
    padding: 15px 2rem;
    display: flex;
    justify-content: space-between;
    h1 {
      color: #1e293b;
    }
    .icon {
      position: relative;
      .cart-icon {
        font-size: 2rem;
      }
      span {
        background-color: #fff;
        display: grid;
        place-items: center;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        width: 30px;
        height: 30px;
        top: -30%;
        right: -50%;
        color: #fff;
        background-color: #1e293b;
      }
    }
  }
`;
export default Wrapper;
