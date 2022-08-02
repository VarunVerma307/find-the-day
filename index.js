console.log("js");
let date=document.getElementById("date");
let month=document.getElementById("month");
let year=document.getElementById("year");
let button=document.getElementById("submit");
let getday=document.getElementById("getday");

button.addEventListener("click", ()=>{
    let date1 = new Date (`${date.value} ${month.value} ${year.value}`);
    console.log(date1);
    let day=date1.toString();
    day= day.slice(0,3);
    getday.innerHTML=day;
});