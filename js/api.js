
import {showError} from "./display_message.js";
import { showLoadingIndicator } from "./display_message.js";


const apiAllProducts = "https://www.siril-vaular.no/wp-json/wc/store/products";



export async function getProducts() {
    showLoadingIndicator();
    try {
        const apiCallResponse = await fetch(apiAllProducts);
        if(!apiCallResponse.ok){
            showError();
            throw new Error("Unfortunately something went wrong");
        }
        const apiCallResult = await apiCallResponse.json();
        return apiCallResult;   
    }   catch (error) {
        throw error;
    }
}