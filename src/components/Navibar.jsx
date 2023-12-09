import React from 'react'
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
  height : 60px;
  `
const Wrapper = styled.div`
  padding: 10px 20px;   
  display: flex;
  align-items: center;
  justify-content: space-between;

`; 

const Logo = styled.div`
  font-weight : bold;  
  font-size : 55px;
`;
const SmLogo = styled.div`
  font- size : 30px;
  margin-left : 25px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  font-size : 20px;
  height: 25px;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export default function Navibar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Input placeholder="search" />
          <Search style={{ color: "gray", fontSize: 16 }} />
        </Left>
        <Center>
          <Logo>Digi-Shopee</Logo>
        </Center>
        <Right>
          <SmLogo>Login</SmLogo>
          <SmLogo>Register</SmLogo>
          <SmLogo>Cart</SmLogo>
          <SmLogo>
          <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </SmLogo>
        </Right>

      </Wrapper>
    </Container>

  )
}
