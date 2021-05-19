import { useMediaQuery } from '@material-ui/core';
import { useAuth } from '../../context/useAuthContext';
import { AuthenticatedDesktop, AuthenticatedMobile, Unauthenticated } from '../Navbar/Menus';

const Menu = (): JSX.Element => {
  const { loggedInUser } = useAuth();
  const desktop = useMediaQuery('(min-width:1025px)');

  if (!loggedInUser) return <Unauthenticated />;

  return desktop ? <AuthenticatedDesktop /> : <AuthenticatedMobile />;
};

export default Menu;
