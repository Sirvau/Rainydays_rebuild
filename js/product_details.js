import {showError} from "./display_message.js"; 



function getJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
}

const jacketId = getJacketIdFromQuery();




async function fetchJacketDetail() {
   

    if (!jacketId) {
        throw showError();

    }

    try { 

        const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
        
        if(!response.ok) {
            throw new Error("Unfortunately an error occured when loading the jacket");
        }
        const jacketDetail = await response.json();



        const productDetailImage = document.querySelector(".product_detail_image");
        productDetailImage.src = jacketDetail.image;
        productDetailImage.alt = jacketDetail.description;

        const titleOfJacket = document.querySelector(".product_name");
        titleOfJacket.innerHTML = `${jacketDetail.title}`;

        const descriptionOfJacket = document.querySelector(".product_description");
        descriptionOfJacket.innerHTML = `${jacketDetail.description}`;

        const priceOfJacket = document.querySelector(".product_price");
        priceOfJacket.innerHTML = `<span class="product_price">$  ${jacketDetail.price}</span>`;

        const sizesArray = jacketDetail.sizes;
        const selectElement = document.getElementById("select_size");
        sizesArray.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        selectElement.appendChild(option);
})
        const button = document.querySelector(".add_to_bag");
        button.href = "/html/shoppingbag.html;"
        button.textContent = "Add to bag";

        button.addEventListener("click", () => {
            window.location.href="/html/shoppingbag.html";
        });

    }
    catch (error) {
        showError(error.message);
    }

}

fetchJacketDetail()


