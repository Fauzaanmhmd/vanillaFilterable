// Get input element
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);
function filterNames() {
    console.log(1);
    // Get value of input
    let filterValue =
        document.getElementsById('filterInput').value.toUpperCase();

    // Get names ul
    let ul = document.getElementById('names');
    // Get list from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection-item list
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        // If matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

}
