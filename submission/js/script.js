console.log("script.js loaded");
    const cars = [
    {
        name: "BYD Atto 3",
        price: "KSh 5,200,000",
        range: "420 km"
    },
    {
        name: "BYD Dolphin",
        price: "KSh 3,900,000",
        range: "405 km"
    },
    {
        name: "BYD Seal",
        price: "KSh 6,800,000",
        range: "570 km"
    }
];

const container = document.getElementById("car-list");
console.log(container);

cars.forEach(car => {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
        <h3>${car.name}</h3>
        <p>${car.price}</p>
        <p>Range: ${car.range}</p>
    `;

    container.appendChild(card);
});
// Task 2 - Wishlist

const input = document.getElementById("wishlistInput");
const addBtn = document.getElementById("addBtn");
const wishlist = document.getElementById("wishlist");

addBtn.addEventListener("click", () => {

    if(input.value.trim() === ""){
        alert("Please enter a BYD model.");
        return;
    }

    const li = document.createElement("li");

    li.textContent = input.value;

    const removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(removeBtn);

    wishlist.appendChild(li);

    input.value = "";

});
// Task 3 - Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const feedback = document.getElementById("feedback");

    if(name === "" || email === ""){

        feedback.textContent = "Please fill in all the fields.";
        feedback.style.color = "red";

    }

    else{

        feedback.textContent =
        `Thank you, ${name}! Your test drive request has been received.`;

        feedback.style.color = "green";

        form.reset();

    }

});
// Task 4 - Dark Mode with localStorage

const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});