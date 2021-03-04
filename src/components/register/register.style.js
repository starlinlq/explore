import styled from "styled-components";
export const Form = styled.form`
  margin: auto;
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;
export const Input = styled.input`
  width: 90%;
`;
export const Img = styled.img`
  object-fit: contain;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #191e37;
`;

export const FormWrapper = styled.div`
  height: 650px;
  display: flex;
  box-shadow: 5px 5px 17px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
`;

export const Label = styled.label`
  display: block;
`;

export const Error = styled.span`
  display: block;
  color: red;
`;
