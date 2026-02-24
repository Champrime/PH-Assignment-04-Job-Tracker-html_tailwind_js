const menuSelector = document.querySelectorAll(".menu-selector");
const interviewClickSelector = document.querySelector(".interview-click");
const interviewCount = document.getElementById("interview-count")
const rejectCLickSelector = document.querySelector(".reject-click");


interviewClickSelector.onclick = () => {
    while (interviewCount.innerText < 1) {
        interviewCount.innerText = Number(interviewCount.innerText) + 1;
        if (interviewCount.innerText == 1) {interviewClickSelector.disabled = true;}
        // if (rejectCLick()){document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) - 1}
    }
}

// const jobCards =  document.querySelectorAll(".Job-Card");
// const interview = document.getElementById("interviewCount");
// const jobArray = [];
// for (let job of jobCards){
//     jobArray.push(job);
// }

