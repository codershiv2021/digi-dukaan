// import {popularProducts} from "../dataa"
import styled from "styled-components";
import Product from "../components/product";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Products = () => {
const [products, setProducts] = useState([]);

    
      useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(
             
   "http://localhost:3001/api/products"
            );
            setProducts(res.data);
          } catch (err) {
            console.log(err)
          }
        };
        getProducts();
      },[]);
    
      

      return (
        <Container>
        {products.map(
          (item) => <Product item={item} key={item.id}/>
          )}
        </Container>
      );
    };
    
    export default Products;
