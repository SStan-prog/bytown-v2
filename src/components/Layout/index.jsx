import React from "react"

import GlobalStyle from "../../../globalStyles"

import { LayoutMain } from "./LayoutElements"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <GlobalStyle />
      <Navbar />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </div>
  )
}

export default Layout
