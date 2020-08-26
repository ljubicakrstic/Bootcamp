import axios from "axios";

const getAllLaunches = () => {
    return axios.get("https://api.spacexdata.com/v3/launches/past");
}

const getCompanyInfo = () => {
    return axios.get("https://api.spacexdata.com/v3/info");
}

export {getAllLaunches, getCompanyInfo}