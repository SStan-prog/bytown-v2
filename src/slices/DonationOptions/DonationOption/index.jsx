import React from "react"

import { Container, Icon, Heading, Body } from "./DonationOptionElements"

const index = ({ heading, body, icon, alt }) => {
  return (
    <Container>
      <Icon src={icon} alt={alt} />
      <Heading>{heading}</Heading>
      <Body
        dangerouslySetInnerHTML={{
          __html: `${body}`,
        }}
      />
    </Container>
  )
}

export default index
