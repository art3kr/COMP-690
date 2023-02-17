let grade = prompt('What grade did you get?');

if (grade > 100 || grade < 1) {
    alert('grades must be between 1 and 100');
} else {
    if (grade >= 90) {
        alert('You received an A');
    } else if (grade < 90 && grade >= 80) {
        alert('You received a B');
    } else if (grade < 80 && grade >= 70) {
        alert('You received a C');
    } else if (grade < 70 && grade >= 60) {
        alert('You received a D');
    } else {
        alert('You received an F')
    }
}