import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    color: 'white',
    fontWeight: 'bolder',
    border: '1px solid white',
    padding: '15px 40px',
    borderRadius: 0,
    letterSpacing: 1,
    textDecoration: 'none',
  },
});

export const index = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const [location, setLocation] = React.useState(history.location.pathname);

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
