import React from 'react';
import styled, { ThemeProvider} from 'styled-components'
import { GlobalTheme } from './base/theme'
import { GlobalStyle } from './base/styles'
import { WidgetPosts, Header } from './components'

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle/>
        <Wrapper>
          <Header/>
          <WidgetPosts/>
        </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div` 
  padding-top: 20px;
`

export default App;
