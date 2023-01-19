//? deleting or pinning by checkbox 
//? change innerhtml to appendchild

const title = document.querySelector('#title');
const text = document.querySelector('#text');
const addBtn = document.querySelector('#add');
const rmvBtn = document.querySelector('#remove');
const notes = document.querySelector('#notes');
const pinnedNotes = document.querySelector('#pinnedNotes');
const notebg = document.querySelector('#notebg');
const pin = document.querySelector('#pin');
const unpin = document.querySelector('#unpin');
const items = { ...localStorage };
const weather = {
    apiKey: "e41377c798473de5cae831a5c0882c7e",
    fetchWeather: function(city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${weather.apiKey}`)
        .then(response => response.json())
        .then(data => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        notes.innerHTML = `
            Miasto: ${name} ${icon} 
            Description: ${description} 
            Temperature: ${temp} 
            Wilgotność: ${humidity}
        `;
    }
}

getNotes();

function getNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        notes.innerHTML += value;
    }

    for (x in items) {
        let item = document.getElementById(x);

        if (item && item.dataset.pin.includes(true)) {
            pinnedNotes.appendChild(item);
        }
    }
}

function addNote() {
    if (title.value === '' || text.value === '') return;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    const note = document.createElement('div');
    let noteId = title.value;

    note.setAttribute('data-pin', false);
    note.id = noteId;
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
    getNotes();
}

//* removing by inserting title to the input. updating and pinning works the same
function removeNote() {
    if (title.value === '') return;

    localStorage.removeItem(title.value);
    refresh();
    getNotes();
}

function pinNote() {
    if (title.value === '') return;

    const note = document.getElementById(title.value);
    note.setAttribute('data-pin', true);
    localStorage.setItem(title.value, note.outerHTML);
    refresh();
    getNotes();
}

function unpinNote() {
    if (title.value === '') return;

    const note = document.getElementById(title.value);
    note.setAttribute('data-pin', false);
    localStorage.setItem(title.value, note.outerHTML);
    refresh();
    getNotes();
}

function refresh() {
    title.value = '';
    text.value = '';
    notes.innerHTML = '';
    pinnedNotes.innerHTML = '';
}

addBtn.addEventListener('click', addNote);
rmvBtn.addEventListener('click', removeNote);
pin.addEventListener('click', pinNote);
unpin.addEventListener('click', unpinNote);