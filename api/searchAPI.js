const searchAPI = (keyWord) => (
  fetch('http://localhost/app-server/search.php?key=' + keyWord).then(res => 
    res.json())
);
export default searchAPI;