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
let Y = sumCF - totalSum;
console.log("sum", sumCF);
console.log("total", totalSum);
console.log(Y.toFixed(2));
let G2 = (Y * 4) / data.length;
let G3 = G2 * 12;
console.log("------- G3:  ", G3);
