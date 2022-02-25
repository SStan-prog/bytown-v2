import React from "react"
import { Link } from "gatsby"

import { Card, Image, Text, Heading, Excerpt } from "./BlogCardElements"

const index = ({ image, alt, heading, excerpt, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Card>
        <Image src={image} alt={alt} />
        <Text>
          <Heading>{heading}</Heading>
          <Excerpt>{excerpt}</Excerpt>
        </Text>
      </Card>
    </Link>
  )
}

export default index
