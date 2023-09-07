import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0px;

  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
  //z-index: -1;
  .modal {
    background-color: #fff;
    padding: 2rem 5rem 2rem;
    .buttons {
      text-align: center;
      margin-top: 1rem;
      display: flex;
      justify-content: space-evenly;

      .confirm-btn {
        padding: 3px 15px;
        background-color: #0ea5e9;
        color: #fff;
        cursor: pointer;
      }
      .confirm-btn:hover {
        background-color: #7dd3fc;
      }
      .cancel-btn {
        padding: 3px 15px;
        background-color: #ff0000;
        color: #fff;
        cursor: pointer;
      }
      .cancel-btn:hover {
        background-color: #fda4af;
      }
    }
  }
`;

export default Wrapper;
