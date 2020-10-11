const signIn = (email, password) =>(
  fetch('https://php-server-shopping-app.herokuapp.com/login.php',
{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({email, password})
  }).then(res => res.json())
);
module.exports = signIn;
 