const changeInforAPI = (token, name, address, phone) => (
  fetch('https://php-server-shopping-app.herokuapp.com/change_info.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token, name, address, phone})
  }).then(res => res.json())
);
module.exports = changeInforAPI;