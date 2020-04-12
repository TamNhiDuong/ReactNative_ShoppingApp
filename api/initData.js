const initData = () => (
    fetch('http://localhost/app-server/')
        .then(res => res.json())
);
export default initData;