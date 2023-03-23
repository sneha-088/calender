const monthele = document.querySelector(".date h1");
const dateelement = document.querySelector(".date p");
const daysele = document.querySelector(".days");
const monthindex = new Date().getMonth();
const lastday = new Date(new Date().getFullYear(),monthindex+1,0).getDate();
const firstday = new Date(new Date().getFullYear(),monthindex,1).getDay();
//console.log(lastday);
//console.log(firstday);
//const monthindex = monthdate.getMonth();
//console.log(monthdate);
const months = ["January",
"Feburary",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];
dateelement.innerText = new Date().toDateString();
monthele.innerText = months[monthindex];
let days = " ";
for(let i = 1;i <= lastday;i++){
    if(i=== new Date().getDate()){
    days += `<div class="today">${i}</div>`;  
    }
    else{
        days += `<div>${i}</div>`;
    }
    
}
for(let i = firstday;i>0;i--){
    days += `<div class="empty"></div>`; 
}
daysele.innerHTML = days;

