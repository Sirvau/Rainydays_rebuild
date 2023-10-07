const checkoutButton = document.querySelector("#checkout_button");

checkoutButton.addEventListener("click", () => {
    window.location.href=`/html/checkout.html`;

});

checkoutButton.innerHTML = ("Checkout");

