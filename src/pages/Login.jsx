import styled from "styled-components";
const Container = styled.div`
      height: 100vh;
      width: 100wh;
      background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
          ),
          url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
`
const Title = styled.div`
      font-weight: 300;
      background-color: pink;
      font-size: 40px;
      padding-left: 115px;
`
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
`
const Form = styled.form`
      display: flex;

      flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`
const Button= styled.button`
width: 40%;
  border: none;
  padding: 15px 20px 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin- left: 500px;
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
      <Input placeholder= "USERNAME"/>
      <Input placeholder= "PASSWORD"/>
      <Button>LOGIN</Button>
      <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
