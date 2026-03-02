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

const reject = document.getElementById("reject");
const position_RejectTab = document.getElementById("reject-tab");
const event_RejectClick1 = document.getElementById("reject-click-1");

const ads = all.querySelectorAll(".ad-h");
const ad = x => x.target.closest(".job-card").querySelector(".ad-h");

const tabArray = [position_AllTab, position_InterviewTab, position_RejectTab];
const sectionArray = [all, interview, reject];
// const rejectClick1 = document.getElementById("reject-click-1");

// Total Job Count and searched job count
totalCount.innerText = all.getElementsByClassName("job-card").length;
searchOutput.innerText = totalCount.innerText;

// Initializing Delete - Recycle bin button for all
all.addEventListener("click", (event) => {
    if (event.target.classList.contains("del-btn")) {
        event.target.closest(".job-card").remove();  //will start removing from the feet of event.currentTarget.parentNode.parentNode.parentNode
        totalCount.innerText = document.getElementsByClassName("job-card").length; //Number()
        searchOutput.innerText = totalCount.innerText;
    }
});

// Delete or Reject from Interview section
interview.addEventListener("click", (event) => {
    // Delete click
    if (event.target.classList.contains("del-btn")) {
        for (const one_particular_ad of ads){
            if(one_particular_ad.innerHTML === ad(event).innerHTML){
                event_InterviewClick1.removeAttribute("disabled");
            }
        }
        event.target.closest(".job-card").remove();  //will start removing from the feet of event.currentTarget.parentNode.parentNode.parentNode
        interviewCount.innerText = Number(interviewCount.innerText) - 1;
        document.querySelector(".not-applied").innerText = "Not Applied";

    }

    // Recycle Bin Click
    if (event.target.closest(".reject-click")){
        event.target.closest(".w-full").querySelector(".not-applied").innerText = "Rejected";
        event.target.closest(".job-card").querySelector(".reject-click").setAttribute("disabled", true);
        event.target.closest(".job-card").querySelector(".interview-click").removeAttribute("disabled");
        reject.appendChild(event.target.closest(".job-card").cloneNode(true));
        event.target.closest(".job-card").remove();
    }

    interviewCount.innerText = interview.getElementsByClassName("job-card").length;
    rejectCount.innerText = reject.getElementsByClassName("job-card").length;
});

// Delete or Interview from Reject section
reject.addEventListener("click", (event) => {
    // Delete click
    if (event.target.classList.contains("del-btn")) {
        for (const one_particular_ad of ads){
            if(one_particular_ad.innerHTML === ad(event).innerHTML){
                event_RejectClick1.removeAttribute("disabled");
            }
        }
        event.target.closest(".job-card").remove();  //will start removing from the feet of event.currentTarget.parentNode.parentNode.parentNode
        rejectCount.innerText = Number(rejectCount.innerText) - 1;
        document.querySelector(".not-applied").innerText = "Not Applied";
    }

    // Recycle Bin Click
    if (event.target.closest(".interview-click")){
        event.target.closest(".w-full").querySelector(".not-applied").innerText = "Applied";
        event.target.closest(".job-card").querySelector(".interview-click").setAttribute("disabled", true);
        event.target.closest(".job-card").querySelector(".reject-click").removeAttribute("disabled");
        interview.appendChild(event.target.closest(".job-card").cloneNode(true));
        event.target.closest(".job-card").remove();
    }

    interviewCount.innerText = interview.getElementsByClassName("job-card").length;
    rejectCount.innerText = reject.getElementsByClassName("job-card").length;
});

// One click takes away


//Initializing Interview button
all.addEventListener("click", (event) => {
    const applyStatus = event.target.closest(".w-full").querySelector(".not-applied");
    if(event.target.classList.contains("interview-click") || event.target.parentNode.classList.contains("interview-click")){        
        // Interview button disabled && Reject button enabled - Single click
        event_InterviewClick1.setAttribute("disabled", true);
        event_RejectClick1.removeAttribute("disabled");
        // event_RejectClick1.setAttribute("disabled", true);      

        // Not Applied ==> Applied
        applyStatus.innerText = "Applied"; //Silently I unlocked new of using querySelector. I don't always have to use `document`. `document` means all of this html file. `document.querySelector()` means searching atop to bottom of this html. so `Random_Node.querySelector()` means searching the first matching class element of Random_Node.
        let x = event.target.closest(".job-card").cloneNode(true);
        interview.appendChild(x);
        interviewCount.innerText = Number(interviewCount.innerText) + 1;
    }

    if(event.target.classList.contains("reject-click") || event.target.parentNode.classList.contains("reject-click")){
        // Interview && Reject button - Single click enabled
        event_RejectClick1.setAttribute("disabled", true);
        event_InterviewClick1.removeAttribute("disabled");
        // event_RejectClick1.setAttribute("disabled", true);   
        
        // Not Applied ==> Rejected
        applyStatus.innerText = "Rejected";
        let x = event.target.closest(".job-card").cloneNode(true);
        reject.appendChild(x);
        rejectCount.innerText = Number(rejectCount.innerText) + 1;
    }
});
    
// !position_InterviewTab.classList.contains("active-tab")? console.log("Yes") : console.log("No")

section_Tab.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    for (let sec of sectionArray){
        sec.classList.replace("flex-y", "hidden");
    }
    for (let t of section_Tab.querySelectorAll("button")){
        t.classList.remove("active-tab");
    }
    for (let sec of sectionArray){
        if (btn.dataset.target === sec.id){
            sec.classList.replace("hidden", "flex-y");
            btn.classList.add("active-tab");
        }
    }
});


totalCount.innerText = all.getElementsByClassName("job-card").length;
searchOutput.innerText = totalCount.innerText;

// section_Tab.addEventListener("click", (event) => {
//     for (let i = 0; i < tabArray.length; i++){ 
//         if((event.target.parentNode.id ===  tabArray[i].id || event.target.id === tabArray[i].id) && sectionArray[i].classList.contains("hidden") && !(event.target.closest(".menu-selector").hasAttribute("active"))){
//             sectionArray[i].classList.remove("hidden"); sectionArray[i].classList.add("flex-y");
//             event.target.closest(".menu-selector").setAttribute("active", true);
//             console.log(`clicked ${tabArray[i].innerText}`);
//         } else if ((event.target.parentNode.id !==  tabArray[i].id || event.target.id !== tabArray[i].id) && sectionArray[i].classList.contains("flex-y") && event.target.closest(".menu-selector").hasAttribute("active")){
//             sectionArray[i].classList.remove("flex-y"); sectionArray[i].classList.add("hidden");
//             event.target.closest(".menu-selector").removeAttribute("active");
//             console.log(`changed ${tabArray[i].innerText}`);
//         }
//     }
// });

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