import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { IoNotificationsSharp } from 'react-icons/io5';

const useStyles = makeStyles((theme: Theme) =>
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
    button: {
      // justifyContent: 'space-between',
    },
  }),
);

const NestedList = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      <ListItem button onClick={() => setOpen(!open)} className={classes.button}>
        <ListItemIcon className={classes.icons}>
          <Avatar alt="Default User" />
        </ListItemIcon>
        <ListItemText primary="Account" className={classes.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={`${classes.nested} ${classes.button}`}>
            <ListItemIcon className={classes.icons}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
            <ExpandLess className={classes.none} />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button className={classes.button}>
        <ListItemIcon className={classes.icons}>
          <IoNotificationsSharp />
        </ListItemIcon>
        <ListItemText primary="Notifications" className={classes.text} />
        <ExpandLess className={classes.none} />
      </ListItem>
      <ListItem button className={classes.button}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Messages" className={classes.text} />
        <ExpandLess className={classes.none} />
      </ListItem>
      <ListItem button className={classes.button}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Discover" className={classes.text} />
        <ExpandLess className={classes.none} />
      </ListItem>
    </List>
  );
};

export default NestedList;