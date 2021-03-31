import React from 'react'

const Source = () => {
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
    )
}

export default Source
