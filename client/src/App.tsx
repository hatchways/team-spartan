import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, SocketProvider, SnackBarProvider } from './context';
import { theme } from './themes/theme';
import Routes from './routes';
import Navbar from './components/Navbar';

const App = (): JSX.Element => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Navbar />
              <Routes />
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
