// Question 1
const heading3 = document.querySelector("h3");
heading3.innerHTML = "Hello";

// Question 2
const headings4 = document.querySelectorAll("h4");
for (let i = 0; i < headings4.length; i++) {
  headings4[i].style.marginBottom = "-20px";
}

// Question 3
headings4[1].style.backgroundColor = "red";

// Question 4
const firstP = document.querySelector("p.one");
firstP.style.fontSize = "24px";
firstP.style.color = "blue";

// Question 5
const thirdP = document.querySelector("p.three");
thirdP.innerHTML = "<span>" + thirdP.innerHTML + "</span>";

// Question 6
const content = document.querySelector(".content");
content.innerHTML += "<p>Another paragraph</p>";

// Question 7
const contentP = document.querySelectorAll(".content p");
for (let i = 0; i < contentP.length; i++) {
  contentP[i].classList.add("content-item");
}

// Question 8
const services = document.querySelector("#services");
services.innerHTML = "<li>New list item</li>" + services.innerHTML;

// Question 9
services.classList.remove("service-list");

// Question 10
const hide = document.querySelector("#hide");
hide.style.display = "none";
