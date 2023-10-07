const sendButton = document.querySelector(".send_button");

sendButton.addEventListener("click", () => {
    window.location.href=`/html/send_success.html`;

});

sendButton.innerHTML = ("Send");

