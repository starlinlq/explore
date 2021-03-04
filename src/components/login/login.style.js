import styled from "styled-components";
export const Form = styled.form`
  margin-bottom: 15px;
`;
export const Input = styled.input`
  border: none;
  background-color: whitesmoke;
  padding: 18px 0px;
  ::placeholder {
    padding-left: 2px;
  }
  height: 100%;
  width: 90%;
  &:focus {
    outline: none;
  }
  margin-left: 10px;
`;
export const Img = styled.img`
  object-fit: fill;
  object-position: center;
  border-bottom-left-radius: 5px;
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #191e37;

  @media screen and (max-width: 800px) {
    height: 100%;
    padding: 100px 0;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
`;

export const Error = styled.span`
  display: block;
  color: red;
  margin: 3px 0;
`;

export const InputWrapper = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  margin-top: 3px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const Title = styled.h2`
  font-size: 35px;
  color: #191e37;
`;
export const Section = styled.div`
  height: 600px;
  display: flex;
  box-shadow: 5px 5px 17px rgba(0, 0, 0, 0.7);
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
`;
