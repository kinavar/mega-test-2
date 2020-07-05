import React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {theme} from './theme';
import 'normalize.css'

import {HomePage} from './pages/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage></HomePage>
    </ThemeProvider>
  );
}

export default App;
