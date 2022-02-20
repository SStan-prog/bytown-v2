import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import {
  NavContainer,
  NavList,
  NavItem,
  NavLink,
  NavLogoContainer,
  NavMobileBtn,
  NavMobileLine,
} from "./NavbarElements"
import { ButtonRed } from "../../Buttons"

const index = () => {
  return (
    <NavContainer>
      <Link to={"/"}>
        <NavLogoContainer>
          <StaticImage
            src="../../../images/LogoAltWhite.png"
            alt="The Bytown Community Church logo."
          />
        </NavLogoContainer>
      </Link>
      <NavList>
        <NavItem>
          <NavLink href="who-we-are">Who We Are</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="sermons">Sermons</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="blog">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="giving">Giving</NavLink>
        </NavItem>
        <NavItem>
          <ButtonRed link={"join-us"} btnText={"Join Us"} />
        </NavItem>
      </NavList>
      <NavMobileBtn>
        <NavMobileLine />
        <NavMobileLine />
        <NavMobileLine />
      </NavMobileBtn>
    </NavContainer>
  )
}

export default index
