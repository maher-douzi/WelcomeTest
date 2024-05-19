console.error("Error 404")
// First way(fetch method)
/*
fetch("https://jsonplaceholder.typicode.com/users").then((response)=> {response
    .json()
    .then((data) => data.map((user) => console.log(user.name,user.address)))
    .catch((error)=>console.error("Error 404"))
})
*/

//Second way(asynchrounos function)
/*
async function get(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    data.map((user) => {console.log(user.name,user.address)})
}
get()
    .then((response) => console.log("API fetched"))
    .catch((error) => console.error("Error 404 for example not 400"))
*/


//Third way(axios library)

axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data
        .map((user) => console.log(user.name, user.address)))
    .catch((error) => console.error("Error 404"))
