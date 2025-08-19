import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjZmM2VmZmM2MTI5MzY1ZDcwMDA5M2Y3Y2M1Y2Q2MCIsIm5iZiI6MTcxNTYwNjAwNC42NDYwMDAxLCJzdWIiOiI2NjQyMTFmNDE4MzgyY2IwMDE1YTUwNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YJBRAZyEFgxLoPGLmbWioflYMzZKb2FlNz-tA9Y91kw",
  },
});
export default instance;
