function MenuProjects_Click() {
  let i;
  let zzzz = 38;
  let ausblenden;
  let dateiname;

  let app = {
    progressBar1: document.getElementById("ProgressBar1"),
  };

  app.progressBar1.value = 10;
  app.progressBar1.style.display = "block";
  for (let i = 0; i < data.length; i++) {
    data[i]["AF7:AG507"].clearRange;
    data[i]["AL7:BV507"].clearRange;
    data[i]["AD7:AD507"].clearRange;
    data[i]["BZ7:BZ507"].clearRange;
    data[i]["CC7:CC507"].clearRange;
    data[i]["E3:E4"].clearRange;
    data[i]["O3:O4"].clearRange;
  }

  // Clear contents in specified ranges

  for (let i = 0; i < Daten2.length; i++) {
    let ausblenden = Daten2[i][16]; // Access the 16th column (index 15) of the i-th row

    // Assuming data[i] refers to a row in "Liste AN Bausteine"
    if (data[i][zzzz] === 0) {
      // Check if the value at row i and column zzzz is 0
      hideColumn(ausblenden); // Function to hide the specified column based on ausblenden
    }
    zzzz++;
  }

  // Hide the specified column
  hideColumn(data[i], "U:U") === 1;
}
