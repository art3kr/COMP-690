// Import init.js module
import { jsonLoader } from './modules/init.js';

// Get json data object from json file
let employeesJSON = await jsonLoader();
let employees = await employeesJSON.json();
employees = employees['employees'];


// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employees)

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
            empCount.value = `(${Number(empCount.value.slice(1, -1)) - 1})`;
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid(objEmployees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee in objEmployees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employees[employee]['id']}</td>
            <td>${employees[employee]['name']}</td>
            <td>${employees[employee]['extension']}</td>
            <td><a href="mailto:${employees[employee]['email']}">${employees[employee]['email']}</a></td>
            <td>${employees[employee]['department']}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${Object.keys(objEmployees).length})`
}