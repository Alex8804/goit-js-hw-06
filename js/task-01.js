const listWithId = document.querySelector('#categories');

const listItemNumber = listWithId.children.length;
console.log(`Number of categories: ${listItemNumber}`);

const listItems = [...listWithId.children];

listItems.forEach(elements => {
  console.log(`Category: ${elements.firstElementChild.textContent}`);
  console.log(`Elements: ${elements.lastElementChild.children.length}`);
});
