import { Grid, makeStyles } from '@material-ui/core';
import Logo from './Logo';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: 'black',
    [theme.breakpoints.up('xs')]: {
      height: '8vh',
    },
  },
  main: {
    alignItems: 'center',
    width: '85%',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
}));

const index = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.main}>
        <Logo />
        <Menu />
      </Grid>
    </Grid>
  );
};

export default index;
