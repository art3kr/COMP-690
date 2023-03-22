// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('form');
let table = document.querySelector('table');
let empCount = document.querySelector('#empCount');
empCount.style.color = 'gray';

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
empCount.value = '(' + employeeCount + ')';

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let newID = document.querySelector('#id').value;
    let newName = document.querySelector('#name').value;
    let newExtension = document.querySelector('#extension').value;
    let newEmail = document.querySelector('#email').value;
    let newDepartment = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    row.className = 'table-group-item';
    row.id

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    // AND APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let idCell = row.insertCell();
    let idCellText = document.createTextNode(newID);
    idCell.appendChild(idCellText);
    row.appendChild(idCell);

    let nameCell = row.insertCell();
    let nameCellText = document.createTextNode(newName);
    nameCell.appendChild(nameCellText);
    row.appendChild(nameCell);

    let extensionCell = row.insertCell();
    let extensionCellText = document.createTextNode(newExtension);
    extensionCell.appendChild(extensionCellText);
    row.appendChild(extensionCell);

    let emailCell = row.insertCell();
    let emailCellText = document.createTextNode(newEmail);
    emailCell.appendChild(emailCellText);
    row.appendChild(emailCell);

    let departmentCell = row.insertCell();
    let departmentCellText = document.createTextNode(newDepartment);
    departmentCell.appendChild(departmentCellText);
    row.appendChild(departmentCell);

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    row.appendChild(deleteBtn);

    // ADD ELEMENT TO TABLE
    table.appendChild(row);

    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value= '';

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount += 1;
    empCount.value = '(' + employeeCount + ')';

})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (confirm(`Are you sure you want to delete this row?`)) {
        table.deleteRow(e.target.parentNode.rowIndex);
        employeeCount -= 1;
        empCount.value = '(' + employeeCount + ')';
    }
})