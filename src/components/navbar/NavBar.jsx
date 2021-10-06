//This component is for showing our navbar which have our sites name and a shpping cart symbol which also shows number of items in 
//shooping cart.
//badgecontent -> shows number of items in cart.
 

import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.webp';
import useStyle from './styles';

const Navbar =( {totalItems} )=>{
    const classes= useStyle();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar >
                    <Typography variant="h6" className= {classes.title} color="inherit">
                        <img src={logo} alt="shopping" height="25px" className={classes.image} />
                        Bend The Trend
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="show cart content" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;