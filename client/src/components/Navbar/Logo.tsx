import { Grid, Typography, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  text: {
    letterSpacing: 8,
    color: 'white',
    fontWeight: 'bolder',
    fontSize: 20,
  },
});

const Logo = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid item onClick={() => history.push('/dashboard')}>
      <Typography className={classes.text}>TATTOO ART</Typography>
    </Grid>
  );
};

export default Logo;
