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
  bg000: '#F6F6F6',
  bg100: '#ECECEC',
  primary: '#06f',

  headerBoderColor: 'rgba(0, 0, 0, 0.15)',
  navLinkColor: '#727272',

  mobileHeaderBg: 'rgba(241, 241, 241, 0.45)',
  mobileHeaderColor: '#727272',

  aboutMeTextColor: '#727272',
  aboutMeHighlightTextColor: '#4F4F4F',

  lineColor: 'rgba(120, 120, 120, 0.3)',

  timeExpirienceColor: '#727272',
  timeExpirienceLine: 'rgba(120, 120, 120, 0.5)',
  titleExpirienceColor: '#4B4B4B',
  textExpirienceColor: '#727272',

  projectCardBg: '#FAFAFA',
  projectTitleColor: '#4B4B4B',
  projectTextColor: '#727272',
  projectTecnologyColor: '#fff',
  projectBorderBg:
    'conic-gradient( from var(--gradient-angle), #06f, #4A92FF, #87B7FF, #CEE1FF, #06f );',

  footerLinkColor: '#4B4B4B',
  footerTextColor: '#727272',
}

export const darkTheme: DefaultTheme = {
  bg000: '#1A1F26',
  bg100: '#101010',
  primary: '#06f',

  headerBoderColor: 'rgba(255, 255, 255, 0.5)',
  navLinkColor: '#fff',

  mobileHeaderBg: 'rgba(26, 26, 26, 0.8)',
  mobileHeaderColor: '#fff',

  aboutMeTextColor: '#bfbfbf',
  aboutMeHighlightTextColor: '#fff',
  lineColor: 'rgba(255, 255, 255, 0.7)',

  timeExpirienceColor: '#bfbfbf',
  timeExpirienceLine: '#7f7f7f',
  titleExpirienceColor: '#fff',
  textExpirienceColor: '#bfbfbf',

  projectCardBg: '#111112',
  projectTitleColor: '#fff',
  projectTextColor: '#bfbfbf',
  projectTecnologyColor: '#001f4d',
  projectBorderBg:
    'conic-gradient( from var(--gradient-angle), #06f, #003d99, #001f4d, #00122e, #06f );',

  footerLinkColor: '#fff',
  footerTextColor: '#bfbfbf',
}
