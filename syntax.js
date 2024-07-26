function toggleMobileMenu() {
    menu.classList.toggle('open');
  }
  
 function toggleMobileMenu() {
  menu.classList.toggle('open');
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-end Developer", "UI/UX Designer", "Youth Coding Instructor"];
const typingDelay = 200;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length) {
    cursorSpan.classList.add("typing", !cursorSpan.classList.contains("typing"));
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex++);
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(charIndex > 0) {
    cursorSpan.classList.add("typing", !cursorSpan.classList.contains("typing"));
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, --charIndex);
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


// clock 

// now we want to create a function and call it in every seconds

setInterval(() => {

  let date = new Date();
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  // so fo this section l created an if block statement using ? and :
  let day;
  day = hour < 12 ? "AM" : "PM"; // if hour is smaller 12 than its value will be AM else PM
  hour = hour > 24 ? hour - 12 : hour; //if hour value is greater than 12, 12 will subtract (by doing this we will get value till 12)
  hour = hour == 0 ? hour = 12 : hour; // if hour value is 0 then it will be 12 

  // now l want to add a zero(0) to all value if they are less than 10
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  console.log(sec);

  document.querySelector(".hour_num").innerText = hour;
  document.querySelector(".min_num").innerText = min;
  document.querySelector(".sec_num").innerText = sec;
  document.querySelector(".am_pm").innerText = day;

}, 1000); //not that 1000 milliseconds = 1s,