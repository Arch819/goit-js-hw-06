const categoriesRef = document.querySelector('#categories');
const categoriesArr = categoriesRef.children;
console.log(`Number of categories: ${categoriesArr.length}`);

[...categoriesArr].forEach((li) => {
    const itemTitle = li.firstElementChild;
    const itemElementsArr = li.lastElementChild.children;
    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemElementsArr.length}`);
});

