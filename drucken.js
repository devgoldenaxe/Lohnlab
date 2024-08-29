import faktoren from "https://devgoldenaxe.github.io/Lohnlab/Module_3.js";
// let data = [
//   {
//     C: "5",
//     D: "Eva",
//     O: 3500,
//     Steuerklasse: 1,
//     Uberstunden: 0,
//     Q: 0,
//     Y: 3,
//     AB: "ja",
//     AC: "",
//     AD: 0,
//     AE: "brutto",
//     AF: 0,
//     AG: 0,
//     AL: 0,
//     AM: 0,
//     AN: 0,
//     AO: 0,
//     AP: 0,
//     AQ: 0,
//     AR: 0,
//     AS: 0,
//     AT: 0,
//     AU: 0,
//     AX: 0,
//     BC: 0,
//     BD: 0,
//     BG: 0,
//     BH: 0,
//     BI: 0,
//     BJ: 0,
//     BK: 0,
//     BL: 0,
//     BM: 0,
//     BN: 0,
//     BO: 0,
//     BP: 0,
//     BQ: 0,
//     BR: 0,
//     BS: 0,
//     BT: 0,
//     BU: 0,
//     BV: 0,
//     BW: 0,
//     CC: 0,
//     CD: 0,
//     CE: 0,
//     CJ: 0,
//     CK: 0,
//     Cl: 0,
//     CM: 0,
//     CN: 0,
//     CO: 0,
//     CP: 0,
//     CQ: 0,
//     CR: 0,
//     CS: 0,
//     CT: 0,
//     CY: 1.7,
//     CV: 0,
//     CX: 14.6,
//     F: "Butjadinger Str. 79",
//     G: 26180,
//     I: "1 / 27 / 1967",
//     R: 0,
//     S: "ja",
//     T: 9,
//     U: 0,
//     V: 0,
//     W: "ja",
//     X: 0,
//     Z: 0,
//   },
// ];

function process_Faktoren(data) {
  // let faktoren = require("https://devgoldenaxe.github.io/Lohnlab/Module_3.js");
  return faktoren(data);
}

let inputa = "";
let inputb = "ja";

