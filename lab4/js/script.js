// Global variables
let customerType;
let invoiceTotal;
let discountPercent;
let discountAmount;
let newInvoiceTotal;

// Display welcome message to user
document.write('<h3>Welcome to the Invoice Application</h3>');

// Check customer type
customerType = prompt('What kind of customer are you? (w/r)');
// Collect the invoice total
invoiceTotal = parseFloat(prompt('Enter the invoice total'));

// Check to see if customer is retail or wholesale customer
if (customerType === 'r') {
    // Check invoice total and set discount percent
    if (invoiceTotal >= 500) {
        discountPercent = 0.25;
    } else if (invoiceTotal > 250 && invoiceTotal < 500) {
        discountPercent = 0.10;
    } else {
        discountPercent = 0;
    }
} else if (customerType === 'w') {
    if (invoiceTotal >= 1000) {
        discountPercent = 0.30;
    } else if (invoiceTotal > 500 && invoiceTotal < 1000) {
        discountPercent = 0.20;
    } else {
        discountPercent = 0;
    }
} else {
    discountPercent = 0;
}

// Perform calculations
discountAmount = invoiceTotal * discountPercent;
newInvoiceTotal = invoiceTotal - discountAmount;

// Display results
if (customerType === 'r') {
    document.write('Retail Customer<br>');
} else if (customerType === 'w') {
    document.write('Wholesale Customer<br>');
} else {
    document.write('You are an idiot who does not follow directions');
}
document.write(`Invoice Total: $${invoiceTotal.toFixed(2)}<br>`);
document.write(`Discount Percent: ${discountPercent * 100}%<br>`);
document.write(`Discount Amount: $${discountAmount.toFixed(2)}<br>`);
document.write(`Grand Total: $${newInvoiceTotal.toFixed(2)}<br>`);