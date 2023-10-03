
import {showError} from "./display_message.js";
import { showLoadingIndicator } from "./display_message.js";


const apiAllProducts = "https://api.noroff.dev/api/v1/rainy-days";



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