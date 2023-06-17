const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const markup = ingredients.map((ingredient) => {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.classList.add('item');
  ingredientsItemRef.textContent = ingredient;
  return ingredientsItemRef;
});

ingredientsRef.append(...markup);