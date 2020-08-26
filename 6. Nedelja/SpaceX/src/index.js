
import { LaunchList } from "./components/LaunchList";
import { SelectList } from "./components/Select";
import { Header } from "./components/Header";

const app = document.getElementById("app");
app.append(Header(), SelectList());

export function showLaunchesByYear(year){
    if(app.children.length > 2){
    app.children[2].remove();
    }
    app.append(LaunchList(year));
}

showLaunchesByYear();







