import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  button: {
    color: 'white',
    fontWeight: 'bolder',
    border: '1px solid white',
    padding: '15px 40px',
    borderRadius: 0,
    letterSpacing: 1,
  },
});

export const index = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const [location, setLocation] = React.useState(history.location.pathname);

  return (
    <Grid item>
      <Button
        className={classes.button}
        onClick={() => {
          const newLocation = location === '/login' ? '/signup' : '/login';
          setLocation(newLocation);
          history.push(newLocation);
        }}
      >
        {location === '/login' ? 'SIGN UP' : 'SIGN IN'}
      </Button>
    </Grid>
  );
};
