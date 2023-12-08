import styled from "styled-components";
import Navbar from "../components/Navibar";
import Announcement from "../components/Announcement";
import Newsletter from  "../components/Newsletter";
import Footer from "../components/footer";
import Products from "../components/products";

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
`
const Option = styled.option``


const ProductList = () => {
  return (
      <Container>
        <Announcement/>
            <Navbar/>
            <Title>Clothings</Title>
            <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option>Colour</Option>
              <Option>White</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
            </Select>
            <Select>
            <Option>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
            </Select>

            </Filter>
            <Filter>
              <FilterText>Sort Products</FilterText>
              <Select>
              <Option>Default</Option>
                <Option>Newest First</Option>
                <Option>Price - Low to High</Option>
                <Option>Price - High to Low</Option>
              </Select>
            </Filter>

            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>

      </Container>
  )
}

export default ProductList
