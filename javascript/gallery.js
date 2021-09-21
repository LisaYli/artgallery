window.addEventListener("DOMContentLoaded", function (e) {
    const orderButtons = document.querySelectorAll("button[data-order]");
    orderButtons.forEach(function (button) {

        button.addEventListener("click", function (e) {
            //button is assigned with window object, should be assigned clicked button
            const container = this.parentNode;

            const order = {
                id: this.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
            };
            localStorage.setItem("order", JSON.stringify(order));

            const url = window.location.href.replace("gallery.html", "order.html");
            window.location.href = url;

        });


    });
});