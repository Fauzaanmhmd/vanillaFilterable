// Get input element
let filterInput = document.getElementById('filterInput');



// Add event listener
filterInput.addEventListener('keyup', filterNames);
function filterNames() {
    // Get value of input
    let filterValue =
    document.getElementsById('filterInput').value.toUpperCase();

    let names = document.getElementById('names');
    // Get items
}
