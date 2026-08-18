// JavaScript Comments

const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  // remainingCharsElement.style.color = "green";

  const enteredText = event.target.value;
  const charsLeft = maxAllowedChars - enteredText.length;
  remainingCharsElement.innerText = charsLeft;

  if (charsLeft === 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (charsLeft <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
