const ctaButton = document.querySelector(".cta_button");

ctaButton.addEventListener("click", () => {
    window.location.href=`html/product_list.html`;

});

ctaButton.innerHTML = ("View Jackets");