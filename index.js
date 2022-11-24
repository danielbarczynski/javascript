const title = document.querySelector('#title'); 
const text = document.querySelector('#text');
const addBtn = document.querySelector('#add');
const notes = document.querySelector('#notes');

function addNote() {
    localStorage.setItem(title.value, text.value);
    title.value = '';
    text.value = '';
}

notes.innerHTML = `${localStorage.getItem('daniel')}`
addBtn.addEventListener('click', addNote);