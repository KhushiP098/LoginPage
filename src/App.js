
import './App.css';
import { ThemeProvider } from 'styled-components'
import LoginPage from './LoginPage/LoginPage'
import  GlobalStyle  from './GlobalStyle';
import './App.css'

function App() {
  const theme = {
    media: { mobile: "400px", tab: "1000px" },

  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>

        <div className='App'>
          <LoginPage />
        </div>
    </ThemeProvider>

  )
}

export default App;
