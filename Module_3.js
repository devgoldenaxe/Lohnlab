function faktoren(data, Daten) {
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
  let cb2, cbrutto, cEingabeDateType, cb5, cb6, cb7, cbsum;
  let lauf, zeile, aa, bb;
  let zelle;
  let Gewünschter_Nettolohn = 1979.74;
  let EingabeDateType = 2;
  //let Steuerpflichtiger_Arbeitslohn = 3490.88;
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

  // bb = 6;
  let EingabeG = [
    0.0, 0.0, 0.0, 9.0, 14.6, 1.7, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ];
  let EingabeB = [0.0, 0, 0, 9, 14.6, 1.7, 0, 1, 0, 0, 0, 0.0, 0.0];
  // let Eingabe = { stkl: 5, brutto: 3490.88 };
  let result;
  for (let i = 0; i < data.length; i++) {
    brutto = data[i]["O"] + data[i]["Uberstunden"];
    // console.log(brutto);
    stkl = data[i]["Steuerklasse"];
    if (!stkl) {
      stkl = 1;
      data[i]["Steuerklasse"] = 1;
    }
    if (!brutto) {
      brutto = 3000;
      data[i]["O"] = 3000;
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
    //console.log(brutto);
    Netto_A = nettoCalc(brutto, stkl, EingabeB, EingabeDateType);
    //Netto_A = EingabeB.reduce((sum, value) => sum + value, 0);

    // TODO Need to calculate CB
    console.log("---- R : ", data[i]["R"]);
    if (data[i]["R"]) {
      data[i]["CB"] = data[i]["R"] * 2.2 + data[i]["R"] * Daten.J3;
    }

    if (data[i]["CB"]) {
      brutto = brutto + data[i]["CB"];
    }
    //console.log(brutto);
    bruttoPlus = data[i]["CB"];
    console.log("bruttoplus", bruttoPlus);
    Netto_B = nettoCalc(brutto, stkl, EingabeB, EingabeDateType);

    console.log("nettoA", Netto_A);
    console.log("nettoB", Netto_B);

    let I2 = bruttoPlus;
    //let I2 = 654.75;
    //let B2 = 3200;
    //let A2 = 5;
    let C2 = Netto_A;
    let E2 = Netto_B;
    let F2 = E2 - C2;
    let G1 = I2 / 2;
    let G2 = F2 - G1;
    let H2 = G1 > 0 ? (G2 * 100) / G1 : 1;
    result = 1 + H2 / 100;

    console.log(brutto);
    console.log("result:", result);
    data[i]["Q"] = result;
    //console.log(data);
  }
  //console.log(Netto_A);
  //console.log(Krankenversicherungsbeitrag);

  function berechnungCalc(brutto, stkl) {
    let Eingabe = [0, 0, 1979.74, brutto, 2, stkl]; // brutto = 3490.88, stkl = 5
    Eingabe.push(...EingabeG); // EingabeG = [0.0, 0, 0, 9, 14.6, 1.7, 0, 1, 0, 0, 0, 0.0, 0.0]

    let P10 =
      Eingabe[7] < 2
        ? 0
        : Eingabe[8] < 3
        ? Q5
        : Eingabe[8] < 4
        ? Q6
        : Eingabe[8] < 5
        ? Q7
        : Q8;

    // let C31 = 1900.00;
    // let C32 = 1900.00;

    let R5 = 0.25;
    let R6 = 0.5;
    let R7 = 0.75;
    let R8 = 1;

    let Q5 = R5 / 100;
    let Q6 = R6 / 100;
    let Q7 = R7 / 100;
    let Q8 = R8 / 100;
    let Q10 = 1.7;

    let F3 = 14.0;
    let F4 = 1.6;
    let F5 = 18.6;
    let F6 = 2.6;
    let F7 = 3.4;
    let F8 = 2.2;
    let F9 = 0.6;
    let F10 = 1.7;
    let F11 = 7.65;
    let F15 = 90600;
    let F16 = 89400;
    let F17 = 62100;
    let F18 = 0.078;
    let F19 = 0.88;
    let F20 = 12485;
    let F21 = 31404;
    let F22 = 222260;
    let F23 = 10908;
    let F24 = 17543;
    let F25 = 1230;
    let F26 = 4008;
    let F27 = 36;
    let F28 = 8952;
    let F29 = 1900;
    let F30 = 3000;
    let F31 = 0.42;
    let F32 = 0.45;
    let F33 = 5.5;
    let F34 = 11.9;
    let F35 = 16000;
    let F36 = 62810;
    let F37 = 277826;
    let F38 = 192.59;
    let F39 = 2397;
    let F40 = 979.18;
    let F41 = 966.53;
    let F42 = 1400;
    let F43 = 9972.98;
    let F44 = 18307.73;

    let G3 = F3 / 2 + F4;
    let G4 = F4;
    let G5 = F5 / 2;
    let G6 = F6 / 2;
    let G7;

    if (Eingabe[13] === 1 && Eingabe[15] === 1) {
      G7 = F8 + F9;
    } else if (Eingabe[15] === 1) {
      G7 = F8;
    } else if (Eingabe[8] === 0 && Eingabe[13] === 1) {
      G7 = F7 / 2 + F9;
    } else {
      G7 = F7 - P10 - Q10;
    }

    let G11 = F3 / 2 + F7 - G7 + F10 / 2;

    let lookupTable = [
      //lookup table for K3 to L20
      [0, 0, 0],
      [1, 0.4, 1900],
      [2, 0.384, 1824],
      [3, 0.368, 1748],
      [4, 0.352, 1672],
      [5, 0.336, 1596],
      [6, 0.32, 1520],
      [7, 0.304, 1444],
      [8, 0.288, 1368],
      [9, 0.272, 1292],
      [10, 0.256, 1216],
      [11, 0.24, 1140],
      [12, 0.224, 1064],
      [13, 0.208, 988],
      [14, 0.192, 912],
      [15, 0.176, 836],
      [16, 0.16, 760],
      [17, 0.152, 722],
    ];

    // VLOOKUP function
    function vlookup(searchValue, table, columnIndex) {
      for (let i = 0; i < table.length; i++) {
        if (table[i][0] === searchValue) {
          return table[i][columnIndex - 1];
        }
      }
      return 0;
    }

    let C2 = Eingabe[5] > 4 ? 0 : Eingabe[8];
    let C3 = Eingabe[4];
    let C4 = Eingabe[7];
    let result;

    if (C3 === 1) {
      result = Eingabe[3] * 100;
    } else if (C3 === 2) {
      result = Eingabe[3] * 100 * 12;
    } else if (C3 === 3) {
      result = (Eingabe[3] * 100 * 360) / 7;
    } else {
      result = Eingabe[3] * 100 * 360;
    }

    let C5 = Math.floor(result * 100) / 100;
    let C6 = Eingabe[5];
    let C7 = C6 === 6 ? 0 : Eingabe[17] * 100;
    let C8 = Eingabe[18] * 100;
    let C9 = Eingabe[14] === 0 ? F15 : F16;
    function calculateC10() {
      let C10;
      if (Eingabe[10] > 20) {
        let deduction =
          Eingabe[12] === 1
            ? (Eingabe[14] === 1 ? sum(F11, F7, -F8) : sum(F11, F7 / 2)) *
              min(C5 / 100, F17)
            : 0;

        C10 = Math.max(C31, roundDown(Eingabe[10] * 12, 2) - deduction);
      } else {
        C10 = 0;
      }

      return C10;
    }

    let C11 =
      Eingabe[13] === 1 && Eingabe[15] === 1
        ? F8 + F9
        : Eingabe[15] === 1
        ? F8
        : Eingabe[8] === 0 && Eingabe[13] === 1
        ? F7 / 2 + F9
        : F7 - P10 - Q10;

    let C12 =
      Eingabe[6] === 0 || Eingabe[6] > 1 || Eingabe[5] !== 4 ? 1 : Eingabe[6];
    let C13 = vlookup(Eingabe[16], lookupTable, 2);
    let C14 = vlookup(Eingabe[16], lookupTable, 3) * 100;
    let C15 = C14;
    let C16 = Eingabe[16] === 0 ? 0 : C5 * C13 > C15 ? C15 : C5 * C13;
    let C17 = C5 - C8 + C7 - C16;
    let C18 = C5;
    let C20 = C17 / 100;
    let C21 = C18 / 100;
    let C23 = C6 === 3 ? 2 : 1;
    let C24 = F25;
    let C25 = C6 === 2 ? F26 : 0;
    let C26 = C6 > 5 ? 0 : F27;
    let C27 = C6 < 4 ? C2 * F28 : C6 === 4 ? (C2 * F28) / 2 : 0;
    let C28 = C6 === 6 ? 0 : C24 + C25 + C26;
    let C29 = Math.min(C9, C21);
    let C30 = C4 === 1 ? 0 : Math.floor(F19 * C29 * G5 * 100) / 10000;

    let C31 = C23 === 1 ? F29 : F30;
    let C32 = Math.min(C31, Math.floor(0.12 * C29 * 100) / 100);
    let C10 = calculateC10();
    let C33 = Eingabe[9] === 0 ? 0 : G4 + C11;
    let C34 =
      C10 > 0
        ? C6 === 6
          ? 0
          : C10
        : Math.floor(Math.min(C21, F17) * C33 * 100);
    let C35 = C34 > C32 ? C32 : C34;
    let sum = C30 + C35;
    let C36 = Math.ceil(sum);
    let C37 = Math.floor(C20 - C28 - C36);
    let C38 = Math.max(0, Math.floor(C37 / C23));
    let result2;

    if (C38 <= F23) {
      result2 = 0;
    } else if (C38 <= F35) {
      result2 = Math.floor(
        (((F41 * (C38 - F23)) / 10000 + F42) * (C38 - F23)) / 10000
      );
    } else if (C38 <= F36) {
      result2 = Math.floor(
        (((F38 * (C38 - F35)) / 10000 + F39) * (C38 - F35)) / 10000 + F40
      );
    } else if (C38 < F37) {
      result2 = Math.floor(C38 * F31 - F43);
    } else {
      result2 = Math.floor(C38 * F32 - F44);
    }

    let C39 = result2 * C23;
    let C40 = Math.min(F21, C38) * 1.25;
    let C41;

    if (C40 <= F23) {
      C41 = 0;
    } else if (C40 <= F35) {
      C41 = Math.floor(
        (((F41 * (C40 - F23)) / 10000 + F42) * (C40 - F23)) / 10000
      );
    } else if (C40 <= F36) {
      C41 = Math.floor(
        (((F38 * (C40 - F35)) / 10000 + F39) * (C40 - F35)) / 10000 + F40
      );
    } else if (C40 <= F37) {
      C41 = Math.floor(C40 * F31 - F43);
    } else {
      C41 = Math.floor(C40 * F32 - F44);
    }
    let C42 = Math.min(F21, C38) * 0.75;
    let C43;

    if (C42 <= F23) {
      C43 = 0;
    } else if (C42 <= F35) {
      C43 = Math.floor(
        (((F41 * (C42 - F23)) / 10000 + F42) * (C42 - F23)) / 10000
      );
    } else if (C42 <= F36) {
      C43 = Math.floor(
        (((F38 * (C42 - F35)) / 10000 + F39) * (C42 - F35)) / 10000 + F40
      );
    } else if (C42 < F37) {
      C43 = Math.floor(C42 * F31 - F43);
    } else {
      C43 = Math.floor(C42 * F32 - F44);
    }
    let C44 = (C41 - C43) * 2;
    let C45 = Math.floor(Math.min(C38, F21) * 0.14);
    let C46 = Math.max(C44, C45);
    let C47;

    if (C38 > F22) {
      C47 = (F22 - F21) * F31 + C46;
    } else {
      C47 = Math.floor(Math.max(C38 - F21, 0) * F31 + C46);
    }
    let C48;

    if (C38 > F20 && C38 <= F21) {
      C48 = C46;
    } else {
      C48 = 0;
    }
    let C49 = Math.floor(F20 * 0.14);
    let C50 = Math.min(Math.floor(Math.max(C38 - F20, 0) * F31 + C49), C47);
    let C51 = Math.floor(Math.max(C38 - F22, 0) * F32 + C50);
    let C52 = Math.floor((C6 < 5 ? C39 : C51) * C12);
    let C53 = C52 * 100;
    let C54;

    if (C3 === 1) {
      C54 = C53;
    } else if (C3 === 2) {
      C54 = Math.floor(C53 / 12);
    } else if (C3 === 3) {
      C54 = Math.floor((C53 * 7) / 360);
    } else {
      C54 = Math.floor(C53 / 360);
    }
    let C55 = C27 + C28;
    let C56 = Math.round(C5 / 100 - C36 - C55);
    let C57;

    if (C56 < 36) {
      C57 = 0;
    } else {
      C57 = C56 / C23;
    }
    let C58;

    if (C57 <= F23) {
      C58 = 0;
    } else if (C57 <= F35) {
      C58 = Math.floor(
        (((F41 * (C57 - F23)) / 10000 + F42) * (C57 - F23)) / 10000
      );
    } else if (C57 <= F36) {
      C58 = Math.floor(
        (((F38 * (C57 - F35)) / 10000 + F39) * (C57 - F35)) / 10000 + F40
      );
    } else if (C57 < F37) {
      C58 = Math.floor(C57 * F31 - F43);
    } else {
      C58 = Math.floor(C57 * F32 - F44);
    }

    C58 *= C23;

    let C59;

    if (C2 > 0) {
      C59 = Math.floor(C58 * C12);
    } else {
      C59 = C52;
    }
    let C60 = F24 * C23;
    let C61 = Math.floor(((C59 * F33) / 100) * 100) / 100;
    let C62 = ((C59 - C60) * F34) / 100;
    let C63 = Math.min(C62, C61);
    let C64 = C63 * 100;
    let C65;

    if (C3 === 1) {
      C65 = Math.floor(C64);
    } else if (C3 === 2) {
      C65 = Math.floor(C64 / 12);
    } else if (C3 === 3) {
      C65 = Math.floor((C64 * 7) / 360);
    } else {
      C65 = Math.floor(C64 / 360);
    }
    let C66;

    if (C59 > C60) {
      C66 = C65;
    } else {
      C66 = 0;
    }
    let C67 = C59 * 100;
    let C68;

    if (C3 === 1) {
      C68 = Math.floor(C67);
    } else if (C3 === 2) {
      C68 = Math.floor(C67 / 12);
    } else if (C3 === 3) {
      C68 = Math.floor((C67 * 7) / 360);
    } else {
      C68 = Math.floor(C67 / 360);
    }
    let C69;

    if (C3 === 1) {
      C69 = 12;
    } else if (C3 === 2) {
      C69 = 1;
    } else if (C3 === 3) {
      C69 = 84 / 360;
    } else {
      C69 = 12 / 360;
    }

    return {
      C9: C9,
      G6: G6,
      C69: C69,
      G11: G11,
      F17: F17,
      C11: C11,
    };
  }
  // let brutto = 3490.88;
  // let stkl = 5;
  // let EingabeG = [0.0, 0, 0, 9, 14.6, 1.7, 0, 1, 0, 0, 0, 0.0, 0.0];
  // Berechnungcalc(brutto, stkl, EingabeB);

  //function calculateAblauf

  function calculateAblauf(brutto, stkl, EingabeB) {
    let Eingabe = [0, 0, 1979.74, brutto, 2, stkl]; // brutto = 3490.88, stkl = 5
    Eingabe.push(...EingabeB); // EingabeG = [0.0, 0, 0, 9, 14.6, 1.7, 0, 1, 0, 0, 0, 0.0, 0.0]

    let B2 = Eingabe[6] !== 0 ? 1 : 0;
    let B3 = 0;
    let B4 = 0;
    let B5 = Eingabe[6];
    let B6 = Eingabe[14];
    let B7 = Eingabe[11];
    let B8 = Eingabe[4];
    let B9 = Eingabe[18];
    let B10 = Eingabe[17];
    let B11 = Eingabe[12];
    let B12 = 0;
    let B13 = Eingabe[15];
    let B14 = Eingabe[13];
    let B15 = Eingabe[9];
    let B16 = Eingabe[3] * 100;
    let B17 = 0;
    let B18 = Eingabe[5];
    let B19 = 0;
    let B20 = 0;
    let B21 = 0;
    let B22 = 0;
    let B23 = Eingabe[8];
    let B24 = 0;
    let B31 = B6 === 0 || B6 === 2 ? 90600 : 89400;
    let B32 = 0.093;
    let B33 = 62100;
    let B34 = B7 / 2 / 100 + 0.07;
    let B35 = 0.0085 + 0.07;
    let B36 = B13 === 1 ? 0 : B13 === 2 ? 0.22 : 0.017;
    let B37 = B13 === 1 ? 0 : B13 === 2 ? 0.012 : 0.017;
    let B38 = B14 ? B36 + 0.006 : B36;
    let B39 = 13279;
    let B40 = 33380;
    let B41 = 222260;
    let B42 = 11604;
    let B43 = 18130;
    let B46 =
      B8 === 1
        ? B16 / 100
        : B8 === 2
        ? (B16 * 12) / 100
        : B8 === 3
        ? (B16 * 360) / 7 / 100
        : (B16 * 360) / 100;
    let B47 =
      B8 === 1
        ? B19 / 100
        : B8 === 2
        ? (B19 * 12) / 100
        : B8 === 3
        ? (B19 * 360) / 7 / 100
        : (B19 * 360) / 100;
    let B48 =
      B8 === 1
        ? B9 / 100
        : B8 === 2
        ? (B9 * 12) / 100
        : B8 === 3
        ? (B9 * 360) / 7 / 100
        : (B9 * 360) / 100;
    let B49 =
      B8 === 1
        ? B10 / 100
        : B8 === 2
        ? (B10 * 12) / 100
        : B8 === 3
        ? (B10 * 360) / 7 / 100
        : (B10 * 360) / 100;
    let B50 = B2 === 0 ? 1 : B5;
    let B53 = B47 === 0 ? 0 : B22 < 2006 ? 1 : B22 < 2040 ? B22 - 2004 : 36;
    let B54 =
      B47 === 0
        ? 0
        : 0.4 - (B53 - 1) * 0.016 + (B53 > 16 ? (B53 - 16) * 0.008 : 0);
    let B55 =
      B47 === 0 ? 0 : 3000 - (B53 - 1) * 120 + (B53 > 16 ? (B53 - 16) * 60 : 0);
    let B56 =
      B47 === 0 ? 0 : 900 - (B53 - 1) * 36 + (B53 > 16 ? (B53 - 16) * 18 : 0);
    let B57 = B47 === 0 ? 0 : B8 !== 1 ? B20 * 12 + B21 : B20 * B24 + B21;
    let B58 = B47 === 0 ? 0 : B8 !== 1 ? B55 : (B55 / 12) * B24;
    let B59 = B47 === 0 ? 0 : B8 !== 1 ? B56 : Math.ceil((B56 / 12) * B24);
    let B60 = B47 === 0 ? 0 : Math.ceil(((B57 * B54) / 100) * 100) / 100;
    let B61 = B60 > B58 ? B60 : B58;
    let B62 = B57 / 100 - B61;
    let B63 = B59 > B62 ? Math.ceil(B62) : B59;
    let B66 = B4 === 0 ? 0 : B3 < 2006 ? 1 : B3 < 2040 ? B3 - 2004 : 36;
    let B67 =
      B4 === 0
        ? 0
        : 0.4 - (B66 - 1) * 0.016 + (B66 > 16 ? (B66 - 16) * 0.008 : 0);
    let B68 =
      B4 === 0 ? 0 : 1900 - (B66 - 1) * 76 + (B66 > 16 ? (B66 - 16) * 38 : 0);
    let B69 = B4 === 0 ? 0 : B46 - B47;
    let B70 = B4 === 0 ? 0 : Math.ceil(B69 * B67 * 100) / 100;
    let B71 = B68;
    let B72 = B70 > B71 ? B71 : B70;
    let B75 = B46 - B61 - B72 - B48 + B49;
    let B76 = B75 < 0 ? 0 : B75;
    let B77 = B46;
    let B78 = B47 - B61;
    let B79 = B78 < 0 ? 0 : B78;
    let B84 = B18 === 3 ? 2 : 1;
    let B85 =
      (B18 > 5
        ? 0
        : B79 === 0
        ? 0
        : B79 < Math.min(B63, 102)
        ? B79 - Math.min(B63, 102)
        : 102) + (B18 > 5 ? 0 : B76 === B79 ? 0 : Math.min(B76 - B79, 1230));
    let B86 = B18 === 2 ? 4260 : 0;
    let B87 = B18 > 5 ? 0 : 36;
    let B88 = B18 < 4 ? B23 * 9312 : B18 === 4 ? B23 * 4656 : 0;
    let B89 = B86 + B85 + B87 + (B79 < B63 ? B79 : B63);
    let B94 = 0;
    let B95 = B77 > B31 ? B31 : B77;
    let B96 = Math.trunc(B95 * B32 * 100) / 100;
    let B97 = B6 > 1 ? B94 : B96;
    let B98 = Math.trunc(0.12 * B95 * 100) / 100;
    let B99 = B18 === 3 ? 3000 : 1900;
    let B100 = B98 > B99 ? B99 : B98;
    let B101 = Math.ceil(B97 + B100);
    let B104 = B95 > B33 ? B33 : B95;
    let B105 = Math.floor(B104 * (B34 + B38) * 100) / 100;
    let B106 = 0;
    let B107 = (B11 * 12) / 100;
    let B108 = B107 - Math.floor(B104 * (B35 + B37) * 100) / 100;
    let B109 =
      B12 === 0 ? B105 : B12 > 0 && B18 === 6 ? B106 : B12 === 1 ? B107 : B108;
    let B110 = Math.ceil(B109 + B97);
    let B113 = B101 > B110 ? B101 : B110;
    let B116 = B76 - B89 - B113;
    let B119 = B116 < 1 ? 0 : Math.floor(B116 / B84);
    let B122 = 0;
    let B123 =
      B18 > 4 ? 0 : Math.floor(((B119 - B42) / 10000) * 1000000) / 1000000;
    let B124 = B123 * 922.98;
    let B125 = B18 > 4 ? 0 : B124 + 1400;
    let B126 = Math.floor(B125 * B123);
    let B127 =
      B18 > 4 ? 0 : Math.floor(((B119 - 17005) / 10000) * 1000000) / 1000000;
    let B128 = B127 * 181.19;
    let B129 = B18 > 4 ? 0 : B128 + 2397;
    let B130 = B129 * B127;
    let B131 = B18 > 4 ? 0 : Math.floor(B130 + 1025.38);
    let B132 = B18 > 4 ? 0 : Math.floor(B119 * 0.42 - 10602.13);
    let B133 = B18 > 4 ? 0 : Math.floor(B119 * 0.045 - 18936.88);
    let B134 =
      B119 < B42 + 1
        ? B122
        : B119 < 17006
        ? B126 * B84
        : B119 < 66761
        ? B131 * B84
        : B119 < 277826
        ? B132 * B84
        : B133 * B84;
    let B137 = B18 > 4 ? B119 : 0;
    let B138 = B137 > B40 ? B40 : B137;
    let B141 = B138 * 1.25;
    let B144 = 0;
    let B145 = Math.floor(((B141 - B42) / 10000) * 1000000) / 1000000;
    let B146 = B145 * 922.98;
    let B147 = B146 + 1400;
    let B148 = Math.floor(B147 * B145);
    let B149 = Math.floor(((B141 - 17005) / 10000) * 1000000) / 1000000;
    let B150 = B149 * 181.19;
    let B151 = B150 + 2397;
    let B152 = B151 * B149;
    let B153 = Math.floor(B152 + 1025.38);
    let B154 = Math.floor(B141 * 0.42 - 10602.13);
    let B155 = Math.floor(B141 * 0.45 - 18936.88);
    let B156 =
      B141 < B42 + 1
        ? B144
        : B141 < 17006
        ? B148 * B84
        : B141 < 66761
        ? B153 * B84
        : B141 < 277826
        ? B154 * B84
        : B155 * B84;
    let B157 = B156;
    let B158 = B138 * 0.75;
    let B161 = 0;
    let B162 = Math.floor(((B158 - B42) / 10000) * 1000000) / 1000000;
    let B163 = B162 * 922.98;
    let B164 = B163 + 1400;
    let B165 = Math.floor(B164 * B162);
    let B166 = Math.trunc(((B158 - 17005) / 10000) * 1000000) / 1000000;
    let B167 = B166 * 181.19;
    let B168 = B167 + 2397;
    let B169 = B168 * B166;
    let B170 = Math.floor(B169 + 1025.38);
    let B171 = Math.floor(B158 * 0.42) - 10602;
    let B172 = Math.floor(B158 * 0.45) - 18936.88;
    let B173 =
      B158 < B42 + 1
        ? B161
        : B158 < 17006
        ? B165 * B84
        : B158 < 66761
        ? B170 * B84
        : B158 < 277826
        ? B171 * B84
        : B172 * B84;
    let B174 = B173;
    let B175 = (B157 - B174) * 2;
    let B176 = Math.floor(B138 * 0.14);
    let B177 = B176 > B75 ? B176 : B175;
    let B178 = B137 > B39 ? B39 : B177;
    let B179 = B177;
    let B182 = B178 * 1.25;
    let B185 = 0;
    let B186 = Math.floor(((B182 - B42) / 10000) * 1000000) / 1000000;
    let B187 = B186 * 922.98;
    let B188 = B187 + 1400;
    let B189 = Math.floor(B188 * B186);
    let B190 = Math.floor(((B182 - 17005) / 10000) * 1000000) / 1000000;
    let B191 = B190 * 181.19;
    let B192 = B191 + 2397;
    let B193 = B192 * B190;
    let B194 = Math.floor(B193 + 1025.38);
    let B195 = Math.floor(B182 * 0.42 - 10602.13);
    let B196 = Math.floor(B182 * 0.45 - 18936.88);
    let B197 =
      B182 < B42 + 1
        ? B185
        : B182 < 17006
        ? B189 * B84
        : B182 < 66761
        ? B194 * B84
        : B182 < 277826
        ? B195 * B84
        : B196 * B84;
    let B198 = B197;
    let B199 = B178 * 0.75;
    let B202 = 0;
    let B203 = Math.trunc(((B199 - B42) / 10000) * 1000000) / 1000000;
    let B204 = B203 * 922.98;
    let B205 = B204 + 1400;
    let B206 = Math.ceil(B205 * B203);
    let B207 = Math.trunc(((B199 - 17005) / 10000) * 1000000) / 1000000;
    let B208 = B207 * 181.19;
    let B209 = B208 + 2397;
    let B210 = B209 * B207;
    let B211 = Math.ceil(B210 + 1025.38);
    let B212 = Math.ceil(B199 * 0.42) - 10602.13;
    let B213 = Math.ceil(B199 * 0.45) - 18936.88;
    let B214 =
      B199 < B42 + 1
        ? B202
        : B199 < 17006
        ? B206 * B84
        : B199 < 66761
        ? B211 * B84
        : B199 < 277826
        ? B212 * B84
        : B213 * B84;
    let B215 = B214;
    let B216 = (B198 - B215) * 2;
    let B217 = Math.floor(B178 * 0.14);
    let B218 = B217 > B216 ? B217 : B216;
    let B219 = Math.floor(B218 + (B137 - B39) * 0.42);
    let B220 = B219 < B179 ? B219 : B179;
    let B221 =
      B137 > B41
        ? Math.floor(B177 + (B41 - B40) * 0.42 + (B137 - B41) * 0.45)
        : B137 > B40
        ? Math.floor(B177 + (B137 - B40) * 0.42)
        : B137 > B39
        ? B220
        : B177;
    let B223 = Math.floor((B18 < 5 ? B134 : B221) * B50);
    let B226 = B223 * 100;
    let B229 =
      B8 === 1
        ? B226
        : B8 === 2
        ? Math.floor(B226 / 12)
        : B8 === 3
        ? Math.floor((B226 * 7) / 360)
        : Math.floor(B226 / 360);
    let B230 = B229;
    let B231 = B89 + B88;
    let B232 = B76 - B231 - B113;
    let B233 = B232 < 36 ? 0 : Math.floor(B232 / B84);
    let B236 = 0;
    let B237 = Math.floor(((B233 - B42) / 10000) * 1000000) / 1000000;
    let B238 = B237 * 922.98;
    let B239 = B238 + 1400;
    let B240 = Math.floor(B239 * B237);
    let B241 = Math.trunc(((B233 - 17005) / 10000) * 1000000) / 1000000;
    let B242 = B241 * 181.19;
    let B243 = B242 + 2397;
    let B244 = B243 * B241;
    let B245 = Math.floor(B244 + 1025.38);
    let B246 = Math.floor(B233 * 0.42) - 10602.13;
    let B247 = Math.floor(B233 * 0.45) - 18936.88;
    let B248 =
      B233 < B42 + 1
        ? B236
        : B233 < 17006
        ? B240 * B84
        : B233 < 66761
        ? B245 * B84
        : B233 < 277826
        ? B246 * B84
        : B247 * B84;
    let B249 = B23 > 0 ? Math.floor(B248 * B50) : B223;
    let B252 = B43 * B84;
    let B253 = Math.floor(((B249 * 5.5) / 100) * 100) / 100;
    let B254 = Math.ceil((((B249 - B252) * 11.9) / 100) * 100) / 100;
    let B255 = B254 < B253 ? B254 : B253;
    let B256 = B255 * 100;
    let B259 =
      B8 === 1
        ? B256
        : B8 === 2
        ? Math.floor(B256 / 12)
        : B8 === 3
        ? Math.floor((B256 * 7) / 360)
        : Math.floor(B256 / 360);
    let B260 = B249 > B252 ? B259 : 0;
    let B261 = B249 * 100;
    let B264 =
      B8 === 1
        ? B261
        : B8 === 2
        ? Math.floor(B261 / 12)
        : B8 === 3
        ? Math.floor((B261 * 7) / 360)
        : Math.floor(B261 / 360);
    let B265 = B15 > 0 ? B264 : 0;
    return {
      B230: B230,
      B260: B260,
      B265: B265,
    };
  }
  // calculateAblauf();

  function nettoCalc(brutto, stkl, EingabeB, EingabeDateType) {
    let AblaufResult = calculateAblauf(brutto, stkl, EingabeB);
    //console.log(AblaufResult);
    // AblaufResult = {
    //     B230: 0,
    //     B260: 0,
    //     B265: 0,
    // };
    let Lohnsteuer = AblaufResult.B230 / 100;
    let Solidaritätszuschlag = AblaufResult.B260 / 100;
    let Kirchensteuer =
      Math.trunc(((AblaufResult.B265 * EingabeB[3]) / 10000) * 100) / 100;
    let berechnungResult = berechnungCalc(brutto, stkl, EingabeB);
    //console.log(berechnungResult);
    // berechnungResult = {
    //     C9: 0,
    //     G6: 0,
    //     C69: 1,
    //     G11: 9.25,
    //     F17: 62100,
    // };

    let Rentenversicherung;
    if (EingabeB[1] === 0) {
      let rentenversicherungResult;
      if (EingabeDateType === 1) {
        if (brutto > berechnungResult.C9) {
          rentenversicherungResult = berechnungResult.C9;
        } else {
          rentenversicherungResult = brutto;
        }
      } else if (EingabeDateType === 2) {
        if (brutto > berechnungResult.C9 / 12) {
          rentenversicherungResult = berechnungResult.C9 / 12;
        } else {
          rentenversicherungResult = brutto;
        }
      } else if (EingabeDateType === 3) {
        if (brutto > (berechnungResult.C9 / 360) * 7) {
          rentenversicherungResult = (berechnungResult.C9 / 360) * 7;
        } else {
          rentenversicherungResult = brutto;
        }
      } else {
        if (brutto > berechnungResult.C9 / 360) {
          rentenversicherungResult = berechnungResult.C9 / 360;
        } else {
          rentenversicherungResult = brutto;
        }
      }
      Rentenversicherung =
        Math.round(rentenversicherungResult * 0.093 * 100) / 100;
    } else {
      Rentenversicherung = 0;
    }

    let Krankenversicherungsbeitrag;
    if (EingabeB[4] > 20) {
      if (EingabeB[6] === 0) {
        Krankenversicherungsbeitrag = EingabeB[4] * berechnungResult.C69;
      } else {
        Krankenversicherungsbeitrag = Math.max(
          (EingabeB[4] / 2) * berechnungResult.C69,
          (EingabeB[4] - (berechnungResult.G11 * berechnungResult.F17) / 12) *
            berechnungResult.C69
        );
      }
    } else {
      if (EingabeB[4] === 0) {
        Krankenversicherungsbeitrag = 0;
      } else {
        let Krankenversicherungsbeitrag_intermediate;
        if (EingabeDateType === 1) {
          if (brutto > berechnungResult.F17) {
            Krankenversicherungsbeitrag_intermediate = berechnungResult.F17;
          } else {
            Krankenversicherungsbeitrag_intermediate = brutto;
          }
        } else if (EingabeDateType === 2) {
          if (brutto > berechnungResult.F17 / 12) {
            Krankenversicherungsbeitrag_intermediate =
              berechnungResult.F17 / 12;
          } else {
            Krankenversicherungsbeitrag_intermediate = brutto;
          }
        } else if (EingabeDateType === 3) {
          if (brutto > (berechnungResult.F17 / 360) * 7) {
            Krankenversicherungsbeitrag_intermediate =
              (berechnungResult.F17 / 360) * 7;
          } else {
            Krankenversicherungsbeitrag_intermediate = brutto;
          }
        } else {
          if (brutto > berechnungResult.F17 / 360) {
            Krankenversicherungsbeitrag_intermediate =
              berechnungResult.F17 / 360;
          } else {
            Krankenversicherungsbeitrag_intermediate = brutto;
          }
        }
        Krankenversicherungsbeitrag =
          (Krankenversicherungsbeitrag_intermediate *
            (((EingabeB[4] + EingabeB[5]) / 2) * 100)) /
          100;
        Krankenversicherungsbeitrag = Number(
          (Krankenversicherungsbeitrag / 100).toFixed(2)
        );
      }
    }

    let Pflegeversicherung;
    if (EingabeB[4] > 20) {
      Pflegeversicherung = 0;
    } else if (EingabeB[4] == 0) {
      Pflegeversicherung = 0;
    } else {
      let tempPflegeversicherung;
      if (EingabeDateType == 1) {
        if (brutto > berechnungResult.F17) {
          tempPflegeversicherung = berechnungResult.F17;
        } else {
          tempPflegeversicherung = brutto;
        }
        //console.log(tempPflegeversicherung);
      } else if (EingabeDateType == 2) {
        if (brutto > berechnungResult.F17 / 12) {
          tempPflegeversicherung = berechnungResult.F17 / 12;
        } else {
          tempPflegeversicherung = brutto;
        }
        //console.log(tempPflegeversicherung);
      } else if (EingabeDateType == 3) {
        if (brutto > (berechnungResult.F17 / 360) * 7) {
          tempPflegeversicherung = (berechnungResult.F17 / 360) * 7;
        } else {
          tempPflegeversicherung = brutto;
        }
        //console.log(tempPflegeversicherung);
      } else {
        if (brutto > berechnungResult.F17 / 360) {
          tempPflegeversicherung = berechnungResult.F17 / 360;
        } else {
          tempPflegeversicherung = brutto;
        }
        //console.log(tempPflegeversicherung);
      }

      Pflegeversicherung =
        (tempPflegeversicherung * berechnungResult.C11) / 100;

      Pflegeversicherung = Math.round(Pflegeversicherung * 100) / 100;

      // console.log(berechnungResult.C9);
    }

    let Arbeitslosenversicherung = 0;
    if (EingabeB[1] == 0) {
      if (EingabeDateType == 1) {
        if (brutto > berechnungResult.C9) {
          Arbeitslosenversicherung = berechnungResult.C9;
        } else {
          Arbeitslosenversicherung = brutto;
        }
      } else if (EingabeDateType == 2) {
        if (brutto > berechnungResult.C9 / 12) {
          Arbeitslosenversicherung = berechnungResult.C9 / 12;
        } else {
          Arbeitslosenversicherung = brutto;
        }
      } else if (EingabeDateType == 3) {
        if (brutto > (berechnungResult.C9 / 360) * 7) {
          Arbeitslosenversicherung = (berechnungResult.C9 / 360) * 7;
        } else {
          Arbeitslosenversicherung = brutto;
        }
      } else {
        if (brutto > berechnungResult.C9 / 360) {
          Arbeitslosenversicherung = berechnungResult.C9 / 360;
        } else {
          Arbeitslosenversicherung = brutto;
        }
      }
      Arbeitslosenversicherung =
        Math.round(Arbeitslosenversicherung * berechnungResult.G6 * 100) /
        10000;
      //console.log("Arbeitslosenversicherung", Arbeitslosenversicherung);
    }

    console.log(
      "Abzuge",
      Lohnsteuer,
      Solidaritätszuschlag,
      Kirchensteuer,
      Rentenversicherung,
      Krankenversicherungsbeitrag,
      Pflegeversicherung,
      Arbeitslosenversicherung
    );
    console.log("brutto val", brutto);
    return (
      brutto -
      (Lohnsteuer +
        Solidaritätszuschlag +
        Kirchensteuer +
        Rentenversicherung +
        Krankenversicherungsbeitrag +
        Pflegeversicherung +
        Arbeitslosenversicherung)
    );
  }

  return data;
}
module.exports = faktoren;
//faktoren();

// const data = [
//     {
//         "AN PersNr": "1",
//         "AN Nachname": "Nicole",
//         "brutto Gehalt": 3490.88,
//         Steuerklasse: 5,
//         Uberstunden: 0,
//     },

//     {
//         "AN PersNr": "2",
//         "AN Nachname": "jacl",
//         "brutto Gehalt": 7600,
//         Steuerklasse: 5,
//         Uberstunden: 0,
//     },

//     {
//         "AN PersNr": "3",
//         "AN Nachname": "Nick",
//         "brutto Gehalt": 4567.88,
//         Steuerklasse: 5,
//         Uberstunden: 0,
//     },
// ];
