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

        const response = await fetch(`https://www.siril-vaular.no/wp-json/wc/store/products/${jacketId}`);
        
        if(!response.ok) {
            throw new Error("Unfortunately an error occured when loading the jacket");
        }
        const jacketDetail = await response.json();



        const productDetailImage = document.querySelector(".product_detail_image");
        productDetailImage.src = jacketDetail.images[0].src;
        productDetailImage.alt = jacketDetail.short_description;

        const titleOfJacket = document.querySelector(".product_name");
        titleOfJacket.innerHTML = `${jacketDetail.name}`;

        const descriptionOfJacket = document.querySelector(".product_description");
        descriptionOfJacket.innerHTML = `${jacketDetail.description}`;

        const priceOfJacket = document.querySelector(".product_price");
        priceOfJacket.innerHTML = `<span class="product_price">$  ${jacketDetail.prices.price}</span>`;

        const sizesArray = jacketDetail.sizes;
        const selectElement = document.getElementById("select_size");
        sizesArray.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        selectElement.appendChild(option);
})
       
    }
    catch (error) {
        showError(error.message);
    }

}

fetchJacketDetail()


const button = document.querySelector(".add_to_bag");
button.classList.add="add_to_bag button";
button.href = "/html/shoppingbag;"
button.textContent = "Add to bag";

button.addEventListener("click", () => {
    window.location.href="/html/shoppingbag";
});



