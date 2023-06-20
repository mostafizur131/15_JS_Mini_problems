function createListItem() {
  const ul = document.querySelector("ul");

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;

    ul.appendChild(li);
  }
}

createListItem();
