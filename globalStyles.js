import { createGlobalStyle } from "styled-components"
import { media } from "./styles"

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  margin: 0 auto;
  height:100%;
  max-width: 200rem;
  
}

body{
  background-color: var(--color-white)
}

:root{

  //MAX WIDTH

  --max-width: 200rem;

    //COLORS

    --color-white: #F0F8EA;
    --color-black: #000;

    --color-red: #DB3F41;
    --color-green: #2F9C95;
    --color-grey-dark:#37505C; 

    //FONTS

    --font-heading: "Poppins";
    --font-body: "Open Sans";

    //FONT SIZES

    --font-size-headingL: clamp(2.4rem, 2vw, 2.8rem);
    --font-size-headingM: clamp(2rem, 2vw, 2.4rem);

   
    --font-size-bodyL: clamp(1.8rem, 1.5vw, 2rem);
    --font-size-bodyM: clamp(1.6rem, 1.5vw, 1.8rem);

    --font-size-verse: clamp(1.8rem, 3vw, 2.4rem);
    --font-size-btn: clamp(1.8rem, 3vw, 2rem);

    //LINE HEIGHT

    --line-height-body: 1.8;
    --line-height-bodyS: 1.6;
    

}



`

export default GlobalStyle
