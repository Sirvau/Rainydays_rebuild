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
        const singleJacketContainer = document.querySelector(".single_jacket_container");


        const productDetailImage = document.querySelector(".product_detail_image");
        productDetailImage.src = jacketDetail.image;
        productDetailImage.alt = jacketDetail.description;

        const titleOfJacket = document.querySelector(".product_name");
        titleOfJacket.innerHTML = `${jacketDetail.title}`;

        const descriptionOfJacket = document.querySelector(".product_description");
        descriptionOfJacket.innerHTML = `${jacketDetail.description}`;

        const priceOfJacket = document.querySelector(".product_price");
        priceOfJacket.innerHTML = `<span class="product_price">$${jacketDetail.price}</span>`;

       
        const button = document.querySelector(".add_to_bag");
        button.href = "`/html/shoppingbag.html;" 
        button.textContent = "Add to bag";

        button.addEventListener("click", () => {
            window.location.href=`/html/shoppingbag.html`;
        });
        

            mainContainer.appendChild(singleJacketContainer);
            singleJacketContainer.appendChild(productDetailImage);
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


