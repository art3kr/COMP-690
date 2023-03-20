window.addEventListener('load', () => {
    const $ = (id) => {
        return document.getElementById(id);
    };

    $('empForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // USE THE HELPER FUNCTION
        console.log(`ID: ${$('id').value}`);
        // NOT USING HELPER FUNCTION
        // console.log(`ID: ${document.getElementById('id').value}`);
        // SETTING VARIABLE / NOT USING HELPER FUNCTION
        // let id = document.getElementById('id').value;
        // console.log(`ID: ${id}`);
        console.log(`Name: ${$('name').value}`);
        console.log(`Extension: ${$('extension').value}`);
        console.log(`Email: ${$('email').value}`);
        console.log(`Department: ${$('department').value}`);
    });
});