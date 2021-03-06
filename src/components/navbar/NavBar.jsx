//This component is for showing our navbar which have our sites name and a shpping cart symbol which also shows number of items in 
//shooping cart.
//badgecontent -> shows number of items in cart.
 

import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link , useLocation} from 'react-router-dom';
import logo from '../../assets/logo.webp';
import useStyle from './styles';

const Navbar =( {totalItems} )=>{
    const classes= useStyle();
    const location= useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar >
                    <Typography component= {Link} to="/" variant="h6" className= {classes.title} color="inherit">
                        <img src={logo} alt="shopping" height="25px" className={classes.image} />
                        Shopify
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname==='/' && (
                    <div className={classes.button}>
                        <IconButton component= {Link} to="/cart" aria-label="show cart content" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;