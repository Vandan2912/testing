// let note = document.getElementById("note");
// console.log(note.textContent);

// let note = document.getElementById("note");
// console.log(note.innerText);

// let div = document.getElementById("note").innerHTML;
// console.log(div);

// let firstHeading = document.querySelector("h1");
// let elements = document.querySelectorAll("*");
// let note = document.querySelector(".menu-item");
// let logo = document.querySelector("#logo");
// let autoplay = document.querySelector("[autoplay]");
// let elements = document.querySelectorAll("div, p");
// let links = document.querySelector("li > a");
// let listItems = document.querySelectorAll("ul.nav > li");
// let links = document.querySelectorAll("p ~ a");
// let links = document.querySelector("h1 + a");
// let listItem = document.querySelectorAll("li:nth-child(2)");
// let links = document.querySelector("p::first-line");

// console.log(links);

//

// let languages = ["JS", "TypeScript", "Elm", "Dart", "Scala"];
// let langEl = document.querySelector("#language");
// let fragment = new DocumentFragment();
// languages.forEach((language) => {
//   let li = document.createElement("li");
//   li.innerHTML = language;
//   fragment.appendChild(li);
// });
// langEl.appendChild(fragment);

//

// const h1 = document.querySelector("h1");
// const p = document.createElement("p");
// p.innerText = "This is JavaScript DOM after() method demo";
// h1.after(p);

//

// let app = document.querySelector("#app");
// let langs = ["CSS", "JavaScript", "TypeScript"];
// let nodes = langs.map((lang) => {
//   let li = document.createElement("li");
//   li.textContent = lang;
//   return li;
// });
// app.prepend(...nodes);

// let app = document.querySelector("#app");
// app.prepend("prepend() Text Demo");
// console.log(app.textContent);

//

// let list = document.querySelector("#list");
// list.insertAdjacentHTML("beforebegin", "<h2>Web Technology</h2>");
// list.insertAdjacentHTML("afterbegin", "<li>HTML</li>");
// list.insertAdjacentHTML("beforeend", "<li>JavaScript</li>");
// list.insertAdjacentHTML("afterend", "<p>For frontend developers</p>");

//

//

// let input = document.querySelector("#username");

// for (let attr of input.attributes) {
//   console.log(`${attr.name} = ${attr.value}`);
// }

// let input = document.querySelector("#username");
// // attribute -> property
// input.setAttribute("tabindex", 2);
// console.log(input.tabIndex); // 2

// // property -> attribute
// input.tabIndex = 3;
// console.log(input.getAttribute("tabIndex")); // 3

//

// // attribute -> property: OK
// input.setAttribute("value", "guest");
// console.log(input.value); // guest

// // property -> attribute: doesn't change
// input.value = "admin";
// console.log(input.getAttribute("value")); // guest

//

// let checkbox = document.querySelector("#chkAccept");
// console.log(checkbox.checked); // true

//

// const parent = document.createElement("div");
// const child = document.createElement("p");
// const childTwo = document.createElement("p");
// parent.append(child, childTwo, "Hello world"); // Works fine
// parent.appendChild(child, childTwo, "Hello world");

//

// let link = document.querySelector("a");

// link.addEventListener("click", function (event) {
//   console.log("clicked");
//   event.preventDefault();
// });
