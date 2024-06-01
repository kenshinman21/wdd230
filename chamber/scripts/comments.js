document.addEventListener('DOMContentLoaded', function() {
    const commentsList = document.getElementById('comments-list');
    const commentBox = document.getElementById('comment-box');
    const saveButton = document.getElementById('save-comment');

    // Load any saved comments from local storage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments') || '[]');
        commentsList.innerHTML = '';
        comments.forEach((comment, index) => {
            appendComment(comment, index);
        });
    }

    function appendComment(comment, index) {
        const li = document.createElement('li');
        li.textContent = comment;
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        editBtn.onclick = () => editComment(index, li);
        deleteBtn.onclick = () => deleteComment(index);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        commentsList.appendChild(li);
    }

    function addComment() {
        const newComment = commentBox.value;
        if (newComment.trim() !== '') {
            const comments = JSON.parse(localStorage.getItem('comments') || '[]');
            comments.push(newComment);
            localStorage.setItem('comments', JSON.stringify(comments));
            appendComment(newComment, comments.length - 1);
            commentBox.value = ''; // Clear input box after adding
        }
    }

    function editComment(index, li) {
        const newText = prompt("Edit your comment:", li.textContent.replace('EditDelete', '').trim());
        if (newText !== null) {
            const comments = JSON.parse(localStorage.getItem('comments'));
            comments[index] = newText;
            localStorage.setItem('comments', JSON.stringify(comments));
            li.firstChild.textContent = newText; // Update the text in the li
        }
    }

    function deleteComment(index) {
        const comments = JSON.parse(localStorage.getItem('comments'));
        comments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments(); // Reload comments
    }

    saveButton.addEventListener('click', addComment);
    loadComments(); // Initial loading of comments
});