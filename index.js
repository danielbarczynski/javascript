const title = document.querySelector('#title');
const text = document.querySelector('#text');
const addBtn = document.querySelector('#add');
const rmvBtn = document.querySelector('#remove');
const notes = document.querySelector('#notes');
const notebg = document.querySelector('#notebg');
const pins = document.querySelector('.pin');
console.log(pins); // not catching cuz this is from local storage
getNotes();

function addNote() {
    if (title.value === '' || text.value === '') return;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    const note = document.createElement('div');
    let isPinned = false;
    let noteId = title.value;
    note.id = noteId;
    note.style.display = 'block';
    note.style.padding = '5px';
    note.style.margin = '5px';
    note.style.border = 'solid 1px';
    note.style.backgroundColor = notebg.options[notebg.selectedIndex].textContent;
    notes.appendChild(note);
    note.innerHTML = `
    <b>${noteId} </b> <input class="pin" type="checkbox" isPinned="${isPinned}"/>
     <br /> <br />
     ${text.value}
     <br /> <br />
     ${today}
     `;
    localStorage.setItem(title.value, note.outerHTML);
    refresh();
}
// const noteCheckbox = document.getElementById(noteId);

function handlePin() {
    console.log('clicked');
}
function refresh() {
    title.value = '';
    text.value = '';
}

//* removing by inserting title to the input. updating works the same (for now)
function removeNote() {
    if (title.value === '') return;

    localStorage.removeItem(title.value);
    refresh();
    notes.innerHTML = '';
    getNotes();
}

function getNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        notes.innerHTML += value;
    }
}

addBtn.addEventListener('click', addNote);
rmvBtn.addEventListener('click', removeNote);
console.log(pins.length);
for (let i = 0; i < pins.length; i++) {
    addEventListener('change', () => console.log('hi'));
    console.log('hi');
}