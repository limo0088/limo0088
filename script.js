const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let filterInput = "";

checkBtn.addEventListener("click", () => {
    if (!filterInput) {
        return; // Filtered input is not yet defined
    }
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if (filterInput !== reverseInput) {
        infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    } else {
        infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a Palindrome!`;
    }
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        checkBtn.classList.add("active");
    } else {
        infoTxt.style.display = "none";
        checkBtn.classList.remove("active");
    }
});