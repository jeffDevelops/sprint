import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import TaskProvider from './context/TaskContext';

import GlobalStyles from './styled/GlobalStyles';
import Container from './components/Container';

import theme from './styled/theme';

const App: React.FC = () => {
  return (
      <ThemeProvider theme={ theme }>
        <Fragment>
          <GlobalStyles />
          <TaskProvider>
            <Container />
          </TaskProvider>
        </Fragment>
      </ThemeProvider>
  );
}

export default App;