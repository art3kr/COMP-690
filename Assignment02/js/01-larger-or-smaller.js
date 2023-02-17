let int1;
let int2;

int1 = prompt("Enter an integer");
int2 = prompt("Enter another integer");

if (int1 > int2) {
    alert(int1 + " is larger");
} else if (int2 > int1) {
    alert(int2 + " is larger");
} else {
    alert("The numbers are equal. Numbers were both " + int1)
}
