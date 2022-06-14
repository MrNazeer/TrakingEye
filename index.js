let doc = document;
let leftpulp = doc.querySelector("#left");
let rightpulp = doc.querySelector("#right");

doc.addEventListener("mousemove", (e)=>{
    const x = e.clientX * 100 / window.innerWidth + "%";
    const y = e.clientY * 100 / window.innerWidth + "%";
    leftpulp.style.left = x;
    leftpulp.style.top = y;
    rightpulp.style.left = x;
    rightpulp.style.top = y;
})