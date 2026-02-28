// const menuSelectors = document.getElementsByClassName("menu-selector");
const jobCards = document.querySelectorAll('job-card');
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("reject-count");

const section_Tab = document.getElementById("tab-section");
const all = document.getElementById("all");
const position_AllTab = document.getElementById("all-tab");
const interview = document.getElementById("interview");
const position_InterviewTab = document.getElementById("interview-tab");
const event_InterviewClick1 = document.getElementById("interview-click-1");
const reject = document.getElementById("rejected");
const position_RejectTab = document.getElementById("reject-tab");

const tabArray = [position_AllTab, position_InterviewTab, position_RejectTab];
const sectionArray = [all, interview, reject];
// const rejectClick1 = document.getElementById("reject-click-1");

section_Tab.addEventListener("click", (event) => {
    for (let i = 0; i < tabArray.length; i++){ 
        if(event.target.parentNode.id ===  tabArray[i].id || event.target.id === tabArray[i].id && sectionArray[i].classList.contains("hidden")){
            sectionArray[i].classList.remove("hidden"); sectionArray[i].classList.add("flex-y");
            console.log(`clicked ${tabArray[i].innerText}`);
        } else if (event.target.parentNode.id !==  tabArray[i].id || event.target.id !== tabArray[i].id){
            sectionArray[i].classList.remove("flex-y"); sectionArray[i].classList.add("hidden");
            console.log(`changed ${tabArray[i].innerText}`);
        }
    }
});

// Tab Selector primarily hard coded
/*
position_AllTab.addEventListener("click" , () => {
    if (all.classList.contains("hidden")) {
        all.classList.remove("hidden"); all.classList.add("flex-y");
    }

    interview.classList.add("hidden"); interview.classList.remove("flex-y");
    reject.classList.add("hidden"); reject.classList.remove("flex-y");
});

position_InterviewTab.addEventListener("click" , () => {
    if (interview.classList.contains("hidden")) {
        interview.classList.remove("hidden"); interview.classList.add("flex-y");
    }
    
    all.classList.add("hidden"); all.classList.remove("flex-y");
    reject.classList.add("hidden"); reject.classList.remove("flex-y");
})

position_RejectTab.addEventListener("click" , () => {
    if (reject.classList.contains("hidden")) {
        reject.classList.remove("hidden"); reject.classList.add("flex-y");
    }
    
    all.classList.add("hidden"); all.classList.remove("flex-y");
    interview.classList.add("hidden"); interview.classList.remove("flex-y");
})
*/

event_InterviewClick1.addEventListener ("click", (event) => {
    let card = ((event.currentTarget.parentNode).parentNode).parentNode;
    let copyCard = card.cloneNode(true);
    interview.appendChild(copyCard);
    console.log(document.getElementsByTagName("button").nodeList);
})
//     if (interviewCount.innerText < 1){
//         interviewCount.innerText = Number(interviewCount.innerText) + 1;
//         // if (rejectCLick()){document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) - 1}
//         event_InterviewClick1.style.opacity = "50%";
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
//         event_InterviewClick1.style.opacity = "100%";
//         document.getElementById("not-applied-1").innerText = "Not Interested";
//     }
// }, {once: true})

// // const jobCards =  document.querySelectorAll(".Job-Card");
// // const interview = document.getElementById("interviewCount");
// // const jobArray = [];
// // for (let job of jobCards){
// //     jobArray.push(job);
// // }

/*

let tabs = {
    tab1: {
        name: position_AllTab,
        section: all
    },
    tab2: {
        name: position_InterviewTab,
        section: interview
    },
    tab3: {
        name: position_RejectTab,
        section: reject
    }
}

console.log(tabs.tab1.section);


function tabAction(tab_selected){
    if (tab_selected.name && tab_selected.section.classList.contains("hidden")) {
        tab_selected.section.classList.remove("hidden"); tab_selected.section.classList.add("flex-y");
    }

    for (let value of Object.values(tabs)){
        if (value !== tab_selected){
            tabs.tab.
        }
    }
}
*/