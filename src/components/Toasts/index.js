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
  background-color: ${(props) => props.color};
  padding: 16px;
  animation: ${popup} .2s ease-in-out;
  border-radius: 8px;
  /* border-left: 10px solid ${(props) => props.color}; */

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 0px;
    /* border-left: 2px solid #282828; // ${({ theme }) => theme.borderBase}; */

    button {
      border: none;
      padding: 4px 8px;
      border-radius: 2px;
      /* background-color: ${(props) => props.color}; */
    }
    span {
      opacity: 75%;
    }
  }

  img {
    width: auto;
    height: 92px;
    margin-right: 12px;
  }

`;

const notifyType = {
  "Gulag": {
    title: "Faltou informar a playlist do seu vídeo.",
    subTitle: "Seu video foi direto para a playlist da GULAG!",
    alt: "Stali Bye bye meme",
    color: "#ff860d",
    src: config.img.gif[0]
  },
  "BugsBunny": {
    title: "Seu vídeo foi adicionado.",
    subTitle: "Nosso video foi adicionado com sucesso!",
    alt: "Bugs Bunny comunist meme",
    color: "#17ff3a",
    src: config.img.gif[1]
  },
  "Ghost": {
    title: "Formulário vazio!",
    subTitle: "Preencha os dados do seu vídeo.",
    alt: "Ghost comunist meme",
    color: "#ff860d",
    src: config.img.gif[2]
  },
  "Delete": {
    title: "Vídeo removido!",
    subTitle: "O video foi de arrasta pra cima com sucesso!",
    alt: "Angry people",
    color: "#17ff3a",
    src: config.img.gif[3]
  },
  "Jimo": {
    title: "JIMO!",
    subTitle: "Esse canal é puro suco do jimo e está BANIDO!",
    alt: "Jimo product",
    color: "#ff0000",
    src: config.img.gif[4]
  }
}

export default function NotifyToast(props) {
  const notify = notifyType[props.type]

  return (
    <StyledGulagToast color={notify.color}>
      <img
        src={notify.src}
        alt={notify.alt}
      />
      <div className='content'>
        <h4>
          {notify.title}
        </h4>
        <span>
          {notify.subTitle}
        </span>
        <button onClick={() => toast.dismiss(props.target.id)}>
          Fechar
        </button>
      </div>
    </StyledGulagToast>
  )
};
