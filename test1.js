let CC = [110.25, 94.5, 78.75, 100.8, /* ... */ 0]; // Example values from CC7 to CC506

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

let CF = [];

for (let i = 0; i < CC.length; i++) {
  CF[i] = CC[i] * Daten.J5;
}

let sumCF = CF.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// Display the sum of all CF values
//console.log(sumCF.toFixed(2));

let data = [
  {
    AM: 0,
    AL: -50,
    AO: 0,
    AN: 9,
    AQ: 0,
    AP: 0,
    AS: 0,
    AR: 40,
    AU: 0,
    AT: 9.19,
    AX: 0,
    BJ: 0,
    BI: 0,
    BL: 0,
    BK: 0,
    BN: 0,
    BM: 50,
    BH: 0,
    BG: 0,
    BD: 0,
    BC: 0,
    BP: 0,
    BO: 0,
    BR: 0,
    BQ: 0,
    BT: 0,
    BS: 0,
    BV: 0,
    BU: 0,
    BW: 0,
    CD: 22,
    CE: 0,
    AF: 0,
    BI: 0,
    BC: 0,
  },
  {
    AM: 0,
    AL: -50,
    AO: 0,
    AN: 0,
    AQ: 0,
    AP: 0,
    AS: 0,
    AR: 0,
    AU: 0,
    AT: 0,
    AX: 59.01,
    BJ: 0,
    BI: 0,
    BL: 0,
    BK: 0,
    BN: 0,
    BM: 50,
    BH: 0,
    BG: 0,
    BD: 0,
    BC: 0,
    BP: 0,
    BO: 0,
    BR: 0,
    BQ: 0,
    BT: 0,
    BS: 0,
    BV: 0,
    BU: 0,
    BW: 0,
    CD: 22,
    CE: 8.9,
    AF: 0,
    BI: 0,
    BC: 0,
  },
  {
    AM: 0,
    AL: -50,
    AO: 0,
    AN: 0,
    AQ: 0,
    AP: 0,
    AS: 0,
    AR: 0,
    AU: 0,
    AT: 0,
    AX: 44.0,
    BJ: 0,
    BI: 0,
    BL: 0,
    BK: 0,
    BN: 0,
    BM: 50,
    BH: 0,
    BG: 0,
    BD: 0,
    BC: 0,
    BP: 0,
    BO: 0,
    BR: 0,
    BQ: 0,
    BT: 0,
    BS: 0,
    BV: 0,
    BU: 0,
    BW: 0,
    CD: 22,
    CE: 8.9,
    AF: 0,
    BI: 0,
    BC: 0,
  },
  {
    AM: 0,
    AL: -50,
    AO: 0,
    AN: 0,
    AQ: 0,
    AP: 0,
    AS: 0,
    AR: 0,
    AU: 0,
    AT: 0,
    AX: 44.47,
    BJ: 0,
    BI: 0,
    BL: 0,
    BK: 0,
    BN: 0,
    BM: 50,
    BH: 0,
    BG: 0,
    BD: 0,
    BC: 0,
    BP: 0,
    BO: 0,
    BR: 0,
    BQ: 0,
    BT: 0,
    BS: 0,
    BV: 0,
    BU: 0,
    BW: 0,
    CD: 22,
    CE: 8.9,
    AF: 0,
    BI: 0,
    BC: 0,
  },
];

// Sample data structure for Daten
//let Daten = { J3: "5%", J1: 22, J2: 8.9, J5: 1.28 , P1: 0.025, Q4: 0.05, Q8: 0.15, Q3: 0.25 };

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
Y = sumCF - totalSum;
console.log(Y.toFixed(2));
