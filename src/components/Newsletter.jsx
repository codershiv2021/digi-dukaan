import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";


const Container = styled.div`
      height: 60vh;
      background-color: orange;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
`;
const Title = styled.h1`
      font-size: 70px;
      margin-top: 20px;
`;
const Desc = styled.div`
      font-size: 30px;
      margin: 20px;
      ${mobile({ textAlign: "center" })}
`;
const Info = styled.div`
      display: flex;
      justify-content: space-between;
      width: 50%;
      height: 40px;
      border: 1px;
`;
const Input = styled.input`
      flex: 8;
      padding-left: 20px;
      border: none ;
`;
const Button = styled.button`
      flex: 1;
      border: none;
      background-color: brown;
`;


const Newsletter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Desc>Get Timely Updates from your Favourite Products</Desc>
      <Info>
      <Input placeholder="your email"/>
      <Button> 
            <Send/> 
      </Button>
      </Info>
    </Container>
  )
}

export default Newsletter
