import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Avatar } from '@material-ui/core';
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import { IoNotificationsSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { listStyles } from './stylesIndex';

const NestedList = (): JSX.Element => {
  const classes = listStyles();
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      <ListItem button onClick={() => setOpen((prev) => !prev)}>
        <ListItemIcon className={classes.icons}>
          <Avatar alt="Default User" />
        </ListItemIcon>
        <ListItemText primary="Account" className={classes.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon className={classes.icons}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
            <ExpandLess className={classes.none} />
          </ListItem>
        </List>
      </Collapse>
      <Link to="/notifications" className={classes.links}>
        <ListItem button>
          <ListItemIcon className={classes.icons}>
            <IoNotificationsSharp />
          </ListItemIcon>
          <ListItemText primary="Notifications" className={classes.text} />
          <ExpandLess className={classes.none} />
        </ListItem>
      </Link>
      <Link to="/messages" className={classes.links}>
        <ListItem button>
          <ListItemText primary="Messages" className={classes.text} />
          <ExpandLess className={classes.none} />
        </ListItem>
      </Link>
      <Link to="/discover" className={classes.links}>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Discover" className={classes.text} />
          <ExpandLess className={classes.none} />
        </ListItem>
      </Link>
    </List>
  );
};

export default NestedList;
