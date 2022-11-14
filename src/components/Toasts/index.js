import toast from 'react-hot-toast';
import styled, { keyframes } from "styled-components";

import config from "../../config/myconfig.json";


const popup = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const StyledGulagToast = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  padding: 16px;
  animation: ${popup} .2s ease-in-out;
  border-radius: 8px;
  border-left: 10px solid red;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 0px;
    border-left: 2px solid ${({ theme }) => theme.borderBase};

    button {
      border: none;
      padding: 4px 8px;
      border-radius: 2px;
      background-color: red;
    }
  }

  img {
    width: auto;
    height: 92px;
    margin-right: 12px;
  }
  span {
    opacity: 60%;
  }

`;

export default function OfTheGulag({ target }) {
  return (
    // toast.custom((t) => (
    <StyledGulagToast>
      <img
        src={config.img.icon[1]}
        alt="Bye bye"
      />
      <div className='content'>
        <h4>
          Faltou indicar a playlist do seu vídeo.
        </h4>
        <span>
          Seu video foi para a playlist da GULAG!
        </span>
        <button onClick={() => toast.dismiss(target.id)}>
          Fechar
        </button>
      </div>
    </StyledGulagToast>
    // ))
  )
};
