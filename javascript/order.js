window.addEventListener("DOMContentLoaded", function (e) {
    const order = localStorage.getItem("order");
    if (order) {
        const artOrder = JSON.parse(order);
        const orderInput = document.querySelector("#art-order");
        orderInput.value = order;
        console.log(orderInput);
        const art = document.querySelector(".art");

        const title = art.querySelector(".title");
        const price = art.querySelector(".price");
        const desc = art.querySelector(".desc");

        title.innerText = artOrder.title;
        price.innerText = artOrder.price;
        desc.innerText = artOrder.desc;

        <!-- för att få rätta imagen -->
        const img = art.querySelector("img");
        img.setAttribute("src", `img/${artOrder.id}.jpg`);
        img.setAttribute("alt", artOrder.title);
    }
});