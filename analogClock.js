function desplayTime()
{
let d=new Date();
let s=d.getSeconds();
let sec=document.getElementById("seconds");
sec.style.transform=`translate(-50%,-50%) rotate(${6*s}deg)`;
}setInterval(desplayTime, 1000);

function dispMinute(){
    let d=new Date();
    let m=d.getMinutes();
let min=document.getElementById("minute");
min.style.transform=`translate(-50%,-50%) rotate(${6*m}deg)`;

}setInterval(dispMinute, 1000);

function dispHour(){
    let d=new Date();
    let h=d.getHours();
    let hr=document.getElementById("hour");
    hr.style.transform=`translate(-50%,-50%) rotate(${30*h}deg)`
    
}setInterval(dispHour, 1000);

