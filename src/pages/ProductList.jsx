import styled from "styled-components";
import Navbar from "../components/Navibar";
import Announcement from "../components/Announcement";
import Newsletter from  "../components/Newsletter";
import Footer from "../components/footer";
import Products from "../components/products";
import { useLocation } from "react-router-dom";
// import { useState } from "react";

const Container = styled.div``;
const Title= styled.h1`
  margin: 40px;
  margin-top: 60px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  // const [filters, setFilters] = useState({});
  // const [sort, setSort] = useState("newest");

  // const handleFilters = (e) => {
  //   const value = e.target.value;
  //   setFilters({
  //     ...filters,
  //     [e.target.name]: value,
  //   });
  // };

  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>Clothings</Title> 
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
