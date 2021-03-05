import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
} from "./register.style";
import { Container, Button, Span } from "../../globalStyles/theme";
import mg from "../../images/register2.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine, RiContactsFill } from "react-icons/ri";
import { register_user } from "../../stores/user/actions";

function Register() {
  const history = useHistory();
  const { register, handleSubmit, errors, clearErrors } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  function onSubmit(data) {
    dispatch(register_user(data));
    if (user) {
      history.push("/");
    }
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
            <Title>Register now</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label>Name</Label>
              {errors.name && <Error>{errors.message}</Error>}
              <InputWrapper>
                <RiContactsFill />
                <Input
                  placeholder="name"
                  name="name"
                  ref={register({
                    required: "true",
                    maxLength: {
                      value: 10,
                      message: "name should be 10 character or less",
                    },
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
              </InputWrapper>
              <Label>Email</Label>
              {errors.email && <Error>name is required</Error>}
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
              <InputWrapper>
                <RiLockPasswordLine />
                <Input
                  type="password"
                  placeholder="password"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && <Error>name is required</Error>}
              </InputWrapper>
              <Button type="submit">Submit</Button>
            </Form>
            <Link to="login">
              <Span>Already have an account, Log in</Span>
            </Link>
          </FormWrapper>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default Register;
