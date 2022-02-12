import React from "react"

import { BtnGreen, BtnWhite, BtnRed } from "./ButtonElements"

export const ButtonGreen = ({ link, btnText }) => {
  return <BtnGreen href={link}>{btnText}</BtnGreen>
}

export const ButtonWhite = ({ link, btnText }) => {
  return <BtnWhite href={link}>{btnText}</BtnWhite>
}

export const ButtonRed = ({ link, btnText }) => {
  return <BtnRed href={link}>{btnText}</BtnRed>
}
