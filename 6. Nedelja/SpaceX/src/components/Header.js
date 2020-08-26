import { getCompanyInfo } from "../service";

export const Header = () => {
    const headerDiv = document.createElement("div");
    headerDiv.className = "header";
    const companyName = document.createElement("h1");
    companyName.className = "company-name";
    getCompanyInfo().then(res => {
        companyName.textContent = res.data.name;
    });
    headerDiv.appendChild(companyName);
    return headerDiv;
}