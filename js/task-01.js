const listWithId = document.querySelector('#categories');
const listItemNumber = listWithId.children.length;
console.log(`Number of categories: ${listItemNumber}`);

const listItem = listWithId.children;
const listItemArray = Array.from(listItem);

listItemArray.forEach(elements => {
  console.log(`Category: ${elements.firstElementChild.textContent}`);
  console.dir(`Elements: ${elements.lastElementChild.children.length}`);
});
