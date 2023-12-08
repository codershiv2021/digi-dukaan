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
      font-weight: 500;
      background-color: pink;
      font-size: 30px;
      padding: 25px;
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
margin: 20px 10px 10px 0px;
padding: 10px;
`
const Button= styled.button`
width: 40%;
margin: 20px 0px 20px 0px;
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form>
      <Input placeholder= "NAME"/>
      <Input placeholder= "PHONE NUMBER"/>
      <Input placeholder= "USERNAME"/>
      <Input placeholder= "PASSWORD"/>
      <Button>CREATE</Button>
      <Link>ALREADY HAVE AN ACCOUNT?</Link>
      </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
