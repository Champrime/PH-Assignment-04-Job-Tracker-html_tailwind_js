// const menuSelectors = document.getElementsByClassName("menu-selector");
const jobCards = document.querySelectorAll('job-card');
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("reject-count");
const all = document.getElementById("all");
const allTab = document.getElementById("all-tab");
const interview = document.getElementById("interview");
const interviewTab = document.getElementById("interview-tab");
const interviewClick1 = document.getElementById("interview-click-1");
const reject = document.getElementById("rejected");
const rejectTab = document.getElementById("reject-tab");

const tabs = [allTab, interviewTab, rejectTab];
// const rejectClick1 = document.getElementById("reject-click-1");

allTab.addEventListener("click" , () => {
    // 1. Check BEFORE you change anything
    if (all.classList.contains("hidden")) {
        console.log("Showing All Tab");
        all.classList.remove("hidden");
        all.classList.add("flex-y");
    }

    // 2. Hide the others specifically
    interview.classList.add("hidden");
    interview.classList.remove("flex-y");

    reject.classList.add("hidden");
    reject.classList.remove("flex-y");
});

interviewTab.addEventListener("click" , () => {
    interview.classList.contains("hidden") ? interview.classList.replace("hidden", "flex-y") : console.log("A certain thing not found");
    all.classList.contains("flex-y") ? all.classList.replace("flex-y", "hidden") : console.log("A certain thing not found");
    reject.classList.contains("flex-y") ? reject.classList.replace("flex-y", "hidden") : console.log("A certain thing not found");
    // event.currentTarget.classList.contains("hidden") ?  console.log("interview ") : console.log("error");
    // all.classList.contains("flex-y") ? console.log("all ") : console.log("error");
    // reject.classList.contains("flex-y") ?  console.log("reject ") : console.log("error");
})

rejectTab.addEventListener("click" , () => {
    reject.classList.contains("hidden") ? reject.classList.replace("hidden", "flex-y") : console.log("A certain thing not found")
    all.classList.contains("flex-y") ? all.classList.replace("flex-y", "hidden") : console.log("A certain thing not found")
    interview.classList.contains("flex-y") ? interview.classList.replace("flex-y", "hidden") : console.log("A certain thing not found")
})

// console.log(interviewClick1);
interviewClick1.addEventListener ("click", (event) => {
    // event.stopImmediatePropagation();
    // `event.currentTarget` is the element the listener is attached to.
    // Use its parentNode to get the parent of `interviewClick1` even when a child is clicked.
    let card = ((event.currentTarget.parentNode).parentNode).parentNode;
    let copyCard = card.cloneNode(true);
    interview.appendChild(copyCard);
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
