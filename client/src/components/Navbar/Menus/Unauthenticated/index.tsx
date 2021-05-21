import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

export const index = (): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Grid item>
      <Link className={classes.button} to={location.pathname === '/login' ? '/signup' : '/login'}>
        {location.pathname === '/login' ? 'SIGN UP' : 'SIGN IN'}
      </Link>
    </Grid>
  );
};
