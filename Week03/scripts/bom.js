function getChapterList() {
    const storedChapters = localStorage.getItem('chapters');
    return storedChapters ? JSON.parse(storedChapters) : [];
}
function setChapterList(chaptersArray) {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.textContent = item;
    li.appendChild(deleteButton);
    list.appendChild(li);

    // Event listener to handle delete operation
    deleteButton.addEventListener('click', () => {
        deleteChapter(item + '❌'); // Appending '❌' to ensure exact match for deletion
    });
}
function deleteChapter(chapter) {
    // Remove the '❌' and any trailing space
    chapter = chapter.slice(0, -1).trim();
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(chaptersArray);
    // Refresh the displayed list
    list.innerHTML = '';
    chaptersArray.forEach(displayList);
}

let chaptersArray = getChapterList();
chaptersArray.forEach(displayList);

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

    displayList(inputVal);
    chaptersArray.push(inputVal);
    setChapterList(chaptersArray);
    input.value = '';
    input.focus();
});