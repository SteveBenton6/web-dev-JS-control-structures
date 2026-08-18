// JavaScript Comments

const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  // remainingCharsElement.style.color = "green";
  remainingCharsElement.classList.remove("warning");
  productNameInputElement.classList.remove("warning");

  const enteredText = event.target.value;
  const charsLeft = maxAllowedChars - enteredText.length;
  remainingCharsElement.innerText = charsLeft;

  if (charsLeft <= 10) {
    // remainingCharsElement.style.color = "red";
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
  }
  console.log(charsLeft);
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
