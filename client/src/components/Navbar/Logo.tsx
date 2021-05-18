import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  text: {
    letterSpacing: 8,
    color: 'white',
    fontWeight: 'bolder',
    fontSize: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },
}));

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
