import styled from "styled-components";

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;

  .hero-container {
    h1 {
      margin: 2rem 0px;
      text-align: center;
    }
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2%;
      .details {
        display: flex;
        gap: 1rem;
        img {
          width: 100px;
          height: 150px;
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .name {
            h3 {
              margin-bottom: 10%;
            }
          }
          button {
            width: fit-content;
            background-color: transparent;
            border: transparent;
            color: #2563eb;
            cursor: pointer;
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        button {
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          color: #5b21b6;
          cursor: pointer;
        }
      }
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .clear {
    display: grid;
    place-items: center;
    .clear-btn {
      padding: 8px 20px;
      border-radius: 4px;
      background-color: #5b21b6;
      border: none;
      cursor: pointer;
      color: #fff;
      margin-bottom: 2rem;
    }
  }
`;

export default Wrapper;
