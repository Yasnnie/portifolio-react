import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg000: string
    bg100: string
    primary: string

    headerBoderColor: string
    navLinkColor: string

    mobileHeaderBg: string
    mobileHeaderColor: string

    aboutMeTextColor: string
    aboutMeHighlightTextColor: string

    lineColor: string
  }
}
