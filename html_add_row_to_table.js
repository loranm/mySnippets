var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

// Insert a row in the table at the last row
var newRow   = tableRef.insertRow(tableRef.rows.length);

// Insert a cell in the row at index 0
var newCell  = newRow.insertCell(0);

// Append a text node to the cell
var newText  = document.createTextNode('New row');
newCell.appendChild(newText);
