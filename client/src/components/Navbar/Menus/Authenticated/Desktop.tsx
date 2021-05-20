import { Grid, Avatar, Typography } from '@material-ui/core';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { desktopStyles } from './stylesIndex';

export const Desktop = (): JSX.Element => {
  const classes = desktopStyles();

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
