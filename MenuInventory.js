let data = [
  {
    "AN PersNr": "1",
    "AN Nachname": "Nicole",
    "brutto Gehalt": 3500,
    Steuerklasse: 1,
    Uberstunden: 0,
    AB: "nein",
    AC: " ",
    AD: 0,
    AE: "brutto",
    AF: 0,
    AG: 0,
    AL: -50,
    AM: 0,
    AN: 9,
    AO: 0,
    AP: 0,
    AQ: 0,
    AR: 40,
    AS: 0,
    AT: 9.19,
    AU: 0,
    AX: 0,
    BC: 0,
    BD: 0,
    BG: 0,
    BH: 0,
    BI: 0,
    BJ: 0,
    BK: 0,
    BL: 0,
    BM: 50,
    BN: 0,
    BO: 0,
    BP: 0,
    BQ: 0,
    BR: 0,
    BS: 0,
    BT: 0,
    BU: 0,
    BV: 0,
    BW: 0,
    CC: 110.25,
    CD: 22,
    CE: 0,
    Q: 1.06,
    R: 1,
    S: "ja",
    T: 0,
    U: 0,
    V: 0,
    W: "ja",
    X: 0,
    Y: 33,
    Z: 0,
  },
  {
    "AN PersNr": "2",
    "AN Nachname": "Nicole",
    "brutto Gehalt": 3000,
    Steuerklasse: 3,
    Uberstunden: 0,
    AB: "nein",
    AC: " ",
    AD: 0,
    AE: "brutto",
    AF: 0,
    AG: 0,
    AL: -50,
    AM: 0,
    AN: 0,
    AO: 0,
    AP: 0,
    AQ: 0,
    AR: 0,
    AS: 0,
    AT: 0,
    AU: 0,
    AX: 59.01,
    BC: 0,
    BD: 0,
    BG: 0,
    BH: 0,
    BI: 0,
    BJ: 0,
    BK: 0,
    BL: 0,
    BM: 50,
    BN: 0,
    BO: 0,
    BP: 0,
    BQ: 0,
    BR: 0,
    BS: 0,
    BT: 0,
    BU: 0,
    BV: 0,
    BW: 0,
    CC: 94.5,
    CD: 22,
    CE: 8.9,
    Q: 1.25,
    R: 1,
    S: "ja",
    T: 0,
    U: 0,
    V: 0,
    W: "ja",
    X: 0,
    Y: 33,
    Z: 0,
  },
  {
    "AN PersNr": "3",
    "AN Nachname": "Nicole",
    "brutto Gehalt": 2500,
    Steuerklasse: 1,
    Uberstunden: 0,
    AB: "nein",
    AC: " ",
    AD: 0,
    AE: "brutto",
    AF: 0,
    AG: 0,
    AL: -50,
    AM: 0,
    AN: 0,
    AO: 0,
    AP: 0,
    AQ: 0,
    AR: 0,
    AS: 0,
    AT: 0,
    AU: 0,
    AX: 44.0,
    BC: 0,
    BD: 0,
    BG: 0,
    BH: 0,
    BI: 0,
    BJ: 0,
    BK: 0,
    BL: 0,
    BM: 50,
    BN: 0,
    BO: 0,
    BP: 0,
    BQ: 0,
    BR: 0,
    BS: 0,
    BT: 0,
    BU: 0,
    BV: 0,
    BW: 0,
    CC: 78.75,
    CD: 22,
    CE: 8.9,
    Q: 1.12,
    R: 1,
    S: "ja",
    T: 0,
    U: 0,
    V: 0,
    W: "ja",
    X: 0,
    Y: 33,
    Z: 0,
  },
  {
    "AN PersNr": "4",
    "AN Nachname": "Nicole",
    "brutto Gehalt": 3200,
    Steuerklasse: 5,
    Uberstunden: 0,
    AB: "nein",
    AC: " ",
    AD: 0,
    AE: "brutto",
    AF: 0,
    AG: 0,
    AL: -50,
    AM: 0,
    AN: 0,
    AO: 0,
    AP: 0,
    AQ: 0,
    AR: 0,
    AS: 0,
    AT: 0,
    AU: 0,
    AX: 44.47,
    BC: 0,
    BD: 0,
    BG: 0,
    BH: 0,
    BI: 0,
    BJ: 0,
    BK: 0,
    BL: 0,
    BM: 50,
    BN: 0,
    BO: 0,
    BP: 0,
    BQ: 0,
    BR: 0,
    BS: 0,
    BT: 0,
    BU: 0,
    BV: 0,
    BW: 0,
    CC: 100.8,
    CD: 22,
    CE: 8.9,
    Q: 0.88,
    R: 1,
    S: "ja",
    T: 0,
    U: 0,
    V: 0,
    W: "ja",
    X: 0,
    Y: 33,
    Z: 0,
  },
];

let BSlist = [
  "Sachbezug",
  "Handy",
  "Internet",
  "CleverLunch",
  "Werbung",
  "Garage",
  "Fehlgeld",
  "Fahrkosten",
  "Kindergarten",
  "Verpflegungsmehraufwand",
];

