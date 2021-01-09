// Advice array
const advice = ["Walcz!", "Przemyśl to jeszcze raz..."];

// 'Add' & 'reset' variables
const input = document.querySelector(`input`);
const addBtn = document.querySelector(`.add`);
const cleanBtn = document.querySelector(`.clean`);

// 'Add' function
const addAdvice = (e) => {
  e.preventDefault();

  if (input.value.length) {
    for (const adv of advice) {
      if (adv === input.value) {
        alert("To już jest!");
        return;
      }
    }

    advice.push(input.value);
    alert(`Dodana została opcja: ${input.value}`);
    input.value = "";
  } else {
    alert("Musisz coś wpisać...");
  }

  console.log(advice);
};

// 'Add' listener
addBtn.addEventListener(`click`, addAdvice);

// 'Reset' function
const cleanAdvice = (e) => {
  e.preventDefault();
  advice.length = 0;
  alert("Wszystkie opcje zostały usunięte.");
};

// 'Reset' listener
cleanBtn.addEventListener(`click`, cleanAdvice);

// 'Show' & 'options' variables
const showAdviceBtn = document.querySelector(`.showAdvice`);
const showOptionsBtn = document.querySelector(`.showOptions`);
const h1 = document.querySelector(`h1`);

// 'Show' function
const showAdvice = () => {
  const random = Math.floor(Math.random() * advice.length);
  h1.textContent = advice[random];
};

// 'Show' listener
showAdviceBtn.addEventListener(`click`, showAdvice);

// 'Options' function
const showOptions = () => {
  alert(advice.join(" --- --- "));
};

// 'Options' listener
showOptionsBtn.addEventListener(`click`, showOptions);
