const searchAPI = (keyWord) => (
  fetch('http://localhost:8080/api/search.php?key=' + keyWord).then(res => 
    res.json())
);
export default searchAPI;