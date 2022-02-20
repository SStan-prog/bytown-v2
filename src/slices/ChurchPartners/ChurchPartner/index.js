import React, { useState } from "react"

import {
  Card,
  CardInner,
  CardFront,
  Description,
  LogoContainer,
  Logo,
  CardBtn,
  CardBtnLine,
  CardBack,
  FullDescription,
  CardBackBtn,
} from "./ChurchPartnerElements"

const Index = ({ description, fullDescription, logo, alt, link }) => {
  const [flip, setFlip] = useState(false)

  const toggle = () => {
    setFlip(!flip)
  }

  return (
    <Card flip={flip}>
      <CardInner flip={flip}>
        <CardFront>
          <a href={link} target="_blank">
            <LogoContainer>
              <Logo src={logo} alt={alt} />
            </LogoContainer>
          </a>
          <Description
            dangerouslySetInnerHTML={{
              __html: `${description}`,
            }}
          />

          <CardBtn onClick={toggle}>Read More</CardBtn>
        </CardFront>
        <CardBack>
          <FullDescription
            dangerouslySetInnerHTML={{
              __html: `${fullDescription}`,
            }}
          />
          <CardBackBtn onClick={toggle}>Close</CardBackBtn>
        </CardBack>
      </CardInner>
    </Card>
  )
}

export default Index
