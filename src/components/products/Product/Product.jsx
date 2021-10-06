//This component basically returns the UI of single product.
//Typography-> helps when we have to write some text. 
//Card-> displays content and actions on single topic.
//gutterBotttom -> gives bottom margin to the text.
//aria-label-> if icon is not visible this text will be shown.


import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyle from './style';

const Product=( { product, onAddToCart } ) =>{
    const classes= useStyle();
    return(
        <Card className= {classes.root}>
            <CardMedia className= {classes.media} image={product.media.source} title={product.title}/>
            <CardContent>
                <div className= {classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} color="textSecondary"/>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to card" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;