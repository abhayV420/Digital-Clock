let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getAnimations("sec");


// console.log(currTime.getMinutes());

setInterval(()=>{
    let currTime = new Date();
    hrs.innerHTML = currTime.getHours();
    mins.innerHTML = currTime.getMinutes();
    sec.innerHTML = currTime.getSeconds(); //pata nahi secs kyu kaam nahi kar rahi bc  😠😠😠
    // let secc = currTime.getSeconds();
    // console.log(secc)
}, 1000)


console.log(sec)

