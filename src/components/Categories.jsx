import styled from 'styled-components';
import React from 'react'
import {categories} from '../dataa';
import Categoryitem from '../components/Categoryitem'

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`

export default function Categories() {
  return (
    <div>
      <Container>
            {categories.map( (item) =>(
                  <Categoryitem item= {item} key = {item.id} />
            )
            )}
      </Container>
    </div>
  )
}
