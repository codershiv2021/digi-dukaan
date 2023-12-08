import {popularProducts} from "../dataa"
import styled from "styled-components"
import Product from "../components/product"

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const products = () => {
  return (
      <Container>
            {popularProducts.map((item) => (
                  <Product item= {item} key= {item.id}/>
            ))}
      </Container>
  )
}

export default products
