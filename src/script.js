const menuSelectors = document.getElementsByClassName("menu-selector");
const jobCards = document.querySelectorAll('job-card');
// const interviewCount = document.getElementById("interview-count");
// const rejectCount = document.getElementById("reject-count");
const all = document.getElementById("all");
const allTab = document.getElementById("all-tab");
const interview = document.getElementById("interview");
const reject = document.getElementById("reject");
const interviewClick1 = document.getElementById("interview-click-1");
// const rejectClick1 = document.getElementById("reject-click-1");

allTab.addEventListener("click" , (event) => {
    event.currentTarget === allTab.classList.contains("hidden") ? allTab.classList.replace("hidden, flex-y") : ""
})




// console.log(interviewClick1);
interviewClick1.addEventListener ("click", (event) => {
    // event.stopImmediatePropagation();
    // `event.currentTarget` is the element the listener is attached to.
    // Use its parentNode to get the parent of `interviewClick1` even when a child is clicked.
    let card = ((event.currentTarget.parentNode).parentNode).parentNode;
    let copyCard = card.cloneNode(true);
    document.getElementById("interview-listed").appendChild(copyCard);
})
//     if (interviewCount.innerText < 1){
//         interviewCount.innerText = Number(interviewCount.innerText) + 1;
//         // if (rejectCLick()){document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) - 1}
//         interviewClick1.style.opacity = "50%";
//         rejectClick1.style.opacity = "100%";
//         document.getElementById("not-applied-1").innerText = "Applied";
//         document.createElement()
//     }
// }, {once: true})

// rejectClick1.addEventListener ("click", () => {
//     if (rejectCount.innerText < 1){
//         rejectCount.innerText = Number(rejectCount.innerText) + 1;
//         // if (rejectCLick()){document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) - 1}
//         rejectClick1.style.opacity = "50%";
//         interviewClick1.style.opacity = "100%";
//         document.getElementById("not-applied-1").innerText = "Not Interested";
//     }
// }, {once: true})

// // const jobCards =  document.querySelectorAll(".Job-Card");
// // const interview = document.getElementById("interviewCount");
// // const jobArray = [];
// // for (let job of jobCards){
// //     jobArray.push(job);
// // }
