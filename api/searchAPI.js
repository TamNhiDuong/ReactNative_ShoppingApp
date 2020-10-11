const searchAPI = (keyWord) => (
  fetch('https://php-server-shopping-app.herokuapp.com/search.php?key=' + keyWord).then(res => 
    res.json())
);
export default searchAPI;