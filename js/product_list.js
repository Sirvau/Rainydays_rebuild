import { getProducts } from "./api.js";
import { showError } from "./display_message.js";



//Display jackets and information on site


async function displayProducts(){
    try {
    const jacketsInfo = await getProducts();
    const jacketsContainer = document.getElementById("jackets_container");
    jacketsContainer.innerHTML = "";

    
    for (let i = 0; i < jacketsInfo.length; i++) {
        const jacket = jacketsInfo[i];
        
        const jacketDiv = document.createElement("div");
        jacketDiv.classList.add("jacket"); 

        const image = document.createElement("img");
        image.classList.add("product_image");
        image.src = jacket.image;
        image.alt = jacket.description;

        const jacketTitle = document.createElement("p");
        jacketTitle.classList.add("product_name");
        jacketTitle.innerHTML = `${jacket.title}`

        const jacketPrice = document.createElement("p");
        jacketPrice.classList.add("product_price");

        jacketPrice.innerHTML = `<span class="product_price">$${jacket.price}</span>`;

        const jacketDetails = document.createElement("a");
        jacketDetails.classList.add("jacketDetails");
        jacketDetails.addEventListener("click", () => {
        window.location.href = `product_details.html?id=${jacket.id}&title=${jacket.title}`;            
        });

        if (jacket.onSale) {
            jacketPrice.innerHTML = `<span class="jacketSale">${jacket.discountedPrice} </span><span class="product_price on_sale">${jacket.price} </span>`;
            }

            
            const button = document.createElement("button");
            button.classList.add("button");
            button.classList.add("small");

            const buttonLink = document.createElement("a");
            buttonLink.classList.add("button_link");
            buttonLink.href = `../html/product_details.html?id=${jacket.id}&title=${jacket.title}`; 
            buttonLink.textContent = "View";

            jacketsContainer.appendChild(jacketDiv);

            jacketDiv.appendChild(jacketDetails);
            jacketDiv.appendChild(image);
            jacketDiv.appendChild(jacketTitle)
            jacketDiv.appendChild(jacketPrice);
            jacketDiv.appendChild(button);

            button.appendChild(buttonLink);
        }
    }   catch (error) {
        showError();
    
    }

}


displayProducts();