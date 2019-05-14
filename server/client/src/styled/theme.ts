import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  media: {
    small: css => `@media(max-width: 575px) { ${css} }`,
    medium: css => `@media(min-width: 576px) and (max-width: 1200px) { ${css} }`,
    large: css => `@media(min-width: 1201px) { ${css} }`,
  },
  colors: {
    main: '#ee0d4e',
    black: '#222222',
    gray: '#888888',
    lightGray: '#ddd',
  },
  font: {
    family: 'Roboto, sans-serif',
    normalWeight: 400,
    boldWeight: 500,
  },
  borderRadius: '4px',
  boxShadow: '0px 0px 10px -1px rgba(204,204,204, 1)',
  boxShadowDark: '0px 0px 10px -1px rgba(40 ,40 ,40 , 1)',
  transitions: {
    in: '.3s',
    out: '.1s',
  }
}

export default theme;