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

let sach = 50;
let handy = 20;
let Internet = 50;
let CL = 108.5;
let Werbung = 21;
let garage = 40;
let Fehlgeld = 16;

let data = [
  {
    "AN PersNr": "1",
    "AN Nachname": "Nicole",
    "brutto Gehalt": 3500,
    Steuerklasse: 1,
    Uberstunden: 0,
    R: 0,
    AL: 0,
    Z: 0,
    T: 0,
    AN: 0,
    BM: 0,
    Y: 0,
    AX: 0,
    AP: 0,
    AR: 0,
    AT: 0,
    X: 0,
    BT: 0,
    BC: 0,
    S: "ja",
    V: 0,
    W: "ja",
    AB: "nein",
    AF: 0,
    U: 0,
    BI: 0,
    CC: 0,
    Q: 0,
    AD: 0,
  },
];

function processBS(BS) {
  let Daten = {
    T1: 7.23,
    T2: 3,
    T3: 14,
    T4: 3,
  };

  for (let i = 0; i < data.length; i++) {
    let gesamt = data[i]["R"]; // Initial amount
    let BS_result;
    let spalte;

    // Determine BS_result and spalte based on the value of BS
    switch (BS) {
      case "Sachbezug":
        BS_result = 50 - (data[i]["AL"] - data[i]["Z"]);
        spalte = 38;
        console.log("BS_result", BS_result);
        break;
      case "Handy":
        BS_result = data[i]["T"] - data[i]["AN"];
        spalte = 40;
        break;
      case "Internet":
        BS_result = 50 - data[i]["BM"];
        spalte = 65;
        break;
      case "CleverLunch":
        BS_result = data[i]["Y"] * Daten.T1 * Daten.T1 - data[i]["AX"];
        spalte = 50;
        break;
      case "Werbung":
        BS_result = 21 - data[i]["AP"];
        spalte = 42;
        break;
      case "Garage":
        BS_result = 40 - data[i]["AR"];
        spalte = 44;
        break;
      case "Fehlgeld":
        BS_result = 16 - data[i]["AT"];
        spalte = 46;
        break;
      case "Fahrkosten":
        spalte = 63;
        break;
      case "Kindergarten":
        spalte = 61;
        break;
      case "Verpflegungsmehraufwand":
        BS_result = data[i]["Y"] * Daten.T3 * Daten.T4 - data[i]["BC"];
        spalte = 55;

        break;
      default:
        for (let j = 0; j < data.length; j++) {
          if (data[j]["AF"] > 0 && data[j]["U"] > 0) {
            if (data[j]["AF"] > data[j]["U"]) {
              data[j]["BI"] = data[j]["U"];
              data[j]["AF"] -= data[j]["BI"];
            } else {
              data[j]["BI"] = data[j]["AF"];
              data[j]["AF"] = 0;
            }
          }
        }
    }

    if (BS !== "Sachbezug") {
      if (BS !== "Internet") {
        if (BS !== "CleverLunch") {
          if (BS !== "Fehlgeld") {
            if (BS !== "Handy") {
              if (BS !== "Werbung") {
                if (BS !== "Garage") {
                  if (BS !== "Kindergarten") {
                    if (BS !== "Verpflegungsmehraufwand") {
                      if (BS === "Fahrkosten") {
                        if (data[i]["S"] === "ja") {
                          BS_result = 1;
                          console.log("BS_result", BS_result);
                        } else {
                          let Fahrt = data[i]["V"];
                          if (Fahrt > 20) {
                            BS_result =
                              20 * (data[i]["Y"] * 3) * 0.3 +
                              (Fahrt - 20) * (data[i]["Y"] * 3) * 0.38;
                            console.log("BS_result", BS_result);
                          } else {
                            BS_result = Fahrt * (data[i]["Y"] * 3) * 0.3;
                          }
                        }

                        if (BS_result > gesamt) {
                          BS_result = gesamt;
                          gesamt = 0;
                          console.log("BS_result", BS_result); // Corrected from setting BS_result to 0
                        } else {
                          gesamt -= BS_result;
                        }

                        return;
                      } else {
                        // Verpflegungsmehraufwand
                        if (data[i]["W"] !== "ja") {
                          BS_result = 0;
                        }

                        if (BS_result > gesamt) {
                          BS_result = gesamt;
                          gesamt = 0;
                        } else {
                          gesamt -= BS_result;
                        }

                        return;
                      }
                    } else {
                      // Kindergarten
                      if (BS_result > gesamt) {
                        BS_result = gesamt;
                        gesamt = 0;
                      } else {
                        gesamt -= BS_result;
                      }

                      return;
                    }
                  } else {
                    // Garage
                    if (data[i]["S"] !== "ja") {
                      BS_result = 0;
                    } else {
                      if (BS_result > gesamt) {
                        BS_result = gesamt;
                        gesamt = 0;
                        console.log("BS_result", BS_result);
                      } else {
                        gesamt -= BS_result;
                      }
                    }

                    return;
                  }
                } else {
                  // Werbung
                  if (data[i]["S"] === "ja") {
                    BS_result = 0;
                  } else {
                    if (BS_result > gesamt) {
                      BS_result = gesamt;
                      gesamt = 0;
                    } else {
                      gesamt -= BS_result;
                    }
                  }

                  return;
                }
              } else {
                // Handy
                if (data[i]["Y"] !== "ja") {
                  if (BS_result > gesamt) {
                    BS_result = gesamt;
                    gesamt = 0;
                  } else {
                    gesamt -= BS_result;
                  }
                } else {
                  BS_result = 0;
                }

                return;
              }
            } else {
              // Fehlgeld
              if (data[i]["AB"] === "ja") {
                if (BS_result > gesamt) {
                  BS_result = gesamt;
                  gesamt = 0;
                } else {
                  gesamt -= BS_result;
                }
              } else {
                BS_result = 0;
              }

              return;
            }
          } else {
            // CleverLunch
            if (data[i]["W"] === "ja") {
              BS_result = 0;
            }
            if (BS_result > gesamt) {
              BS_result = gesamt;
              gesamt = 0;
            } else {
              gesamt -= BS_result;
            }

            return;
          }
        } else {
          // Internet
          if (BS_result > gesamt) {
            BS_result = gesamt;
            gesamt = 0;
          } else {
            gesamt -= BS_result;
          }

          return;
        }
      } else {
        // Sachbezug
        if (BS_result > gesamt) {
          BS_result = gesamt;
          gesamt = 0;
        } else {
          gesamt -= BS_result;
        }

        return;
      }
    } else {
      if (BS_result > gesamt) {
        BS_result = gesamt;
        gesamt = 0;
      } else {
        gesamt -= BS_result;
      }
      // console.log("BS_Result", BS_result);

      return;
    }
  }
}

