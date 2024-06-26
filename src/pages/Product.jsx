import styled from "styled-components";
import Footer from "../components/footer";
import Announcement from "../components/Announcement";
import Navibar from "../components/Navibar";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { postsContext } from "../context/PosstContextWrapper";

const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () =>{
  const { posts } = useContext(postsContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = posts.find((post) => post._id === id);
        setProduct(product);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    getProduct();
  }, [id, posts]);

      return (
            <Container>
            <Navibar/>
            <Announcement/>
            <Wrapper>
            <ImgContainer>
            <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
                <Desc>
                  {product.desc}
                </Desc>
            </InfoContainer>
            </Wrapper>
            <Footer/>
            <Newsletter/>
            </Container>
      );
}
export default Product;