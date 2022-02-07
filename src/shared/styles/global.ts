import { createGlobalStyle } from "styled-components";
import { shade } from "polished";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    color-adjust: exact;
    font-family: 'Poppins', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
  }

  

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 10px;

    @media screen and (max-width: 700px) {
      width: 5px;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    margin: 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
  }

  input:-webkit-autofill {
    box-shadow:0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
  }

  input:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
  }

  &::-moz-selection {
    color: #fff;
  }

  &::selection {
    color: #fff;
  }

  .rccs {
    margin: 0;
  }

  .rccs__card--front {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .rccs__card--maestro > div, .rccs__card--mastercard > div {
    color: #fff;
  }

  .rccs__card--maestro .rccs__card__background, .rccs__card--mastercard .rccs__card__background {
    background: rgb(32, 32, 36);
  }
`;
