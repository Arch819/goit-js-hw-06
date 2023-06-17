const categoriesRef = document.querySelector('#categories');
const categoriesArr = categoriesRef.children;
console.log(`Number of categories: ${categoriesArr.length}`);

[...categoriesArr].forEach((li) => {
    const itemTitle = li.children[0];
    const itemElementsArr = li.children[1].children;
    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemElementsArr.length}`);
});

