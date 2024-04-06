import axios from "axios";


const baseURL = axios.create({
     baseURL:"http://103.145.138.54:3232/v1",
     timeout:10000,
     headers:{"X-Custom-Header":"foobar", authorization:`Bearer ${localStorage.getItem("token")}`},
})

export default baseURL;