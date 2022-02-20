import React from "react"

import { Container, Icon, IconContainer, Link, Name } from "./EventElements"

const index = ({ icon, alt, link, name }) => {
  return (
    <Link href={`#${link}`}>
      <Container>
        <IconContainer>
          <Icon src={icon} alt={alt} />
        </IconContainer>
        <Name>{name}</Name>
      </Container>
    </Link>
  )
}

export default index
