async function jsonLoader () {
    return await fetch('http://localhost:5500/data/employees.json');
}

export { jsonLoader };