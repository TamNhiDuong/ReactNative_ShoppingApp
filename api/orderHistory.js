const orderHistory = (token) => (
    fetch('http://localhost/app-server/order_history.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({token})
    }).then(res => res.json())
  );
  module.exports = orderHistory;
  