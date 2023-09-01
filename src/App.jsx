// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createTheme } from '@mui/material';
import './App.css'
import  Landing from './components/Landing'
import { Paper, ThemeProvider, CssBaseline} from "@mui/material";
import Footer from './components/Footer';
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e1e1e'
    },
  }
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Add CssBaseline to reset default styles */}
      <Paper sx={{ width: 'auto', margin: '0' }} className="App"> {/* Remove explicit height */}
        <Landing />
        <Footer />
      </Paper>
    </ThemeProvider>
  )
}

export default App
