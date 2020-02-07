// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up


app.get( '/inventory', ( req, res )=>{
    console.log( 'in /inventory GET' );
    res.send( 'woof' );
}) // end /inventory POST

app.post( '/inventory', ( req, res )=>{
    console.log( 'in /inventory POST:', req.body );
    res.send( 'meow' );
}) // end /inventory POST