let textBox3Value = 3;
let textBox4Value = 0;
let textBox5Value = 5;
let textBox6Value = 100;
let textBox7Value = 22;
let textBox8Value = 8.9;
let textBox1Value = 1.28;
let ComboBox1 = "brutto";

function process_Faktoren(data) {
  let faktoren = require("./Module_3.js");
  return faktoren(data);
}

function process_setzen(data, BSlist) {
  let setzen = require("./Module_2.js");
  return setzen(data, BSlist);
}

function main(
  data,
  BSlist,
  textBox3Value,
  textBox4Value,
  textBox5Value,
  textBox6Value,
  textBox7Value,
  textBox8Value,
  textBox1Value,
  ComboBox1
) {
  try {
    // progressBar1.value = 10;
    // progressBar1.visible = true;

    let comboBox1Value = ComboBox1;
    if (textBox3Value > 0 && textBox4Value > 0) {
      console.log("both textBox3Value and textBox4Value exist");
      return;
    }

    let Daten = { J3: "20%", J1: 22, J2: 8.9, J5: 1.28 };

    // if (
    //   data[0]["AL"] > 0 ||
    //   data[0]["AN"] > 0 ||
    //   data[0]["AP"] > 0 ||
    //   data[0]["AR"] > 0 ||
    //   data[0]["AT"] > 0 ||
    //   data[0]["AX"] > 0 ||
    //   data[0]["BK"] > 0 ||
    //   data[0]["BM"] > 0
    // ) {
    //   let isBestandskunde = console.log("question ",
    //     "Es sind bereits Bausteine verteilt. Handelt es sich um einen Bestandskunden? "
    //   );
    //   if (isBestandskunde) {
    //     // alert(
    //     //     "Bestandskunde: es werden nur Bausteine berechnet, die noch nicht oder noch nicht vollständig ausgenutzt werden"
    //     // );
    //   } else {
    //     // alert(
    //     //     "kein Bestandskunde, alle bereits verteilten Bausteine werden gelöscht"
    //     // );
    //     function process_leeren() {
    //       let leeren = require("./leeren.js");
    //       data = leeren(data);
    //     }
    //     process_leeren();
    //   }
    // }

    // TODO Sheets("Daten2").Range("D1").value = CDbl(TextBox5.value)

    // let i = 0;
    let E2 = comboBox1Value;
    let O4 = `${textBox1Value} %`;
    let O3 = "Aufschlag:";

    if (textBox1Value === "") {
      textBox1Value = 0;
    }
    Daten["J3"] = parseFloat(textBox1Value) / 100;
    Daten["J1"] = textBox6Value;
    Daten["J2"] = textBox7Value;
    Daten["J5"] = textBox8Value;

    for (let ii = 1; ii <= 2; ii++) {
      if (ii === 1) {
        // Call a function to set factors
        // TODO call module3

        data = process_Faktoren(data);
      }

      for (let i = 0; i < data.length; i++) {
        if (comboBox1Value === "netto") {
          data[i]["AE"] = "netto";
        } else if (comboBox1Value === "brutto") {
          data[i]["AE"] = "brutto";
        }

        if (data[i]["S"] === "ja" && data[i]["V"] !== "") {
          // alert(
          //     `In Zeile ${
          //         i + 1
          //     } ist Dienstwagen und km Erstattung gleichzeitig eingetragen, km angabe wird entfernt`
          // );
          data[i]["V"] = "";
        }

        if (data[i]["AC"] === "ja" && data[i]["V"] !== "") {
          // alert(
          //     `In Zeile ${
          //         i + 1
          //     } ist vorhandenes JobTicket und km Erstattung gleichzeitig eingetragen, km angabe wird entfernt`
          // );
          data[i]["V"] = "";
        }

        if (data[i]["Y"] === "") {
          data[i]["Y"] = 5;
        }

        if (textBox5Value > 0) {
          data[i]["Z"] = parseFloat(textBox5Value);
        }

        if (textBox3Value) {
          textBox3Value = 0;
        }

        if (textBox4Value) {
          textBox4Value = 0;
        }

        let faktor;
        if (textBox3Value !== 0) {
          if (textBox1Value === 0) {
            faktor = 1;
          } else {
            faktor = 1 + parseFloat(textBox1Value) / 100;
          }
        }

        if (data[i]["E2"] === "netto") {
          data[i]["R"] =
            data[i]["O"] * ((parseFloat(textBox3Value) / 100) * faktor);
          data[i]["E3"] = "Erhöhung in %";
          data[i]["E4"] = textBox3Value;
        }

        if (data[i]["E2"] === "brutto") {
          data[i]["R"] =
            data[i]["O"] *
            (parseFloat(textBox3Value) / 100 / 2) *
            data[i]["Q"] *
            faktor;
          data[i]["E3"] = "Erhöhung in %";
          data[i]["E4"] = textBox3Value;
          data[i]["CC"] =
            data[i]["O"] * (parseFloat(textBox3Value) / 100) * faktor;
        }

        if (textBox4Value !== 0) {
          if (textBox1Value === 0) {
            faktor = 1;
          } else {
            faktor = 1 + parseFloat(textBox1Value) / 100;
          }
        }

        if (data[i]["E2"] === "netto") {
          data[i]["R"] = parseFloat(textBox4Value) * faktor;
          data[i]["E3"] = "Erhöhung in %";
          data[i]["E4"] = textBox4Value;
        }

        if (data[i]["E2"] === "brutto") {
          data[i]["R"] =
            (parseFloat(textBox4Value) / 100 / 2) * data[i]["Q"] * faktor;
          data[i]["E3"] = "Erhöhung in %";
          data[i]["E4"] = textBox4Value;
          data[i]["CC"] = parseFloat(textBox4Value) * faktor;
        }
      }
      if (ii === 1) {
        data = process_Faktoren(data);
      }
    }

    data = process_setzen(data, BSlist);

    for (let i = 0; i < data.length; i++) {
      if (data[i]["AE"] === "netto") {
        data[i]["CC"] = (data[i]["R"] / data[i]["Q"]) * 2;
      }
      if (data[i]["CC"] > 0) {
        data[i]["AD"] = (data[i]["CC"] - data[i]["AG"] * 18.6) / 100;
      }
    }

    // Output the final state of the data array
    console.log(data);

    function process_G3(data) {
      let Daten = {
        J3: "5%",
        J1: 22,
        J2: 8.9,
        J5: 1.28,
        P1: 0.025,
        Q4: 0.05,
        Q8: 0.15,
        Q3: 0.25,
      };

      //let Daten3 = { J3: "5%", J1: 22, J2: 8.9, J5: 1.28 };

      for (let i = 0; i < data.length; i++) {
        data[i]["CF"] = data[i]["CC"] * Daten.J5;
      }

      let sumCF = data.reduce(
        (accumulator, currentValue) => accumulator + currentValue["CF"],
        0
      );

      // Display the sum of all CF values
      //console.log(sumCF.toFixed(2));

      // Function to calculate the sum based on conditions
      function sumIf(conditionColumn, sumColumn, row) {
        if (row[conditionColumn] === "ja") {
          return row[sumColumn];
        }
        return 0;
      }

      // Calculate total sum using the condition "ja"
      for (let i = 0; i < data.length; i++) {
        let totalSum1 =
          sumIf("AM", "AL", data[i]) +
          sumIf("AO", "AN", data[i]) +
          sumIf("AQ", "AP", data[i]) +
          sumIf("AS", "AR", data[i]) +
          sumIf("AU", "AT", data[i]) +
          sumIf("BJ", "BI", data[i]) +
          sumIf("BL", "BK", data[i]) +
          sumIf("BN", "BM", data[i]) +
          sumIf("BH", "BG", data[i]) +
          sumIf("BD", "BC", data[i]) +
          sumIf("BP", "BO", data[i]) +
          sumIf("BR", "BQ", data[i]) +
          sumIf("BT", "BS", data[i]) +
          sumIf("BV", "BU", data[i]);

        data[i]["BW"] = totalSum1;

        if (totalSum1 === 0) {
          data[i]["CI"] = 0;
        }
        let result = totalSum1 * Daten.P1;
        if (result > 2.79) {
          data[i]["CI"] = 2.79;
        } else {
          data[i]["CI"] = result;
        }
      }

      // Function to calculate the sum of a row
      function calculateRowSum(
        AL,
        AN,
        AP,
        AR,
        AT,
        BK,
        BM,
        AX,
        CD,
        CE,
        AF,
        CI,
        BI,
        BC,
        Daten
      ) {
        return (
          AL +
          AN +
          AP +
          AR +
          AT +
          BK +
          BM +
          AX +
          AX * Daten.Q4 +
          BK * Daten.Q8 +
          BM * Daten.Q3 +
          CD +
          CE +
          AF * 2.4 +
          CI +
          BI +
          BC
        );
      }

      // Calculate the sum for each row and store in the results array
      let results = [];

      for (let i = 0; i < data.length; i++) {
        let row = data[i];
        let sum = calculateRowSum(
          row.AL,
          row.AN,
          row.AP,
          row.AR,
          row.AT,
          row.BK,
          row.BM,
          row.AX,
          row.CD,
          row.CE,
          row.AF,
          row.CI,
          row.BI,
          row.BC,
          Daten
        );
        results.push(sum);
      }

      // Calculate the total sum of all rows
      let totalSum = results.reduce((sum, value) => sum + value, 0);

      // Output the total sum in the required format
      //console.log(totalSum.toFixed(2));
      console.log("sum", sumCF);
      console.log("total", totalSum);
      let Y = sumCF - totalSum;

      console.log(Y.toFixed(2));
      let G2 = (Y * 4) / data.length;
      let G3 = G2 * 12;
      console.log("------- G3:  ", G3);
    }

    process_G3(data);
  } catch (e) {
    console.error("An error occurred:", e);
  }
}
main(
  data,
  BSlist,
  textBox3Value,
  textBox4Value,
  textBox5Value,
  textBox6Value,
  textBox7Value,
  textBox8Value,
  textBox1Value,
  ComboBox1
);
