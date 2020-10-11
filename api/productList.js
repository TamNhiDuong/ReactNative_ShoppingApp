const productList = (idType, page) => {
  let url;
  if (idType !== 'COLLECTION') {
    url = 'https://php-server-shopping-app.herokuapp.com/product_by_type.php?id_type=' + idType + '&page=' + page;
  }
  if (idType === 'COLLECTION') {
    url = 'https://php-server-shopping-app.herokuapp.com/get_collection.php?page=' + page;
  }
  return fetch(url).then(res => res.json());
};
export default productList;
