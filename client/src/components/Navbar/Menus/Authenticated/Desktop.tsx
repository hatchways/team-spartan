import { Grid, makeStyles, Typography, Avatar } from '@material-ui/core';
import { AiOutlineCaretDown } from 'react-icons/ai';

const useStyles = makeStyles({
  root: {
    width: '60%',
    maxWidth: '600px',
  },
  links: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bolder',
    fontSize: 16,
  },
  account: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export const Desktop = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid container className={classes.links} spacing={0}>
        <Grid item>
          <Typography className={classes.text}>Discover</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>Messages</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>Notifications</Typography>
        </Grid>
        <Grid item xs={3}>
          <Grid container className={classes.account}>
            <Grid item>
              <Avatar alt="Default User" />
            </Grid>
            <Grid item>
              <Typography className={classes.text}>Account</Typography>
            </Grid>
            <AiOutlineCaretDown color="white" fontSize={10} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
