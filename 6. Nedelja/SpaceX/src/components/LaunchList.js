import { getAllLaunches } from "../service"
import { Launch } from "./Launch";

export const LaunchList = (year) => {
    const launchListDiv = document.createElement("div");
    launchListDiv.className = "launch-list";
    getAllLaunches().then(res => {
        if(year == undefined){
            res.data.forEach(element => {
                launchListDiv.appendChild(Launch(element));
            });
        }else{
            res.data.filter(el => el.launch_year == year).forEach(element => {
                launchListDiv.appendChild(Launch(element));
        
            });
        }
    });
    return launchListDiv;
}