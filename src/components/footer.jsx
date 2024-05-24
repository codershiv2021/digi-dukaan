import {Room, MailOutline,Facebook, Instagram, Phone, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
      display: flex;
`
const Logo = styled.h1``

const Left = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Right = styled.div`
flex: 1;
padding: 20px;

`;
const Center= styled.div`
      flex: 1;
      padding: 20px;
`
const Title = styled.h1`
margin-bottom: 40px;
`
const Desc = styled.div`
      font-size: 20px;
      margin-bottom: 40px;
      margin-top: 20px;

`

const Iconcoll= styled.div`
display: flex;
`
// const Iconnear= styled.div`
// `
const ContactItem= styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
font-size: 20px;
`
const Icons = styled.div`
width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const footer = () => {
  return (
      <Container>
            <Left>
                  <Logo>About us</Logo>
                  <Desc>
                  Discover a world of curated essentials at our online store. Elevate your lifestyle with quality products, seamless shopping, and doorstep delivery. Experience convenience and style with every click.                        </Desc>
                  <Iconcoll>
                  <Icons color="3B5999">
                        <Facebook/>
                  </Icons>
                  <Icons color= "E4405F">
                        <Instagram/>
                  </Icons>
                  <Icons color= "55ACEE">
                        <Twitter/>
                  </Icons>
                  <Icons color="E60023">
                        <Pinterest/>
                  </Icons>
                  </Iconcoll>
            </Left>
            <Center>
                  
            </Center>
            <Right>
                  <Title>Contact Info</Title>
                  <ContactItem>
          <Room style={{marginRight:"10px"}}/> Near Bit Mesra, Ranchi, Jharkhand
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> (+91) 999900011
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> shopee@digindia.com
        </ContactItem>
        

            </Right>
            
      </Container>
  )
}

export default footer
