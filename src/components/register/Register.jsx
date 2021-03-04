import { useForm } from "react-hook-form";
import {
  Form,
  Wrapper,
  Input,
  Img,
  FormWrapper,
  Label,
  Error,
} from "./register.style";
import { Container, Button } from "../../globalStyles/theme";
import mg from "../../images/register.jpg";
function Register() {
  const { register, handleSubmit, watch, errors, clearErrors } = useForm();

  function onSubmit() {
    clearErrors();
  }
  return (
    <Wrapper>
      <Container>
        <FormWrapper>
          <Img src={mg} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>name</Label>
            <Input
              placeholder="Name"
              name="name"
              ref={register({
                required: true,
                maxLength: 10,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.name && <Error>name is required</Error>}

            <Label>email</Label>
            <Input placeholder="Email" name="email" ref={register({})} />
            {errors.email && <Error>name is required</Error>}
            <Label>password</Label>
            <Input placeholder="Password" />
            {errors.password && <Error>name is required</Error>}
            <Label>Confirm Password</Label>
            <Input placeholder="Confirm password" />
            {errors.confirmPassword && <Error>name is required</Error>}
            <Button type="submit">Submit</Button>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default Register;
