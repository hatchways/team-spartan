import React from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

export const index = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const [location, setLocation] = React.useState<string>(history.location.pathname);

  console.log('history:', history.location.pathname);

  return (
    <Grid item>
      <Link
        className={classes.button}
        to={location === '/login' ? '/signup' : '/login'}
        onClick={() => setLocation(location === '/login' ? '/signup' : '/login')}
      >
        {location === '/login' ? 'SIGN UP' : 'SIGN IN'}
      </Link>
    </Grid>
  );
};
