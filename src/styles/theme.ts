import { DefaultTheme } from 'styled-components'

export const theme = {
  primaryBlue: '#0067FF',

  blue300: '#06F',
  gray800: '#1A1F26',
  black500: '#101010',
  white: '#fff',

  gray500: '#7f7f7f',
  gray300: '#bfbfbf',
}

export const lightTheme: DefaultTheme = {
  bg000: '#FAFAFA',
  bg100: '#EBEBEB',
  primary: '#0067FF',

  headerBoderColor: 'rgba(0, 0, 0, 0.15)',
  navLinkColor: '#727272',

  mobileHeaderBg: 'rgba(241, 241, 241, 0.45)',
  mobileHeaderColor: '#727272',

  aboutMeTextColor: '#727272',
  aboutMeHighlightTextColor: '#4F4F4F',

  lineColor: 'rgba(120, 120, 120, 0.3)',
}

export const darkTheme: DefaultTheme = {
  bg000: '#1A1F26',
  bg100: '#101010',
  primary: '#0067FF',

  headerBoderColor: 'rgba(255, 255, 255, 0.5)',
  navLinkColor: '#fff',

  mobileHeaderBg: 'rgba(26, 26, 26, 0.8)',
  mobileHeaderColor: '#fff',

  aboutMeTextColor: '#bfbfbf',
  aboutMeHighlightTextColor: '#fff',
  lineColor: 'rgba(255, 255, 255, 0.7)',
}
