import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  signup({ username, password }) {
    return this.auth
      .post("/auth/signup", { username, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  login({ username, password }) {
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }

  garage(id){
    return this.auth.get(`/cars/garage/${id}`).then(({data}) => {
      return data});
  }

  carDetail(id){
    return this.auth.get(`/cars/carDetail/${id}`).then(({data}) => {
      return data});
  }

  profile(id){
    return this.auth.get(`/profile/${id}`).then(({data}) => {
      return data});
  }

  edituser(id){
    return this.auth.get("/profile/edituser/" + id).then(({data}) =>{
      return data});
  }

  editcar(id){
    return this.auth.get("/profile/editcar" + id).then(({data}) =>{
      return data});
  }

  handleUpload = async (theFile)=>{
    console.log("file in service", theFile);
    try {
      const res= await this.auth.post("/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
