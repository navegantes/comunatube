import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "./ColorMode";


const StyledSwitch = styled.div`
  display: flex;

  input[type="checkbox"] {
    position: absolute;
    visibility: hidden;
  }
  label {
    width: 60px;
    height: 32px;
    display: flex;
    align-items: center;
    border-radius: 100px;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    left: 0px;
    gap: 4px;
  }
  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: space-between;
    margin: 0 3px;
  }
  
  label::after {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background-color: red;
    position: absolute;
    border-radius: 70px;
    /* left: 15px; */
    transition: 0.1s;
    left: 4px;
  }

  input:checked + label:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }

  input + label {
    background-color: ${({ theme }) => theme.textColorBase};
  }

  label:active:after {
    width: calc(100% - 6px);
    right: 2px;
  }

 `;

export default function DarkModeSwitch() {
  const contexto = React.useContext(ColorModeContext);

  return (
    <StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          contexto.toggleMode();
        }}
      />
      <label
        htmlFor="darkmode"
        className="darkmode-switch"
      >
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  )
}