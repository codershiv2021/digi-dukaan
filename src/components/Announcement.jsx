import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
      background : teal;
      height : 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size : 22px;
      color : white;
`

export default function Announcement() {
  return (
    <div>
      <Container>Super Deal! Free Shipping on Orders Over 5000</Container>
    </div>
  )
}
