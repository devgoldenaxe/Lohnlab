let brutto, nettoalt, nettoneu, netto37, nettoPlus, Netto_A, Netto_B;
let intFirstRow, intLastRow;
let iii;
let stkl;
let faktor;
let Aufschlag;
let marbeit;
let prozent;
let kosten;
let kosten2;
let bav;
let lng_a;
let aaa;
let bbb;
let cb2, cb3, cb4, cb5, cb6, cb7, cbsum;
let lauf, zeile, aa, bb;
let zelle;

let Gewünschter_Nettolohn = 1979.74;
let Steuerpflichtiger_Arbeitslohn = 3718.27;

const data = [
  {
    "AN PersNr": "1",
    "AN Nachname": "Nicole",
    "brutto Gehalt": 3500,
    Steuerklasse: 1,
    Uberstunden: 0,
  },
];

let data_columns = [
  "CT",
  "CU",
  "CV",
  "CW",
  "CX",
  "CY",
  "CZ",
  "DA",
  "DB",
  "DC",
  "DD",
  "DE",
  "DF",
];

let AblaufResult = {
  B230: 0,
  B260: 0,
  B265: 0,
};

// bb = 6;

let EingabeG = [
  0.0, 0.0, 0.0, 9.0, 14.6, 1.7, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0,
];

let EingabeB = [0.0, 0, 0, 9, 14.6, 1.7, 0, 1, 0, 0, 0, 0.0, 0.0];

// let Eingabe = { stkl: 5, brutto: 3490.88 };

let result;

for (let i = 0; i < data.length; i++) {
  brutto = data[i]["brutto Gehalt"] + data[i]["Uberstunden"];
  stkl = data[i]["Steuerklasse"];

  if (!stkl) {
    stkl = 1;
    data[i]["Steuerklasse"] = 1;
  }

  if (brutto === 0) {
    brutto = 3000;
    data[i]["brutto Gehalt"] = 3000;
  }

  for (let j = 0; j < data_columns.length; j++) {
    if (!data[i][data_columns[j]]) {
      data[i][data_columns[j]] = EingabeG[j];
    }
  }

  for (let j = 0; j < data_columns.length; j++) {
    EingabeB[j] = data[i][data_columns[j]];
  }
  if (EingabeB[2] > 0) {
    EingabeB[7] = 0;
  }

  // Eingabe["stkl"] = stkl;
  // Eingabe["brutto"] = brutto;

  calculateAblaufResult();
  let Lohnsteuer = AblaufResult.B230 / 100;
  let Solidaritätszuschlag = AblaufResult.B260 / 100;
  Netto_A = Steuerpflichtiger_Arbeitslohn - (Lohnsteuer + Solidaritätszuschlag);
  //Netto_A = EingabeB.reduce((sum, value) => sum + value, 0);
  if (data[i]["CB"] != 0) {
    brutto = brutto + data[i]["CB"];
  }

  bruttoPlus = data[i]["CB"];
  Netto_B = EingabeB.reduce((sum, value) => sum + value, 0);

  let I2 = bruttoPlus;
  //let B2 = 3200;
  //let A2 = 5;
  let C2 = Netto_A;
  let E2 = Netto_B;
  let F2 = E2 - C2;
  let G1 = I2 / 2;
  let G2 = F2 - G1;
  let H2 = G1 > 0 ? (G2 * 100) / G1 : 1;
  result = 1 + H2 / 100;
}

console.log("result:", result.toFixed(2));
console.log(data);
//console.log(Netto_A);
//console.log(Netto_B);
