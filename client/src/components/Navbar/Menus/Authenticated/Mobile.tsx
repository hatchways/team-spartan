import React from 'react';
import { Drawer, Button } from '@material-ui/core';
import { GiHamburgerMenu } from 'react-icons/gi';
import List from './List';
import { mobileStyles } from './stylesIndex';

export const Mobile = (): JSX.Element => {
  const classes = mobileStyles();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen((prevOpen) => !prevOpen)}>
        <GiHamburgerMenu className={classes.burger} color="white" />
      </Button>
      <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(!isOpen)} className={classes.list}>
        <List />
      </Drawer>
    </>
  );
};
