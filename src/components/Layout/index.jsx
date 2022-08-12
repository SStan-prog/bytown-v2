import React from "react"
import { Helmet } from "react-helmet"

import GlobalStyle from "../../../globalStyles"

import { LayoutMain } from "./LayoutElements"

import Navbar from "./Navbar"
import Footer from "./Footer"

import icon from "../../images/favi.png"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
      </Helmet>
      <div style={{ position: "relative" }}>
        <GlobalStyle />
        <Navbar />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </div>
    </>
  )
}

export default Layout
