
const allCategories = document.querySelectorAll('.item');
const countOfCatigories = allCategories.length;
console.log(`В списке ${countOfCatigories} категории.`);

const allCategoriesArray = Array.from(allCategories);

allCategoriesArray.forEach(item =>{
 const countOfItem = item.querySelectorAll('li').length;
 console.log('Категория: ',item.querySelector('h2').textContent);
 console.log('Количество элементов: ', countOfItem);
 console.log("");
})