for (let bsi = 0; bsi < BSlist.length && bsi < 10; bsi++) {
  processBS(BSlist[bsi], bsi);
}

for (let i = 0; i < data.length; i++) {
  if (data[i]["AF"] > 0 && data[i]["U"] > 0) {
    if (data[i]["AF"] > data[i]["U"]) {
      data[i]["BI"] = data[i]["U"];
      data[i]["AF"] -= data[i]["BI"];
    } else {
      data[i]["BI"] = data[i]["AF"];
      data[i]["AF"] = 0;
    }
  }
}

let Daten2 = {
  B1: 0,
  B2: 1,
  B3: 2,
  B4: 3,
  B5: 4,
  B6: 5,
  B7: 6,
  B8: 7,
  B9: 8,
  B10: 9,
  B11: 10,
  B12: 11,
  B13: 12,
  B14: 13,
  B15: 14,
  B16: 15,
  G1: 0,
  G2: 1,
  G3: 2,
  G4: 3,
  G5: 4,
  G6: 5,
  G7: 6,
  G8: 7,
  G9: 8,
  G10: 9,
  G11: 10,
  G12: 11,
  G13: 12,
  G14: 13,
  G15: 14,
  G16: 15,
};

// Calculations using A1 and F1
let A1 = 7.23;
let A2 = Daten2.B2 * A1;
let A3 = Daten2.B3 * A1;
let A4 = Daten2.B4 * A1;
let A5 = Daten2.B5 * A1;
let A6 = Daten2.B6 * A1;
let A7 = Daten2.B7 * A1;
let A8 = Daten2.B8 * A1;
let A9 = Daten2.B9 * A1;
let A10 = Daten2.B10 * A1;
let A11 = Daten2.B11 * A1;
let A12 = Daten2.B12 * A1;
let A13 = Daten2.B13 * A1;
let A14 = Daten2.B14 * A1;
let A15 = Daten2.B15 * A1;
let A16 = Daten2.B16 * A1;

