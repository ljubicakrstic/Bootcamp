export const Launch = (launch) => {
    const launchDiv = document.createElement("div");
    launchDiv.className = "launch";
    const innerDiv0 = document.createElement("div");
    innerDiv0.className = "inner-div-0";
    innerDiv0.innerHTML = `<img src="${launch.links.mission_patch}" alt="">`;
    const innerDiv1 = document.createElement("div");
    innerDiv1.className = "inner-div-1";
    innerDiv1.innerHTML = `<span>${launch.rocket.rocket_name}</span>`;
    const innerDiv2 = document.createElement("div");
    innerDiv2.className = "inner-div-2";
    innerDiv2.innerHTML = `<span>${launch.launch_year}</span>`;
    launchDiv.append(innerDiv0, innerDiv1, innerDiv2);
    return launchDiv;
}