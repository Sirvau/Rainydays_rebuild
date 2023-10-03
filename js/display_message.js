
export function showError(message) {
    const errorContainer = document.getElementById("jackets_container");
    errorContainer.innerHTML = `<h3>Error: ${message}</h3>`; 
}


export function showLoadingIndicator() {
    const loadItemlist = document.getElementById("jackets_container");
    loadItemlist.innerHTML = `<div>Loading...</div>`;
}