import React from "react";
import { FiSearch } from 'react-icons/fi';
import styled, { css } from "styled-components";


const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 50px;
  overflow: hidden;
  justify-content: space-between;

  img {
    width: 28px;
    margin: 6px 12px;
  }
  
  input {
    width: 80%;
    padding: 4px 20px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

const focusStyle = css`
  border: 2px solid red;
`;

const StyledIconSearch = styled(FiSearch)`
  color: ${({ theme }) => theme.textColorBase};
`;

// Home 
// Menu
// Search
// Informação sempre desce

export default function Search({ valorDoFiltro, setValorDoFiltro, theme }) {
  // const [valorDaBusca, setValorDaBusca] = React.useState("Teste");
  // console.log("Search", valorDaBusca)

  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;

  const hasFocus = (e) => {
    e.target.parentElement.style = focusStyle;
    // console.log(e.target.parentElement.style.border);
  };
  const onBlur = (e) => {
    e.target.parentElement.style = {};
    // console.log(e.target.parentElement.style);
  };


  return (
    <StyledSearch>
      {/* <img src={`${config.img.icon[0]}`} width={28} /> */}
      <input
        type="text"
        onChange={
          (ev) => setValorDaBusca(ev.target.value)}
        value={valorDaBusca}
        onFocus={hasFocus}
        onBlur={onBlur}
      />
      <button>
        <StyledIconSearch size={28} />
      </button>
    </StyledSearch>
  )
}