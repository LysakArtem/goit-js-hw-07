const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulIngredients = document.querySelector('#ingredients');
let arrayLiNodes = [];
  ingredients.forEach(ingredient => {
    const newElementLi = document.createElement('li');
    newElementLi.textContent = ingredient;
    arrayLiNodes.push(newElementLi);
    return arrayLiNodes;
  })
ulIngredients.append(...arrayLiNodes);
