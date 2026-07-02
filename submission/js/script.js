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