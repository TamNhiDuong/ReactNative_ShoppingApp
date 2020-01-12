const submitOrder = (token, arrayDetail) => (
  fetch('http://localhost:8080/api/cart.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token, arrayDetail})
  }).then(res => res.text())
);
module.exports = submitOrder;