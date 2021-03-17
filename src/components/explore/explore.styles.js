import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  padding-top: 50px;
`;

export const Title = styled.h1`
  color: white;
`;

export const Name = styled.span`
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  background: #f93737 !important;
  line-height: 16px;
  outline: none;
  cursor: pointer;
  margin-right: 15px;
`;
export const Option = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  background: rgb(255, 255, 255) !important;
  border: 0.5px solid rgba(118, 118, 118, 0.28) !important;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 37px !important;
  width: 350px;
  height: 75px;
  padding: 10px;
  border-radius: 7px;
  transition: 50ms;
  visibility: hidden;
  top: 30px;
`;

export const Type = styled.div`
  position: relative;
  padding-bottom: 10px;
  &:hover {
    ${Option} {
      visibility: visible;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 150px;
  height: 35px;
  border-radius: 2px;
  border: 0.5px solid gray;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  height: fit-content;
  border: 1px solid black;
  background: black;
  padding: 5px 45px;
  cursor: pointer;
  margin: 10px 0;
  color: white;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
