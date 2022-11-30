const cards = document.querySelectorAll(".content");
const quickies = document.querySelectorAll(".quick");
const observer = new IntersectionObserver(entries =>{
    console.log(entries);
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform= "translateY(0)";
            
        }
    })
},{threshold:0.6});

const quickobs = new IntersectionObserver(entries =>{
    console.log(entries);
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform= "translateY(0)";
        }
    })
},{threshold:0.3});

cards.forEach(card =>{
    observer.observe(card);
});
quickies.forEach(pick =>{
    quickobs.observe(pick);
});
var stories = document.getElementById("stories");
var tutors = document.getElementById("tutors");
var schedules=document.getElementById("schedules");
var courses=document.getElementById("courses");
var a=0,b=0,c=0,d=0;
const counters = document.querySelectorAll(".counter");
const countobs = new IntersectionObserver(entries =>{
    console.log(entries);
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform= "translateY(0)";
            setInterval(()=>{
                if(a<3001){
                    stories.innerHTML=a;
                    a=a+2;
                }
            },10);
            setInterval(()=>{
                if(b<321){
                    tutors.innerHTML=b;
                    b++;
                }
            },30);
            setInterval(()=>{
                if(c<1001){
                    schedules.innerHTML=c;
                    c=c+2;
                }
            },20);
            setInterval(()=>{
                if(d<583){
                    courses.innerHTML=d;
                    d=d+1;
                }
            },25);
        }
    })
},{threshold:0.4});
counters.forEach(pick =>{
    countobs.observe(pick);
});
