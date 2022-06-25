const title = document.querySelector(".text");

let text = "A man, a plan, a canal:Panama".toLowerCase().split(" ");

let tempText = "";
let Str = "!@#$%^&*()-_+={}[]/?~`.,><;:";

for (let i = 0; i < text.length; i++) {
  if (!Str.includes(text[i])) {
    tempText += text[i];
  }
}

let textRevers = tempText.split(" ").reverse().join("");

if (textRevers == tempText) {
  title.innerText = "true";
  console.log(true);
} else {
  title.innerText = "false";
  console.log(false);
}

console.log(tempText);
console.log(textRevers);
