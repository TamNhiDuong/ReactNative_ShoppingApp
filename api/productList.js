const productList = (idType, page) => (
  fetch(
    'http://localhost:8080/api/product_by_type.php?id_type='+ idType + '&page=' + page
  ).then(res => res.json())
);
export default productList;