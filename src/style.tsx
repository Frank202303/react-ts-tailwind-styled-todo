import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Neucha', cursive;
  }
`;

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f74c0;
  font-family: "Neucha", cursive;
`;
// use @media : when less than 800, font-size: 35px
export const TitleSpan = styled.span`
  text-transform: uppercase;
  font-size: 40px;
  margin: 30px 0;
  color: white;
  z-index: 1;
  text-align: center;
  @media (max-width: 800px) {
    margin: 15px 0;
    font-size: 35px;
  }
`;
export const InputWrapper = styled.form.attrs({})`
  display: flex;
  width: 95%;
  position: relative;
  align-items: center;
`;
// input has clasee:.input__box  and  .input__box:focus
// transform to styledComponent: use '&:'
export const Input = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 25px;
  border: none;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;

  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;
export const Button = styled.button`
  // position: absolute;
  // width: 50px;
  // height: 50px;
  // margin: 12px;
  // border-radius: 50px;
  // right: 0px;
  // border: none;
  // font-size: 15px;
  // background-color: #2f74c0;
  // color: white;
  // transition: 0.2s all;
  // box-shadow: 0 0 10px black;
  ${tw`absolute w-12 h-12 m-3 rounded-full right-0 border-none text-base bg-blue-600 text-white transition-all duration-200 shadow-md`}
  /*  hover style */
    &:hover {
    ${tw`bg-blue-700 shadow-lg`}
    &:active {
      transform: scale(0.8);
      box-shadow: 0 0 5px black;
    }
  }
`;
