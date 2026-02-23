const x = document.querySelectorAll(".menu-selector");

const interviewClick = () => {
    document.getElementById("interviewCount").innerHTML = Number(document.getElementById("interviewCount").innerText) + 1;
} 