import axios from "axios";

const axiosAPI = axios.create({
  baseURL : "https://my-lol.herokuapp.com" 
});

const apiRequest = async (method, url, request) => {
    /* const headers = {
        authorization: ""
    }; */
    try {
    const res = await axiosAPI({
      method,
      url,
      data: request/* ,
      headers */
    });
    return Promise.resolve(res.data);
  }
  catch (err) {
    return Promise.reject(err);
  }
};

const get = (url, request) => apiRequest("get",url,request);

const initAxios ={
    get
};

export default initAxios;