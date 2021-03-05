import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Form,
  Wrapper,
  Input,
  Img,
  FormWrapper,
  Label,
  Error,
  Section,
  InputWrapper,
  Title,
  ImgWrapper,
} from "./login.style";
import { Container, Button, Span } from "../../globalStyles/theme";
import mg from "../../images/register1.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { login_user } from "../../stores/user/actions";
import { useDispatch } from "react-redux";

function Register() {
  const { register, handleSubmit, errors, clearErrors } = useForm();
  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(login_user(data));
    clearErrors();
  }
  return (
    <Wrapper>
      <Container>
        <Section>
          <ImgWrapper>
            <Img src={mg} />
          </ImgWrapper>
          <FormWrapper>
            <Title>Sign in</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label>Email</Label>
              {errors.email && <Error>email is required</Error>}
              <InputWrapper>
                <HiOutlineMail />
                <Input
                  type="email"
                  placeholder="email"
                  name="email"
                  ref={register({ required: true })}
                />
              </InputWrapper>

              <Label>Password</Label>
              {errors.password && <Error>password is required</Error>}
              <InputWrapper>
                <RiLockPasswordLine />
                <Input
                  type="password"
                  placeholder="password"
                  name="password"
                  ref={register({ required: true })}
                />
              </InputWrapper>

              <Button type="submit">Submit</Button>
            </Form>
            <Link to="register">
              <Span>Need an account, Register</Span>
            </Link>
          </FormWrapper>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default Register;
