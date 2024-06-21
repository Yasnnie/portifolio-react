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
  primary: '#FF8A00',

  headerBoderColor: 'rgba(0, 0, 0, 0.15)',
  navLinkColor: '#727272',
  navLinkBgHover: 'rgba(255, 138, 0, 0.1)',

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
    'conic-gradient( from var(--gradient-angle), #FF8A00, #FFAD4C, #FFCB8D, #FFE6C9, #FF8A00 )',

  footerLinkColor: '#4B4B4B',
  footerTextColor: '#727272',
}

export const darkTheme: DefaultTheme = {
  bg000: '#171615',
  bg100: '#101010',
  primary: '#FF8A00',

  headerBoderColor: 'rgba(255, 255, 255, 0.5)',
  navLinkColor: '#fff',
  navLinkBgHover: 'rgba(255, 138, 0, 0.04)',

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
  projectTecnologyColor: '#000',
  projectBorderBg:
    'conic-gradient( from var(--gradient-angle), #FF8A00, #C46A00, #864800, #442500, #FF8A00 )',

  footerLinkColor: '#fff',
  footerTextColor: '#bfbfbf',
}
