let jwt = require( 'jsonwebtoken' );
let checkToken = (req, res, next) =>
{
  // Express headers are auto converted to lowercase
  let token = req.headers['x-access-token'] ||
              req.headers['authorization'] || "";
  // An empty string allows the token to be treated as a string but will return false
  if( token.startsWith( 'Bearer ' ) )
  {
    // Remove Bearer from string
    token = token.slice( 7, token.length );
  }
  if( token )
  {
    console.log(token);
    
    // Pass in the token and the secret key into verify()
    jwt.verify( token, process.env.TOKEN_SECRET, (err, decoded) =>
    {
      if( err )
      {
        console.error(err);
        
        return res.json(
        {
          success: false,
          message: err.message
        } );
      }
      else
      {
        req.decoded = decoded;
        next();
      }
    } );
  }
  else
  {
    return res.json(
    {
      success: false,
      message: 'Auth token is not supplied'
    } );
  }
};
let checkAdminToken = (req, res, next) =>
{
  // Express headers are auto converted to lowercase
  let token = req.headers['x-access-token'] ||
              req.headers['authorization'] || "";
  // An empty string allows the token to be treated as a string but will return false
  if( token.startsWith( 'Bearer ' ) )
  {
    // Remove Bearer from string
    token = token.slice( 7, token.length );
  }
  if( token )
  {
    console.log(token);
    
    // Pass in the token and the secret key into verify()
    jwt.verify( token, process.env.ADMIN_SECRET, (err, decoded) =>
    {
      if( err )
      {
        console.error(err);
        
        return res.json(
        {
          success: false,
          message: err.message
        } );
      }
      else
      {
        req.decoded = decoded;
        next();
      }
    } );
  }
  else
  {
    return res.json(
    {
      success: false,
      message: 'Auth token is not supplied'
    } );
  }
};
module.exports =
{
  checkToken: checkToken,
  checkAdminToken: checkAdminToken
}