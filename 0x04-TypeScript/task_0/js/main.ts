// 0. Creating an interface for a student

// 1) Define the Student interface with the required fields
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2) Create two students
const student1: Student = {
  firstName: "Hayes",
  lastName: "Smith",
  age: 20,
  location: "Casablanca",
};

const student2: Student = {
  firstName: "Murphy",
  lastName: "Jones",
  age: 22,
  location: "Rabat",
};

// 3) Put them in an array
const studentsList: Student[] = [student1, student2];

// 4) Render a table with firstName and location for each student
function renderStudentsTable(students: Student[]): void {
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = table.createTHead();
  const headerRow: HTMLTableRowElement = thead.insertRow();

  const thFirstName: HTMLTableCellElement = document.createElement("th");
  thFirstName.textContent = "First Name";

  const thLocation: HTMLTableCellElement = document.createElement("th");
  thLocation.textContent = "Location";

  headerRow.appendChild(thFirstName);
  headerRow.appendChild(thLocation);

  const tbody: HTMLTableSectionElement = document.createElement("tbody");

  students.forEach((student: Student): void => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    firstNameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = row.insertCell();
    locationCell.textContent = student.location;
  });

  table.appendChild(tbody);

  // Optional minimal styling to make it readable
  table.setAttribute("border", "1");
  table.style.borderCollapse = "collapse";
  table.style.margin = "16px";
  table.style.minWidth = "240px";
  table.querySelectorAll("th, td").forEach((cell) => {
    (cell as HTMLTableCellElement).style.padding = "6px 10px";
  });

  document.body.appendChild(table);
}

// Ensure the DOM is ready before rendering
document.addEventListener("DOMContentLoaded", () => {
  renderStudentsTable(studentsList);
});
