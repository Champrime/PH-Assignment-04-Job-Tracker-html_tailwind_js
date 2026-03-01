// const menuSelectors = document.getElementsByClassName("menu-selector");
const totalCount = document.getElementById("total-count");
const searchOutput = document.getElementById("search-output");
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
const event_RejectClick1 = document.getElementById("reject-click-1");

// let applyStatus = (x) => { 
//     x.addEventListener("click", (event)=>{
//         event.target.closest(".w-full").querySelector(".not-applied");
//     })
// }

const tabArray = [position_AllTab, position_InterviewTab, position_RejectTab];
const sectionArray = [all, interview, reject];
// const rejectClick1 = document.getElementById("reject-click-1");


// Total Job Count and searched job count

totalCount.innerText = document.getElementsByClassName("job-card").length;
searchOutput.innerText = totalCount.innerText;

//Initializing Delete - Recycle bin button
all.addEventListener("click", (event) => {
    if (event.target.classList.contains("del-btn")) {
        event.target.closest(".job-card").remove();  //will start removing from the feet of event.currentTarget.parentNode.parentNode.parentNode
        totalCount.innerText = document.getElementsByClassName("job-card").length; //Number()
        searchOutput.innerText = totalCount.innerText;
    }
});

interview.addEventListener("click", (event) => {
    if (event.target.classList.contains("del-btn")) {
        event.target.closest(".job-card").remove();  //will start removing from the feet of event.currentTarget.parentNode.parentNode.parentNode
        interviewCount.innerText = Number(interviewCount.innerText) - 1;
        document.querySelector(".not-applied").innerText = "Not Applied";
    }
});

reject.addEventListener("click", (event) => {
    if (event.target.classList.contains("del-btn")) {
        event.target.closest(".job-card").remove();  //will start removing from the feet of event.currentTarget.parentNode.parentNode.parentNode
        rejectCount.innerText = Number(rejectCount.innerText) - 1;
        document.querySelector(".not-applied").innerText = "Not Applied";
    }
});

//Initializing Interview button
all.addEventListener("click", (event) => {
    if(event.target.classList.contains("interview-click") || event.target.parentNode.classList.contains("interview-click")){        
        // Interview && Reject button - Single click enabled
        event.target.setAttribute("disabled", true);

        // Not Applied ==> Applied
        event.target.closest(".w-full").querySelector(".not-applied").innerText = "Applied";
        let x = event.target.closest(".job-card").cloneNode(true);
        interview.appendChild(x);
        interviewCount.innerText = Number(interviewCount.innerText) + 1;
    }

    if(event.target.classList.contains("reject-click") || event.target.parentNode.classList.contains("reject-click")){
        
        // Interview && Reject button - Single click enabled
        event.target.setAttribute("disabled", true);
        
        // Not Applied ==> Rejected
        event.target.closest(".w-full").querySelector(".not-applied").innerText = "Rejected";
        let x = event.target.closest(".job-card").cloneNode(true);
        reject.appendChild(x);
        rejectCount.innerText = Number(rejectCount.innerText) + 1;
    }

});
    
section_Tab.addEventListener("click", (event) => {
    for (let i = 0; i < tabArray.length; i++){ 
        if(event.target.parentNode.id ===  tabArray[i].id || event.target.id === tabArray[i].id && sectionArray[i].classList.contains("hidden")){
            sectionArray[i].classList.remove("hidden"); sectionArray[i].classList.add("flex-y");
            console.log(`clicked ${tabArray[i].innerText}`);
        } else if (event.target.parentNode.id !==  tabArray[i].id || event.target.id !== tabArray[i].id && sectionArray[i].classList.contains("flex-y")){
            sectionArray[i].classList.remove("flex-y"); sectionArray[i].classList.add("hidden");
            console.log(`changed ${tabArray[i].innerText}`);
        }
    }
});

//Initializing Reject button

// ------ Trash codes but useful for later ------

// Total counter
// for(let x of document.getElementsByClassName("job-card")){
//     totalCount.innerText = Number(totalCount.innerText) + 1;
//     searchOutput.innerText = totalCount.innerText;
// }

//as forEach() method is built to querySelectorAll(), I may do the following for a cleaner result. Newer learning, newer achievement.
//However, querySelectorAll() and getElementsByClassName provides Static and Dynamic results respectively. And little knowledge is dangerous sometimes. I shall keep this newly discovery to myself for now and run the program using the old for...of method.
// document.querySelectorAll(".job-card").forEach(() => {
//     totalCount.innerText = Number(totalCount.innerText) + 1;
//     searchOutput.innerText = totalCount.innerText;
// })

// all.classList.contains("job-card").forEach(() => {
//     totalCount.innerText = Number(totalCount.innerText) + 1;
//     searchOutput.innerText = totalCount.innerText;
// })

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


    
    
/*    if (interviewCount.innerText < 1){
        interviewCount.innerText = Number(interviewCount.innerText) + 1;
        // if (rejectCLick()){document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) - 1}
        event_InterviewClick1.style.opacity = "50%";
        rejectClick1.style.opacity = "100%";
        document.getElementById("not-applied-1").innerText = "Applied";
        document.createElement()
    }
}, {once: true})*/

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