let F1 = 14;
let F2 = Daten2.G2 * F1;
let F3 = Daten2.G3 * F1;
let F4 = Daten2.G4 * F1;
let F5 = Daten2.G5 * F1;
let F6 = Daten2.G6 * F1;
let F7 = Daten2.G7 * F1;
let F8 = Daten2.G8 * F1;
let F9 = Daten2.G9 * F1;
let F10 = Daten2.G10 * F1;
let F11 = Daten2.G11 * F1;
let F12 = Daten2.G12 * F1;
let F13 = Daten2.G13 * F1;
let F14 = Daten2.G14 * F1;
let F15 = Daten2.G15 * F1;
let F16 = Daten2.G16 * F1;

for (let i = 0; i < data.length; i++) {
  if (data[i]["AX"] > 0) {
    data[i]["AW"] = Math.round(data[i]["AX"] * 100) / 100;
    let CL = data[i]["AX"];

    if (CL <= A2) {
      data[i]["AW"] = 1;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A2 && CL <= A3) {
      data[i]["AW"] = 2;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A3 && CL <= A4) {
      data[i]["AW"] = 3;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A4 && CL <= A5) {
      data[i]["AW"] = 4;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A5 && CL <= A6) {
      data[i]["AW"] = 5;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A6 && CL <= A7) {
      data[i]["AW"] = 6;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A7 && CL <= A8) {
      data[i]["AW"] = 7;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A8 && CL <= A9) {
      data[i]["AW"] = 8;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A9 && CL <= A10) {
      data[i]["AW"] = 9;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A10 && CL <= A11) {
      data[i]["AW"] = 10;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A11 && CL <= A12) {
      data[i]["AW"] = 11;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A12 && CL <= A13) {
      data[i]["AW"] = 12;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A13 && CL <= A14) {
      data[i]["AW"] = 13;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A14 && CL <= A15) {
      data[i]["AW"] = 14;
      data[i]["AV"] = CL / data[i]["AW"];
    } else if (CL > A15 && CL <= A16) {
      data[i]["AW"] = 15;
      data[i]["AV"] = CL / data[i]["AW"];
    }
  }

  if (data[i]["BC"] > 0) {
    data[i]["BC"] = Math.round(data[i]["BC"] * 100) / 100;
    let CL = data[i]["AX"];

    if (CL <= F2) {
      data[i]["BB"] = 1;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F2 && CL <= F3) {
      data[i]["BB"] = 2;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F3 && CL <= F4) {
      data[i]["BB"] = 3;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F4 && CL <= F5) {
      data[i]["BB"] = 4;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F5 && CL <= F6) {
      data[i]["BB"] = 5;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F6 && CL <= F7) {
      data[i]["BB"] = 6;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F7 && CL <= F8) {
      data[i]["BB"] = 7;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F8 && CL <= F9) {
      data[i]["BB"] = 8;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F9 && CL <= F10) {
      data[i]["BB"] = 9;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F10 && CL <= F11) {
      data[i]["BB"] = 10;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F11 && CL <= F12) {
      data[i]["BB"] = 11;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F12 && CL <= F13) {
      data[i]["BB"] = 12;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F13 && CL <= F14) {
      data[i]["BB"] = 13;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F14 && CL <= F15) {
      data[i]["BB"] = 14;
      data[i]["BA"] = CL / data[i]["BB"];
    } else if (CL > F15 && CL <= F16) {
      data[i]["BB"] = 15;
      data[i]["BA"] = CL / data[i]["BB"];
    }
  }

  if (data[i]["AF"] > 0) {
    data[i]["AG"] = Math.round((data[i]["AF"] / data[i]["Q"]) * 100) / 100;
  }

  if (data[i]["CC"] > 0) {
    data[i]["AD"] = ((data[i]["CC"] - data[i]["AG"]) * data[i]["AD"]) / 100;
  }
  console.log("CL", CL);

  console.log(data);
  console.log(A2);
  console.log(A3);
  console.log(A4);
  console.log(A5);
  console.log(A6);
  console.log(A7);
  console.log(A8);
  console.log(A9);
  console.log(A10);
  console.log(A11);
  console.log(A12);
  console.log(A13);
  console.log(A14);
  console.log(A15);
  console.log(A16);
  console.log(F2);
  console.log(F3);
  console.log(F4);
  console.log(F5);
  console.log(F6);
  console.log(F7);
  console.log(F8);
  console.log(F9);
  console.log(F10);
  console.log(F11);
  console.log(F12);
  console.log(F13);
  console.log(F14);
  console.log(F15);
  console.log(F16);
}
