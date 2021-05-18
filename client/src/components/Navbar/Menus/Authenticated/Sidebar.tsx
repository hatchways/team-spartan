import React from 'react';
import { makeStyles, Drawer, Button } from '@material-ui/core';
import { GiHamburgerMenu } from 'react-icons/gi';
import List from './List';

const useStyles = makeStyles((theme) => ({
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

const Sidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const classes = useStyles();

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu className={classes.burger} color="white" />
      </Button>
      <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(!isOpen)} className={classes.list}>
        <List />
      </Drawer>
    </>
  );
};

export default Sidebar;
