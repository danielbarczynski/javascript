const title = document.querySelector('#title');
const text = document.querySelector('#text');
const addBtn = document.querySelector('#add');
const rmvBtn = document.querySelector('#remove');
const notes = document.querySelector('#notes');
const pinnedNotes = document.querySelector('#pinnedNotes');
const notebg = document.querySelector('#notebg');
const pin = document.querySelector('#pin');
const items = { ...localStorage };

for (x in items) {
    if (document.getElementById(x) !== null){
    document.getElementById(x).addEventListener('click', () => {
        localStorage.removeItem();
    });
}
    // console.log(document.getElementById(x));
}

getNotes();

function addNote() {
    if (title.value === '' || text.value === '') return;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    const note = document.createElement('div');
    let noteId = title.value;
    note.id = noteId;
    note.setAttribute('ispinned', false);
    note.style.display = 'block';
    note.style.padding = '5px';
    note.style.margin = '5px';
    note.style.border = 'solid 1px';
    note.style.backgroundColor = notebg.options[notebg.selectedIndex].textContent;
    notes.appendChild(note);
    note.innerHTML = `
    <b>${noteId} </b> <input class="pin" type="checkbox"/>
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
        // for (x in items) {
        //     let note = document.getElementById(x);
        //     if (note !== null && note.getAttribute('ispinned') === true)
        //         pinnedNotes.innerHTML += note.outerHTML;
        // }
        // const note = document.getElementById(key); // of course id doesn't work, jesus christ
        // if (note.getAttribute('ispinned') === true)
    }
}

function pinNote() {
    if (title.value === '') return;
    console.log('cl');
    const note = document.getElementById(title.value);
    console.log(note.outerHTML);
    note.setAttribute('ispinned', true);
    // pinnedNotes.appendChild('div');
    pinnedNotes.innerHTML += note.outerHTML;
    // refresh();
    // notes.innerHTML = '';
    // getNotes();
}
  for (x in items) {
            let note = document.getElementById(x);
            console.log(note);
        }
addBtn.addEventListener('click', addNote);
rmvBtn.addEventListener('click', removeNote);
pin.addEventListener('click', pinNote);

