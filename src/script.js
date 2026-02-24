const menuSelector = document.getElementsByClassName("menu-selector");
const interviewClick1 = document.getElementById("interview-click-1");
const interviewCount = document.getElementById("interview-count")
const rejectClick1 = document.getElementById("reject-click-1");

console.log(interviewClick1);
interviewClick1.addEventListener ("click", () => {
    interviewCount.innerText = Number(interviewCount.innerText) + 1;
    // if (rejectCLick()){document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) - 1}
    interviewClick1.style.opacity = "50";
    document.getElementById("not-applied-1").innerText = "Applied";

}, {once: true})

// const jobCards =  document.querySelectorAll(".Job-Card");
// const interview = document.getElementById("interviewCount");
// const jobArray = [];
// for (let job of jobCards){
//     jobArray.push(job);
// }

