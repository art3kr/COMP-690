async function jsonLoader () {
    return await fetch('http://localhost:3000/data/employees.json');
}