import { Grid, makeStyles, Avatar, Typography } from '@material-ui/core';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '60%',
    maxWidth: '600px',
  },
  links: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    fontSize: 16,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  account: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export const Desktop = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid container className={classes.links}>
        <Link to="/discover" className={classes.link}>
          Discover
        </Link>
        <Link to="/messages" className={classes.link}>
          Messages
        </Link>
        <Link to="/notifications" className={classes.link}>
          Notifications
        </Link>
        <Grid item xs={3}>
          <Grid container className={`${classes.account} ${classes.link}`}>
            <Grid item>
              <Avatar alt="Default User" />
            </Grid>
            <Grid item>
              <Typography className={classes.link}>Account</Typography>
            </Grid>
            <AiOutlineCaretDown color="white" fontSize={10} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
