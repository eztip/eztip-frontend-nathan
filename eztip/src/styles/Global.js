import { css } from "styled-components";

export const Global = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  h1 {
    font-size: 3rem;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 200;
    opacity: 0.9;
  }
  p,
  input {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: #43d9b8;
    font-family: "Source Sans Pro", sans-serif;

    &:hover {
      text-decoration: underline;
    }
  }
  input {
    -webkit-appearance: none;
    background: #f1f1f1;
    border: 1px solid #b5b5b5;
    padding: 5px;
    height: 40px;
    font-size: 1.4rem;
    font-family: "Source Sans Pro", sans-serif;
  }
  button {
    /* font-family: "Raleway", sans-serif;
    font-weight: 400;
    height: 40px;
    font-size: 1.6rem;
    text-transform: uppercase;
    border: 1px solid #b5b5b5;
    border-radius: 5px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px; */
    color: black;
    background: #43d9b8;
    font-size: 1.6rem;
    padding: 12px 16px;
    border: 1px solid #43d9b8;
    border-radius: 3px;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    outline: none;
    cursor: pointer;

    &:hover {
      color: #43d9b8;
      background: white;
      border: 1px solid #43d9b8;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
  .App {
    width: 100%;
  }
`;
