const title = document.querySelector('#title');
const text = document.querySelector('#text');
const addBtn = document.querySelector('#add');
const notes = document.querySelector('#notes');

getItems();

function addNote() {
    if (title.value === '' || text.value === '') return;
    localStorage.setItem(title.value, text.value);
    title.value = '';
    text.value = '';
    notes.innerHTML = '';
    getItems();
}

function getItems() {
    for (let i = 0; i < localStorage.length; i++) { 
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        notes.innerHTML += `Title: ${key} <br /> ${value}<br /><br />`
    }
}

addBtn.addEventListener('click', addNote);