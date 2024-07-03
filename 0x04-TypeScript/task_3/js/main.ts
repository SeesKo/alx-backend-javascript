import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object called row with the type RowElement
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insert row and capture the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with an age field set to 23
const updatedRow: RowElement = {
    ...row,
    age: 23
};

// Call the updateRow command
CRUD.updateRow(newRowID, updatedRow);

// Call the deleteRow command
CRUD.deleteRow(newRowID);
