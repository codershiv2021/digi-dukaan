import styled from "styled-components";
import Navbar from "../components/Navibar";
import Announcement from "../components/Announcement";
import Newsletter from  "../components/Newsletter";
import Footer from "../components/footer";
import Products from "../components/products";
import { useLocation } from "react-router-dom";
import { useState } from "react";

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
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>Clothings</Title> 
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Black</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
