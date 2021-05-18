import './App.css';

import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AuthProvider, SocketProvider, SnackBarProvider } from './context';
import { theme } from './themes/theme';

const App = (): JSX.Element => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Routes />
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