function drucken(data) {
  let result = [];
  try {
    let AN5 = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].AN) {
        AN5 += data[i].AN;
      }
    }
    let AR5 = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].AR) {
        AR5 += data[i].AR;
      }
    }
    let AT5 = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].AT) {
        AT5 += data[i].AT;
      }
    }
    let BI5 = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].BI) {
        BI5 += data[i].BI;
      }
    }
    let BK5 = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].BK) {
        BK5 += data[i].BK;
      }
    }
    let BM5 = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].BM) {
        BM5 += data[i].BM;
      }
    }
    //Handy
    if (AN5 > 0) {
      if (inputa == "ja") {
        for (let i = 0; i < data.length; i++) {
          data[i].AO = "ja";
        }
      }
    }
    // Garage
    if (AR5 > 0) {
      if (inputa == "ja") {
        for (let i = 0; i < data.length; i++) {
          data[i].AS = "ja";
        }
      }
    }
    // Fehlgeld
    if (AT5 > 0) {
      if (inputa == "ja") {
        for (let i = 0; i < data.length; i++) {
          data[i].AU = "ja";
        }
      }
    }
    // Verpflegung
    if (AT5 > 0) {
      if (inputa == "ja") {
        for (let i = 0; i < data.length; i++) {
          data[i].BD = "ja";
        }
      }
    }
    // KiGa
    if (BI5 > 0) {
      if (inputa == "ja") {
        for (let i = 0; i < data.length; i++) {
          data[i].BJ = "ja";
        }
      }
    }
    // Fahrtkosten
    if (BK5 > 0) {
      if (inputa == "ja") {
        for (let i = 0; i < data.length; i++) {
          data[i].BL = "ja";
        }
      }
    }
    // Internet
    if (BM5 > 0) {
      if (inputa == "ja") {
        for (let i = 0; i < data.length; i++) {
          data[i].BN = "ja";
        }
      }
    }
    for (let i = 0; i < data.length; i++) {
      let Gehalt = {
        B4: 0,
        B19: 0,
        B21: 0,
        B20: 0,
        B23: 0,
        B22: 0,
        B25: 0,
        B24: 0,
        C4: 0,
        D4: 0,
        E4: 0,
        F4: 0,
        G4: 0,
        H4: 0,
        J4: 0,
        F6: 0,
        C9: 0,
        C10: 0,
        C11: 0,
        C43: 0,
        C44: 0,
        C47: 0,
        C48: 0,
        D47: 0,
        D48: 0,
        E43: 0,
        E36: 0,
        E37: 0,
        E38: 0,
        E39: 0,
        E47: 0,
        E48: 0,
        F47: 0,
        F48: 0,
        F43: 0,
        H43: 0,
        G47: 0,
        H47: 0,
        I47: 0,
        J47: 0,
        E44: 0,
        F44: 0,
        H44: 0,
        G48: 0,
        H48: 0,
        I48: 0,
        J48: 0,
        K17: 0,
        M17: 0,
        K36: 0,
        K37: 0,
        K38: 0,
        K39: 0,
        M36: 0,
        M37: 0,
        M38: 0,
        M39: 0,
        K41: 0,
        K54: 0,
        M52: 0,
        M53: 0,
        M55: 0,
        M54: 0,
        M18: 0,
        E18: 0,
        F18: 0,
        G18: 0,
        M19: 0,
        M20: 0,
        M21: 0,
        M22: 0,
        M23: 0,
        M24: 0,
        M25: 0,
        M26: 0,
        M27: 0,
        M28: 0,
        M29: 0,
        M30: 0,
        M31: 0,
        M32: 0,
        M33: 0,
        M34: 0,
        M35: 0,
        E19: 0,
        E20: 0,
        E21: 0,
        E22: 0,
        E23: 0,
        E24: 0,
        E25: 0,
        E26: 0,
        E27: 0,
        E28: 0,
        E29: 0,
        E30: 0,
        E31: 0,
        E32: 0,
        E33: 0,
        E34: 0,
        E35: 0,
        F19: 0,
        F20: 0,
        F21: 0,
        F22: 0,
        F23: 0,
        F24: 0,
        F25: 0,
        F26: 0,
        F27: 0,
        F28: 0,
        F29: 0,
        F30: 0,
        F31: 0,
        F32: 0,
        F33: 0,
        F34: 0,
        F35: 0,
        G19: 1,
        G20: 1,
        G21: 1,
        G22: 1,
        G23: 1,
        G24: 1,
        G25: 1,
        G26: 1,
        G27: 1,
        G28: 1,
        G29: 1,
        G30: 1,
        G31: 1,
        G32: 0.083,
        G33: 0.083,
        G34: 0.083,
        G35: 1,
        K43: 0,
        E43: 0,
        F43: 0,
        G43: 0,
        H43: 0,
        I43: 0,
        J43: 0,
        K44: 0,
        E44: 0,
        F44: 0,
        G44: 0,
        H44: 0,
        I44: 0,
        J44: 0,
        K47: 0,
        M48: 0,
        K52: 0,
        K53: 0,
        K55: 0,
        K58: 0,
        K61: 0,
        K59: 0,
        K60: 0,
        M58: 0,
        M59: 0,
        M60: 0,
        M61: 0,
      };

      // data = process_Faktoren(data);
      // TODO Data CT-DG values fillng using Eningabe sheet values From G6-G18
      let Eingabe = [0.0, 0, 0, 9, 14.6, 1.7, 0, 1, 0, 0, 0, 0.0, 0.0];
      if (!data[i].CT) {
        data[i].CT = Eingabe[0];
      }
      if (!data[i].CU) {
        data[i].CU = Eingabe[1];
      }
      if (!data[i].CV) {
        data[i].CV = Eingabe[2];
      }
      if (!data[i].CX) {
        data[i].CX = Eingabe[3];
      }
      if (!data[i].CY) {
        data[i].CY = Eingabe[4];
      }
      if (!data[i].CZ) {
        data[i].CZ = Eingabe[5];
      }
      if (!data[i].DA) {
        data[i].DA = Eingabe[6];
      }
      if (!data[i].DB) {
        data[i].DB = Eingabe[7];
      }
      if (!data[i].DC) {
        data[i].DC = Eingabe[8];
      }
      if (!data[i].DD) {
        data[i].DD = Eingabe[9];
      }
      if (!data[i].DE) {
        data[i].DE = Eingabe[10];
      }
      if (!data[i].DF) {
        data[i].DF = Eingabe[11];
      }
      if (!data[i].DG) {
        data[i].DG = Eingabe[12];
      }
      Gehalt["B4"] = data[i]["C"];
      Gehalt["C4"] = data[i]["I"];
      Gehalt["D4"] = data[i]["Steuerklasse"];
      Gehalt["E4"] = data[i]["CT"];
      Gehalt["F4"] = data[i]["CV"];
      Gehalt["G4"] = data[i]["CW"];
      Gehalt["H4"] = data[i]["DF"];
      Gehalt["J4"] = data[i]["CU"];
      Gehalt["E6"] = data[i]["CX"] + " / " + data[i]["CY"];
      if (data[i].DA == 1) {
        Gehalt.F6 = "ja";
      } else {
        Gehalt.F6 = "nein";
      }
      Gehalt.C9 = data[i].D + "  " + data[i].E;
      Gehalt.C10 = data[i].F;
      Gehalt.C11 = data[i].G + "  " + data[i].H;
      Gehalt.K17 = data[i].O;
      Gehalt.M17 = data[i].O;
      Gehalt.K36 = data[i].CJ;
      Gehalt.K37 = data[i].CK;
      Gehalt.K38 = data[i].CL;
      Gehalt.K39 = data[i].CM;
      Gehalt.M36 = data[i].CN;
      Gehalt.M37 = data[i].CO;
      Gehalt.M38 = data[i].CP;
      Gehalt.M39 = data[i].CQ;
      Gehalt.K54 = data[i].CR;
      Gehalt.M54 = data[i].CS;

      //gehalt code////////

      if (data[i]["AL"] > 0) {
        Gehalt["E18"] = Math.round(data[i]["AL"] * 100) / 100;
        Gehalt["F18"] = 1;
        Gehalt["M52"] = Math.round(Gehalt["M52"] - data[i]["AL"] * 100) / 100;
      } else {
        Gehalt["E18"] = 0;
        Gehalt["F18"] = 0;
      }

      //Garage
      if (data[i]["AR"] > 0) {
        Gehalt["E23"] = Math.round(data[i]["AR"] * 100) / 100;
        Gehalt["F23"] = 1;
        if (data[i]["AS"] === "ja") {
          Gehalt["M52"] = Math.round(Gehalt["M52"] - data[i]["AR"] * 100) / 100;
        }
      } else {
        Gehalt["E23"] = 0;
        Gehalt["F23"] = 0;
      }

      //Fehlgeld
      if (data[i]["AT"] > 0) {
        Gehalt["E24"] = Math.round(data[i]["AT"] * 100) / 100;
        Gehalt["F24"] = 1;
        if (data[i]["AU"] === "ja") {
          Gehalt["M52"] = Math.round(Gehalt["M52"] - data[i]["AT"] * 100) / 100;
        }
      } else {
        Gehalt["E24"] = 0;
        Gehalt["F24"] = 0;
      }

      // Verpflegung
      if (data[i]["BC"] > 0) {
        Gehalt["E26"] = Math.round(data[i]["BA"] * 100) / 100;
        Gehalt["F26"] = data[i]["BB"];
        if (data[i]["BD"] === "ja") {
          Gehalt["M52"] = Math.round(Gehalt["M52"] - data[i]["BC"] * 100) / 100;
        }
      } else {
        Gehalt["E26"] = 0;
        Gehalt["F26"] = 0;
      }

      //CL
      if (data[i]["AX"] > 0) {
        Gehalt["E19"] = Math.round(data[i]["AV"] * 100) / 100;
        Gehalt["F19"] = data[i]["AW"];
      } else {
        Gehalt["E19"] = 0;
        Gehalt["F19"] = 0;
      }

      //Handy
      if (data[i]["AN"] > 0) {
        Gehalt["E28"] = Math.round(data[i]["AN"] * 100) / 100;
        Gehalt["F28"] = 1;
        if (data[i]["AO"] === "ja") {
          Gehalt["M52"] = Math.round(Gehalt["M52"] - data[i]["AN"] * 100) / 100;
        }
      } else {
        Gehalt["E28"] = 0;
        Gehalt["F28"] = 0;
      }

      // Kindergarten
      if (data[i]["BI"] > 0) {
        Gehalt["E29"] = Math.round(data[i]["BI"] * 100) / 100;
        Gehalt["F29"] = 1;
        if (data[i]["BJ"] === "ja") {
          Gehalt["M52"] = Math.round(Gehalt["M52"] - data[i]["BI"] * 100) / 100;
        }
      } else {
        Gehalt["E29"] = 0;
        Gehalt["F29"] = 0;
      }

      //Internet
      if (data[i]["BM"] > 0) {
        Gehalt["E30"] = Math.round(data[i]["BM"] * 100) / 100;
        Gehalt["F30"] = 1;
        if (data[i]["BN"] === "ja") {
          Gehalt["M52"] = Math.round(Gehalt["M52"] - data[i]["BM"] * 100) / 100;
        }
      } else {
        Gehalt["E30"] = 0;
        Gehalt["F30"] = 0;
      }

      // Fahrtkosten
      if (data[i]["BK"] > 0) {
        Gehalt["E31"] = Math.round(data[i]["BK"] * 100) / 100;
        Gehalt["F31"] = 1;
        if (data[i]["BL"] === "ja") {
          Gehalt["M52"] = Math.round(Gehalt["M52"] - data[i]["BK"] * 100) / 100;
        }
      } else {
        Gehalt["E31"] = 0;
        Gehalt["F31"] = 0;
      }

      //Werbung
      if (data[i]["AP"] > 0) {
        Gehalt["M60"] = Math.round(Gehalt["M60"] - data[i]["AP"] * 100) / 100;
      } else {
        Gehalt["M60"] = 0;
      }

      if (Gehalt["K36"]) {
        Gehalt["E36"] = 1;
      }
      if (Gehalt["K37"]) {
        Gehalt["E37"] = 1;
      }
      if (Gehalt["K38"]) {
        Gehalt["E38"] = 1;
      }
      if (Gehalt["K39"]) {
        Gehalt["E39"] = 1;
      }
      if (Gehalt["M36"]) {
        Gehalt["E36"] = 1;
      }
      if (Gehalt["M37"]) {
        Gehalt["E37"] = 1;
      }
      if (Gehalt["M38"]) {
        Gehalt["E38"] = 1;
      }
      if (Gehalt["M39"]) {
        Gehalt["E39"] = 1;
      }

      // brutto = data[i]["O"] + data[i]["CJ"] + data[i]["CK"] + data[i]["CL"];
      // brutto2 = data[i]["O"] + data[i]["CO"] + data[i]["CQ"] + data[i]["CR"];

      // stkl = data[i]["P"];

      // if (eingabe.visible === false) {
      //   eingabe.visible = true;
      // }

      // eingabe["B5"] = stkl;

      // let aa = 98;
      // let bb = 6;

      // // Assuming `eingabe` is a 2D array and `data` is a 2D array or similar structure

      // for (let i = 1; i <= 13; i++) {
      //   if (bb - 1 < Eingabe.length && 1 < Eingabe[bb - 1].length) {
      //     Eingabe[bb - 1][1] = data[i - 1][aa - 1];
      //   }
      //   aa = aa + 1;
      //   bb = bb + 1;
      // }

      // if (Eingabe[7][1] > 0) {
      //   Eingabe[12][1] = 0;
      // }

      // eingabe["B3"] = brutto;

      Gehalt["E43"] = data[i]["Gehalt_E43"];
      Gehalt["F43"] = data[i]["Gehalt_F43"];
      Gehalt["H43"] = data[i]["Gehalt_H43"];
      Gehalt["G47"] = data[i]["Gehalt_G47"];
      Gehalt["H47"] = data[i]["Gehalt_H47"];
      Gehalt["I47"] = data[i]["Gehalt_I47"];
      Gehalt["J47"] = data[i]["Gehalt_J47"];
      //data[i]["Gehalt_/ eingabe["B3"] = brutto2;

      Gehalt["E44"] = data[i]["Gehalt_E43"]; //Gehalt_E44
      Gehalt["F44"] = data[i]["Gehalt_F43"]; //Gehalt_F44
      Gehalt["H44"] = data[i]["Gehalt_H43"]; //Gehalt_H44
      Gehalt["G48"] = data[i]["Gehalt_G47"]; //Gehalt_G48
      Gehalt["H48"] = data[i]["Gehalt_H47"]; //Gehalt_H48
      Gehalt["I48"] = data[i]["Gehalt_I47"]; //Gehalt_I48
      Gehalt["J48"] = data[i]["Gehalt_J47"]; //Gehalt_J48

      // Initialize steuer array with values from Gehalt
      // for (let i = 0; i < steuer.length; i++) {
      //   steuer[i] = {}; // Initialize each element as an object
      //   steuer[i]["A"] = Gehalt["K17"];
      //   steuer[i]["B"] = Gehalt["E43"];
      //   steuer[i]["C"] = Gehalt["M17"];
      //   steuer[i]["D"] = Gehalt["E44"];
      // }

      // Assuming steuer is an array of objects with a given length
      // Assuming steuer is an array of objects with a given length

      // for (let i = 18; i <= 39; i++){

      // }

      // if (nurSteuer !== "ja") {
      //   ///code
      // }

      // Gehalt["E37"] = 0;
      // Gehalt["E38"] = 0;
      // Gehalt["E39"] = 0;
      // Gehalt["M52"] = 0;
      // Gehalt["M53"] = 0;
      // Gehalt["M60"] = 0;
      Gehalt["C43"] =
        Gehalt["K17"] + Gehalt["K36"] + Gehalt["K37"] + Gehalt["K38"];
      Gehalt["C44"] =
        Gehalt["M17"] + Gehalt["M36"] + Gehalt["M37"] + Gehalt["M38"];
      Gehalt["C47"] = Gehalt["C43"];
      Gehalt["C48"] = Gehalt["C44"];
      Gehalt["D47"] = Gehalt["C43"];
      Gehalt["D48"] = Gehalt["C48"];
      Gehalt["E47"] = Gehalt["C43"];
      Gehalt["E48"] = Gehalt["C48"];
      Gehalt["F47"] = Gehalt["C43"];
      Gehalt["F48"] = Gehalt["C48"];
      // let K = {
      //     K17: Gehalt.K17,
      //     K36: Gehalt.K36,
      //     K37: Gehalt.K37,
      //     K38: Gehalt.K38,
      //     K39: Gehalt.K39,
      // };
      Gehalt["K41"] =
        Gehalt["K17"] +
        Gehalt["K36"] +
        Gehalt["K37"] +
        Gehalt["K38"] +
        Gehalt["K39"];

      // for (let i = 0; i < K.length; i++) {
      //     K41 += K[i];
      // }
      //Gehalt["M55"] = Gehalt["M52"] + Gehalt["M53"] + Gehalt["M54"];

      Gehalt["M18"] = Gehalt["E18"] * Gehalt["F18"] * Gehalt["G18"];
      Gehalt["M19"] = Gehalt["E19"] * Gehalt["F19"] * Gehalt["G19"];
      Gehalt["M20"] = Gehalt["E20"] * Gehalt["F20"] * Gehalt["G20"];
      Gehalt["M21"] = Gehalt["E21"] * Gehalt["F21"] * Gehalt["G21"];
      Gehalt["M22"] = Gehalt["E22"] * Gehalt["F22"] * Gehalt["G22"];
      Gehalt["M23"] = Gehalt["E23"] * Gehalt["F23"] * Gehalt["G23"];
      Gehalt["M24"] = Gehalt["E24"] * Gehalt["F23"] * Gehalt["G24"];
      Gehalt["M25"] = Gehalt["E25"] * Gehalt["F25"] * Gehalt["G25"];
      Gehalt["M26"] = Gehalt["E26"] * Gehalt["F26"] * Gehalt["G26"];
      Gehalt["M27"] = Gehalt["E27"] * Gehalt["F27"] * Gehalt["G27"];
      Gehalt["M28"] = Gehalt["E28"] * Gehalt["F28"] * Gehalt["G28"];
      Gehalt["M29"] = Gehalt["E29"] * Gehalt["F29"] * Gehalt["G29"];
      Gehalt["M30"] = Gehalt["E30"] * Gehalt["F30"] * Gehalt["G30"];
      Gehalt["M31"] = Gehalt["E31"] * Gehalt["F31"] * Gehalt["G31"];
      Gehalt["M32"] = Gehalt["E32"] * Gehalt["F32"] * Gehalt["G32"];
      Gehalt["M33"] = Gehalt["E33"] * Gehalt["F33"] * Gehalt["G33"];
      Gehalt["M34"] = Gehalt["E34"] * Gehalt["F34"] * Gehalt["G34"];
      Gehalt["M35"] = Gehalt["E35"] * Gehalt["F35"] * Gehalt["G35"];

      Gehalt["M41"] =
        Gehalt["M17"] +
        Gehalt["M18"] +
        Gehalt["M19"] +
        Gehalt["M20"] +
        Gehalt["M21"] +
        Gehalt["M22"] +
        Gehalt["M23"] +
        Gehalt["M24"] +
        Gehalt["M25"] +
        Gehalt["M26"] +
        Gehalt["M27"] +
        Gehalt["M28"] +
        Gehalt["M29"] +
        Gehalt["M30"] +
        Gehalt["M31"] +
        Gehalt["M32"] +
        Gehalt["M33"] +
        Gehalt["M34"] +
        Gehalt["M35"] +
        Gehalt["M36"] +
        Gehalt["M37"] +
        Gehalt["M38"] +
        Gehalt["M39"];

      Gehalt["K43"] =
        Gehalt["E43"] +
        Gehalt["F43"] +
        Gehalt["G43"] +
        Gehalt["H43"] +
        Gehalt["I43"] +
        Gehalt["J43"];
      Gehalt["M44"] =
        Gehalt["E44"] +
        Gehalt["F44"] +
        Gehalt["G44"] +
        Gehalt["H44"] +
        Gehalt["I44"] +
        Gehalt["J44"];
      Gehalt["K47"] =
        Gehalt["G47"] + Gehalt["H47"] + Gehalt["I47"] + Gehalt["J47"];
      Gehalt["M48"] =
        Gehalt["G48"] + Gehalt["H48"] + Gehalt["I48"] + Gehalt["J48"];
      Gehalt["K55"] = Gehalt["K52"] + Gehalt["K53"] + Gehalt["K54"];
      Gehalt["K58"] =
        Gehalt["K41"] - Gehalt["K43"] - Gehalt["K47"] + Gehalt["K55"];
      Gehalt["M55"] = Gehalt["M52"] + Gehalt["M53"] + Gehalt["M54"];
      Gehalt["M58"] =
        Gehalt["M41"] - Gehalt["M44"] - Gehalt["M48"] + Gehalt["M55"];
      Gehalt["M59"] = Gehalt["M52"] < 0 ? -Gehalt["M52"] : Gehalt["M52"];
      Gehalt["K61"] = Gehalt["K58"] + Gehalt["K59"] + Gehalt["K60"];
      Gehalt["M61"] = Gehalt["M58"] + Gehalt["M59"] + Gehalt["M60"];
      Gehalt["M68"] = Gehalt["M61"] - Gehalt["K61"];
      //console.log(" Gehalt["M41"]" ,Gehalt["M41"]);
      console.log(" Gehalt", Gehalt);
      Gehalt["id"] = data[i]["TaxinfoId"];
      result.push(Gehalt);
    }

    //   if(eingabe.visible = true){
    //     eingabe.visible=false
    //   }
  } catch (err) {
    console.log(
      "upps, da ist leider ein Fehler aufgetreten, bitte wenden Sie sich an office@lohnkonzepte.de und melden sie den Fehler: BS_Print_5",
      err
    );
  }
  return result;
}
export default drucken;

// drucken(data);
