import axios from "axios";
const BASE_URL = `http://localhost:8000/api/v1.0/`

export const save_ip = async () => {
    const res = await axios.get("https://www.cloudflare.com/cdn-cgi/trace");
    const ip = res.data.split("\n")[2].split("=")[1];
    window.sessionStorage.setItem("ip", ip);
  };

  export const getTheme = async () => {
    // var credentials = btoa(username + ':' + password);
    // var basicAuth = 'Basic ' + credentials;
    const url = BASE_URL + 'theme'
    const res = await axios.get(url);
    if (res.status==200){
      return [true, res.data]
  
    }
    return [false, null]
}

export const getAllData = async (theme) => {
    // var credentials = btoa(username + ':' + password);
    // var basicAuth = 'Basic ' + credentials;
    const url = BASE_URL + `data?theme=${theme}`
    const res = await axios.get(url);
    if (res.status==200){
      return [true, res.data]
  
    }
    return [false, null]
}
