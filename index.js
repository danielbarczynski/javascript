const title = document.querySelector('#title');
const text = document.querySelector('#text');
const addBtn = document.querySelector('#add');
const rmvBtn = document.querySelector('#remove');
const notes = document.querySelector('#notes');
const notebg = document.querySelector('#notebg');
getItems();

function addNote() {
    if (title.value === '' || text.value === '') return;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    const color = notebg.options[notebg.selectedIndex].textContent;
    
    today = mm + '/' + dd + '/' + yyyy;
    localStorage.setItem(title.value, text.value + '<br /><br />' + today);
    refresh();
    getItems();
}

function refresh() {
    title.value = '';
    text.value = '';
    notes.innerHTML = '';
}

//* removing by inserting title to the input. updating works the same (for now)
function removeNote() {
    if (title.value === '') return;

    localStorage.removeItem(title.value);
    refresh();
    getItems();
}

function getItems() {
    for (let i = 0; i < localStorage.length; i++) { 
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const note = document.createElement('div');

        note.style.display = 'block';
        note.style.padding = '5px';
        note.style.margin = '5px';
        note.style.border = 'solid 1px';
        note.style.backgroundColor = notebg.options[notebg.selectedIndex].textContent;
        notes.appendChild(note);
        note.innerHTML = `<b>${key} </b> <br /> <br />${value}`;
    }
}

addBtn.addEventListener('click', addNote);
rmvBtn.addEventListener('click', removeNote);