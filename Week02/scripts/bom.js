const input = document.getElementById('favchap');
const addButton = document.getElementById('addBtn');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
    const inputVal = input.value.trim();
    if (!inputVal) {
        alert("Please enter a book and chapter.");
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.textContent = inputVal;
    li.appendChild(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    input.value = '';
    input.focus();
});