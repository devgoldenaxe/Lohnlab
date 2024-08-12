function leeren(data) {
    let Daten2 = [];
    {
        for (let i = 0; i < data.length; i++) {
            data[i]["AF7:AG507"].clearRange();
            data[i]["AL7:BV507"].clearRange();
            data[i]["AD7:AD507"].clearRange();
            data[i]["BZ7:BZ507"].clearRange();
            data[i]["CC7:CC507"].clearRange();
            data[i]["E3:E4"].clearRange();
            data[i]["O3:O4"].clearRange();
        }

        let zzzz = 38;

        for (let i = 0; i < 37; i++) {
            if (Daten2[i] && Daten2[i].length > 15) {
                let ausblenden = Daten2[i][15];
                if (data[5] && data[5][zzzz - 1] === 0) {
                    // Hide columns based on ausblenden value
                    // Example assumes columns are represented by names in ausblenden
                    for (let row = 0; row < data.length; row++) {
                        data[row][zzzz - 1].hidden = true; // Adjusted for 0-based index
                    }
                }
            }
            zzzz++;
        }

        // Hide column "U" (index 20, as JavaScript is 0-based)
        for (let row = 0; row < data.length; row++) {
            if (data[row][20]) {
                data[row][20].hidden = true;
            }
        }
    }
    return data;
}
// Run the function to see the outputs
leeren();
