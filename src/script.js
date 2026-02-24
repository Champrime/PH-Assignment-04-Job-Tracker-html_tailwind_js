const menuSelector = document.getElementsByClassName("menu-selector");
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("reject-count");
const interviewClick1 = document.getElementById("interview-click-1");
const rejectClick1 = document.getElementById("reject-click-1");

console.log(interviewClick1);
interviewClick1.addEventListener ("click", () => {
    if (interviewCount.innerText < 1){
        interviewCount.innerText = Number(interviewCount.innerText) + 1;
        // if (rejectCLick()){document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) - 1}
        interviewClick1.style.opacity = "50%";
        rejectClick1.style.opacity = "100%";
        document.getElementById("not-applied-1").innerText = "Applied";
        document.createElement()
    }
}, {once: true})

rejectClick1.addEventListener ("click", () => {
    if (rejectCount.innerText < 1){
        rejectCount.innerText = Number(rejectCount.innerText) + 1;
        // if (rejectCLick()){document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) - 1}
        rejectClick1.style.opacity = "50%";
        interviewClick1.style.opacity = "100%";
        document.getElementById("not-applied-1").innerText = "Not Interested";
    }
}, {once: true})

// const jobCards =  document.querySelectorAll(".Job-Card");
// const interview = document.getElementById("interviewCount");
// const jobArray = [];
// for (let job of jobCards){
//     jobArray.push(job);
// }

