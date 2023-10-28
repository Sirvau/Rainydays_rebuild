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
        image.src = jacket.images[0].src;
        image.alt = jacket.short_description;

        const jacketTitle = document.createElement("h2");
        jacketTitle.classList.add("product_name");
        jacketTitle.innerHTML = `${jacket.name}`

        const jacketPrice = document.createElement("p");
        jacketPrice.classList.add("product_price");

        jacketPrice.innerHTML = `<span class="product_price">$  ${jacket.prices.price}</span>`;

        const jacketDetails = document.createElement("a");
        jacketDetails.classList.add("jacketDetails");
        jacketDetails.addEventListener("click", () => {
        window.location.href = `../html/product_details.html?id=${jacket.id}&title=${jacket.name}`;            
        });

        if (jacket.on_sale) {
            jacketPrice.innerHTML = `<span class="jacketSale">$ ${jacket.prices.sale_price} </span><span class="product_price on_sale">$ ${jacket.prices.regular_price} </span>`;
            }

            
            const button = document.createElement("button");
            button.classList.add("button");
            button.classList.add("small");

            const buttonLink = document.createElement("a");
            buttonLink.classList.add("button_link");
            buttonLink.href = `../html/product_details.html?id=${jacket.id}&title=${jacket.name}`; 
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