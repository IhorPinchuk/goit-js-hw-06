const categoriesEl = document.querySelector('#categories');

const numberOfCategoriesEl = categoriesEl.querySelectorAll('.item').length;
console.log('Number of categories:', numberOfCategoriesEl);

const categoriesItem = categoriesEl.querySelectorAll('.item');

const itemCategoryElements = categoriesItem.forEach(item => {
  const category = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log('Category:', category);
  console.log('Elements:', elements);
});
