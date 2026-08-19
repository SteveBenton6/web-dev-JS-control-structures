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

// Fourth Example: Statistics

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollTheDice() {
  console.log("Dice Rolled");
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  console.log("Roll The Dice Button Clicked");
  const userTargetNumberElement = document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");
  const userTargetNumber = userTargetNumberElement.value;

  console.log(`User Target Number: ${userTargetNumber}`);
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollTheDice();
    numberOfRolls++;
    const outputText = `Roll ${numberOfRolls} : ${rolledNumber}`;
    const newRollListElement = document.createElement("li");
    newRollListElement.innerText = outputText;
    diceRollsListElement.append(newRollListElement);

    hasRolledTargetNumber = rolledNumber == userTargetNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number",
  );

  outputTargetNumberElement.innerText = userTargetNumber;
  outputTotalRollsElement.innerText = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
