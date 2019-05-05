import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import TaskProvider from './context/TaskContext';

import GlobalStyles from './styled/GlobalStyles';
import Layout from './components/Layout';

import theme from './styled/theme';

const App: React.FC = () => {
  return (
      <ThemeProvider theme={ theme }>
        <Fragment>
          <GlobalStyles />
          <TaskProvider>
            <Layout />
          </TaskProvider>
        </Fragment>
      </ThemeProvider>
  );
}

export default App;