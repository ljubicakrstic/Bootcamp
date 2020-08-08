
const naruci = document.querySelectorAll(".naruci");
const naruciOdmah = document.querySelectorAll(".naruciOdmah");
const count = document.getElementById("count");
const msg = document.getElementById("msg");
let d = new Date();
let datetime =  d.getDate() + "/"
                + (d.getMonth()+1)  + "/" 
                + d.getFullYear() + " @ "  
                + d.getHours() + ":"  
                + d.getMinutes() + ":" 
                + d.getSeconds();;


naruci.forEach(btn => {
    btn.addEventListener("click", (e) => {
        count.innerText++;
    });
});

naruciOdmah.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(count.innerText == 0){
            msg.innerText = "Greska.";
        }else{
            msg.innerText = `Narucili ste ${count.innerText} pica [${datetime}]`;
            count.innerText = 0;
        }
    });
});
