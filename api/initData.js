const initData = () => (
    fetch('https://php-server-shopping-app.herokuapp.com/')
        .then(res => res.json())
);
export default initData;