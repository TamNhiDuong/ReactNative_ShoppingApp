const submitOrder = (token, arrayDetail) => (
  fetch('http://localhost/app-server/cart.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token, arrayDetail})
  }).then(res => res.text())
);
module.exports = submitOrder;