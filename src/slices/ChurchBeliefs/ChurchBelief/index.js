import React, { useState } from "react"

import {
  Card,
  CardInner,
  CardFront,
  Heading,
  IconContainer,
  Icon,
  CardBtn,
  CardBtnLine,
  CardBack,
  CardBody,
  CardBackBtn,
} from "./ChurchBeliefElements"

const Index = ({ heading, body, icon, alt }) => {
  const [flip, setFlip] = useState(false)

  const toggle = () => {
    setFlip(!flip)
  }

  return (
    <Card flip={flip}>
      <CardInner flip={flip}>
        <CardFront>
          <Heading>{heading}</Heading>
          <IconContainer>
            <Icon src={icon} alt={alt} />
          </IconContainer>
          <CardBtn onClick={toggle}>
            <CardBtnLine />
          </CardBtn>
        </CardFront>
        <CardBack>
          <CardBody
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
          <CardBackBtn onClick={toggle}>
            <CardBtnLine />
          </CardBackBtn>
        </CardBack>
      </CardInner>
    </Card>
  )
}

export default Index
