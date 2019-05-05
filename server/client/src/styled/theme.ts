import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
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
  boxShadow: '0px 0px 10px -1px rgba(204,204,204,1)',
  transitions: {
    in: '.3s',
    out: '.1s',
  }
}

export default theme;