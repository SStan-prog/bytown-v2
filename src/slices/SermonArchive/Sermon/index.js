import React from "react"

import { Container, Title, Date, Preacher, Btn } from "./SermonElements"

const index = ({ title, date, preacher, link }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Preacher>{preacher}</Preacher>
      <Btn href={link}> Watch</Btn>
    </Container>
  )
}

export default index
