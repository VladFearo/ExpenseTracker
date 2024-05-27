const express = require( 'express' );
const connectDB = require( './config/db' );
const cors = require( 'cors' );

const app = express();
connectDB();
app.use( cors() );
app.use( express.json( { extended: false } ) );

app.get( '/', ( req, res ) => res.send( 'API running' ) );

const PORT = process.env.PORT || 8000;
app.listen( PORT, () => console.log( `Server started on port ${ PORT }` ) );
