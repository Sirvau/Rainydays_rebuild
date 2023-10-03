import {showError} from "./display_message.js"; 





function getJacketTitleFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    return title;
}


function getJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
}

const jacketId = getJacketIdFromQuery();
const jacketTitle = getJacketTitleFromQuery();



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

        const mainContainer = document.querySelector(".product_page");

        const singleJacketContainer = document.createElement("div");
        singleJacketContainer.classList.add("single_jacket_container");

        const image = document.createElement("img");
        image.classList.add("product_detail_image")
        image.src = jacketDetail.image;
        image.alt = jacketDetail.description;

        const titleOfJacket = document.createElement("p");
        titleOfJacket.classList.add("product_name");
        titleOfJacket.innerHTML = `${jacketDetail.title}`;

        const descriptionOfJacket = document.createElement("p");
        descriptionOfJacket.classList.add("product_name");
        descriptionOfJacket.innerHTML = `${jacketDetail.description}`;

        const priceOfJacket = document.createElement("p");
        priceOfJacket.classList.add("product_price");
        priceOfJacket.innerHTML = `<span class="product_price">$${jacketDetail.price}</span>`;
        
        const button = document.createElement("a");
        button.classList.add("button_large")
        button.href = "`/shoppingbag.html;" 
        button.textContent = "Add to bag";

            mainContainer.appendChild(singleJacketContainer);
            singleJacketContainer.appendChild(image);
            singleJacketContainer.appendChild(titleOfJacket);
            singleJacketContainer.appendChild(descriptionOfJacket);
            singleJacketContainer.appendChild(priceOfJacket);
            singleJacketContainer.appendChild(button);

    }
    catch (error) {
        showError(error.message);
    }

}

fetchJacketDetail()