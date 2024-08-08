// Initialize your data structure
let Daten = {
  F1: "F F J",
  F2: "F F J",
  F3: "P25 F J",
  F4: "P5 F J",
  F5: "kein Gehalt",
  F6: "F F J",
  F7: "F F J",
  F8: "P15 F J",
  F9: "F F J",
  F10: "F F J",

  E1: 50,
  E2: 20,
  E3: 50,
  E4: 108.5,
  E5: 21,
  E6: 40,
  E7: 16,
  E8: "indiv.",
  E9: "indiv.",
  E10: "indiv.",

  C1: "Sachbezug",
  C2: "Handy",
  C3: "Internet",
  C4: "CleverLunch",
  C5: "Werbung",
  C6: "Garage",
  C7: "Fehlgeld",
  C8: "Fahrkosten",
  C9: "Kindergarten",
  C10: "Verpflegungsmehraufwand",
};

function userForm3() {
  // Update checkboxes
  for (let i = 1; i <= 10; i++) {
    let checkbox = document.getElementById(`CheckBox${i}`);
    checkbox.checked = true;
    checkbox.value = Daten[`C${i}`];
  }

  // Update labels
  for (let i = 1; i <= 10; i++) {
    let label = document.getElementById(`Label${i}`);
    if (label) {
      label.textContent = `${Daten[`F${i}`]}, max: ${Daten[`E${i}`]} €`;
    }
  }
}

// Call the function to update the form
userForm3();
