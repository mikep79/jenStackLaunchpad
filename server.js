var express = require( 'express');
var path = require( 'path' );
var port = 3000;
var app = express();
var catColors = ['black', 'white', 'orange'];
var getCounter = {
  count: 0
}

app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  // server side logs show up in terminal
  console.log( 'server up on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // this is the root url
  console.log( 'base URL hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

app.get( '/cats', function ( req, res ){          // calls route
  getCounter.count++;                                   
  console.log('GET request', getCounter);         // logs how many times route has been called.
  res.send(getCounter);
});