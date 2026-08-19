// JS Comments Format

// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  console.log("JavaScript Calculator Button Clicked");
  const userEnteredNumberElement = document.getElementById("user-number");
  const userEnteredNumber = userEnteredNumberElement.value;
  console.log(`Value: ${userEnteredNumber}`);

  let sumUpToNumberTotal = 0;
  for (let i = 0; i <= userEnteredNumber; i++)
    sumUpToNumberTotal = sumUpToNumberTotal + i;
  console.log(`Sum Up To Number Total: ${sumUpToNumberTotal}`);

  const calculatedSumElement = document.getElementById("calculated-sum");
  calculatedSumElement.innerText = sumUpToNumberTotal;
  calculatedSumElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// Second Example: Highlight Links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button",
);

function highlightLinks() {
  console.log("Highlight Links Button Clicked");
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// Third Example: Your Information

const testUserData = {
  firstName: "Kartel",
  lastName: "Kay",
  age: 36,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  console.log("Display User Data Button Clicked");
  const outputDataElement = document.getElementById("output-user-data");
  outputDataElement.innerHTML = "";

  for (const key in testUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + testUserData[key];
    newUserDataListItemElement.innerText = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);
