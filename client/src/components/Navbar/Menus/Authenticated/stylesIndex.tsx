import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const mobileStyles = makeStyles((theme) => ({
  list: {
    minWidth: 350,
    width: 'auto',
  },
  burger: {
    fontSize: 26,
    [theme.breakpoints.down('md')]: {
      fontSize: 22,
    },
  },
}));

export const desktopStyles = makeStyles({
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

export const listStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 150,
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      paddingLeft: theme.spacing(0),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    icons: {
      width: 10,
      justifyContent: 'flex-end',
    },
    none: {
      color: theme.palette.background.paper,
    },
    text: {
      minWidth: 90,
      textAlign: 'right',
      justifySelf: 'center',
    },
    links: {
      textDecoration: 'none',
      color: 'black',
    },
  }),
);
