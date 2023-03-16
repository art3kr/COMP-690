// GET form from and Task list from the DOM
let form = document.querySelector('form');
let list = document.querySelector('ul');

window.addEventListener('load', (e) => {
    checkMessageDisplay();
})

// ADD Task
form.addEventListener('submit', (e) => {
    // Prevent form submission
    e.preventDefault(); // this will prevent the form from being submitted early

    // GET Value from Text Box
    let newItem = document.querySelector('#item').value;

    // CREATE new li
    let li = document.createElement('li');

    // ADD class to li
    li.className = 'list-group-item'

    // CREATE new text node based on task user added to form
    let text = document.createTextNode(newItem);

    // ADD text to li
    li.appendChild(text);

    // CREATE the delete button
    let deleteBtn = document.createElement('button');
    // ADD BootStrap classes for a button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //CREATE Text node, set it to 'X', and append to delete button
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    li.appendChild(deleteBtn);

    // CLEAR the text box
    document.querySelector('#item').value = '';

    // ADD li to ul
    list.appendChild(li);

    checkMessageDisplay();    
})

list.addEventListener('click', (e) => {
    if ( e.target.classList.contains('delete') ) {
        if (confirm(`Are you sure you want to delete the ${e.target.parentElement.innerText} task?`)) {
            list.removeChild(e.target.parentElement);
            checkMessageDisplay();
        }
    }
})

function checkMessageDisplay() {
    if (list.children.length == 0) {
        document.querySelector('span').classList.add('show');
    } else {
        document.querySelector('span').classList.remove('show');
    }
}