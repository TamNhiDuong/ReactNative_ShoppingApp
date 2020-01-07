const changeInforAPI = (token, name, address, phone) => (
  fetch('http://localhost:8080/api/change_info.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token, name, address, phone})
  }).then(res => res.json())
);
module.exports = changeInforAPI;