fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.map((val) => {
            console.log(val.avatar_url);
        });
    })
    .catch((error) => console.error('Error:', error));







// ASYNC START
let data = async () => {
    let da = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await da.json()
    console.log(data);
}
data()


let data1 = async () => {
    let da = await fetch('https:api.github.com/users')
    let data = await da.json()
    data.map((item) => {
        console.log(item.login);
    })
    // console.log(data);
}
data1()