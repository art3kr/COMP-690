// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [17,'Antonio Trani',1234,'antonio@antonio.com','Executive'],
    [23,'Lebron James',5678,'lebron@basketball.hoop','Administrative'],
    [6,'Mia Hamm',1246,'mia@hamm.sandwich','Engineering'],
    [12,'Tom Brady',3579,'cheating@deflate.balls','Sales'],
    [9,'Lamar Jackson',1904,'takethecash@please.man','Marketing']
];

// Function to create delete button
let createDeleteButton = function() {
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    return deleteBtn;
}

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let storage = JSON.parse(localStorage.getItem('employees')) || '';
if (storage.length > 0) {
    employees = storage;
}

// GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id);
}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let table = $('empTable');
let form = $('addForm');
let empCount = $('empCount');
buildGrid();


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension = $('extension').value;
    let email = $('email').value;
    let department = $('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let addedEmployee = [id,name,extension,email,department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(addedEmployee)

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    $('id').value = '';
    $('name').value = '';
    $('extension').value = '';
    $('email').value = '';
    $('department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (confirm(`Are you sure you want to delete this row?`)) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let delIndex = e.target.parentNode.rowIndex;
        table.deleteRow(delIndex);

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(delIndex-1, 1);

        // BUILD THE GRID
        buildGrid();
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    table.removeChild(table.getElementsByTagName("tbody")[0])

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    
    for (employee of employees) {
        let tr = document.createElement('tr');
        let row = '';
        for (item of employee) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(`${item}`));
            tr.appendChild(td);
        }
        tr.appendChild(createDeleteButton()); //append delete button
        tbody.appendChild(tr);
    }
   

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    empCount.value = '(' + employees.length + ')';

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees',JSON.stringify(employees));
};
