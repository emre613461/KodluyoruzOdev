import axios from "axios";

async function getData()  {
    const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/1");
    const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=1");
     console.log(users)
     console.log(posts[0])
}
getData();
export default getData;