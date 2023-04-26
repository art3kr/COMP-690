async function jsonLoader () {
    return await fetch('./data/employees.json');
}

export { jsonLoader };