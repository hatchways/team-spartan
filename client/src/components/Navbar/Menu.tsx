import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import { AuthenticatedDesktop, AuthenticatedMobile, Unauthenticated } from '../Navbar/Menus';

const Menu = (): JSX.Element => {
  const { loggedInUser } = useAuth();
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [mobile, setMobile] = React.useState<boolean>(width < 1025);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setMobile(window.innerWidth < 1025 ? true : false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window]);

  if (!loggedInUser) return <Unauthenticated />;

  return mobile ? <AuthenticatedMobile /> : <AuthenticatedDesktop />;
};

export default Menu;
