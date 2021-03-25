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
