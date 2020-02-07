// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 5000;
let inventory = [];

// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up


app.get( '/inventory', ( req, res )=>{
    console.log( 'in /inventory GET' );
    res.send( inventory );
}) // end /inventory POST

app.post( '/inventory', ( req, res )=>{
    console.log( 'in /inventory POST:', req.body );
    if( req.body.size === 'ginormous' || req.body.description === 'ginormous' ){
        res.sendStatus( 400 );
    } // end ginormous
    else{
        // push new object into an array if !ginormous
        inventory.push( req.body );
        res.sendStatus( 201 );
    } // end ! ginormous
}) // end /inventory POST