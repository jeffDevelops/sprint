// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string,
      black: string,
      gray: string,
      lightGray: string
    }
    font: {
      family: string,
      normalWeight: number,
      boldWeight: number,
    }
    borderRadius: string
    boxShadow: string
    transitions: {
      in: string
      out: string
    }
  }
}