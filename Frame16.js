function frame16() {
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
      AD: 0,
      AC: " ",
      Y: 33,
      AE: "brutto",
      Q: 1.05,
      CC: 0,
      AG: 0,
      AS: 0,
      AU: 0,
      BK: 0,
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
  let AD_val = 18.6;
  let E2 = "brutto";

  let Daten = [
    {
      J3: 20,
      J1: 22,
      J2: 8.9,
      J4: 0.5,
      J5: 1.28,
    },
  ];

  // let Daten2 = [
  //     {
  //         D1: 0,
  //     },
  // ];

  try {
    // Initialize UI elements (uncomment and define as needed)
    // const progressBar1 = { value: 10, visible: true };
    // const image17 = { visible: false };
    // const label52 = { caption: "" };
    // const label17 = { caption: "" };

    if (
      data.AL > 0 ||
      data.AN > 0 ||
      data.AP > 0 ||
      data.AR > 0 ||
      data.AS > 0 ||
      data.AU > 0 ||
      data.BK > 0 ||
      data.BM > 0
    ) {
      // let isBestandskunde = confirm(
      //     "Es sind bereits Bausteine verteilt. Handelt es sich um einen Bestandskunden?"
      // );
      // if (isBestandskunde) {
      //     // If user selects "Yes"
      //     alert(
      //         "Bestandskunde: es werden nur Bausteine berechnet, die noch nicht oder noch nicht vollständig ausgenutzt werden"
      //     );
      // } else {
      //     // If user selects "No"
      //     alert(
      //         "kein Bestandskunde, alle bereits verteilten Bausteine werden gelöscht"
      //     );
      //     function process_leeren() {
      //     let leeren = require("./leeren.js");
      //     data = leeren(data);
      // }
      // process_leeren();
      // }
    }
    let textBox1Value = 20;
    let textBox6Value = 22;
    let textBox7Value = 8.9;
    let textBox8Value = 1.28;

    Daten.J3 = textBox1Value;
    textBox1Value = parseFloat(textBox1Value) / 100;
    Daten.J1 = textBox6Value;
    Daten.J2 = textBox7Value;
    Daten.J5 = textBox8Value;
    console.log("textbox1value : ", textBox6Value);
    // Daten2.D1 = parseFloat(textBox5Value);

    // const listeANBausteineRange = {
    //     E3: "Erhöhung",
    //     E4: "individuell",
    //     E2: comboBox1Value,
    //     O4: textBox1Value + " %",
    //     O3: "Aufschlag:",
    // };

    for (let i = 0; i < data.length; i++) {
      data[i]["R"] = 1000;
      E2 = "netto";
      Daten.J3 = 0;

      if (data[i]["S"] == "ja" && !data[i]["V"]) {
        // alert(
        //     `In Zeile ${i} ist Dienstwagen und km Erstattung gleichzeitig eingetragen, km Angabe wird entfernt`
        // );
        data[i]["V"] = 0;
      }

      if (data[i]["AC"] == "ja" && data[i]["V"] !== "") {
        // alert(
        //     `In Zeile ${i} ist vorhandenes JobTicket und km Erstattung gleichzeitig eingetragen, km Angabe wird entfernt`
        // );
        data[i]["V"] = "";
      }

      if (data[i]["Y"] == "") {
        data[i]["Y"] = 5;
      }

      let faktor;
      if (textBox1Value == "") {
        textBox1Value = 0;
        faktor = 1;
      } else {
        faktor = 1 + parseFloat(textBox1Value) / 100;
      }

      if (E2 == "netto") {
        data[i]["R"] *= faktor;
        data[i]["AE"] = "netto";
      } else if (E2 == "brutto") {
        data[i]["R"] = (data[i]["R"] / 2) * data[i]["Q"] * faktor;
        data[i]["AE"] = "brutto";
      }
    }

    function process_setzen() {
      let setzen = require("./Module_2.js");
      data = setzen(data, BSlist);
    }
    process_setzen();
    //console.log(setzen);
    /*  const setzen = require('./Module_2.js');

            setzen();        ----> method for calling setzen function from athother file
            */

    for (let i = 0; i < data.length; i++) {
      data[i]["R"] = data[i]["BX"];
      data[i]["AF"] = "";
      data[i]["AG"] = "";
      data[i]["CC"] = (data[i]["R"] / data[i]["Q"]) * 2;

      if (data[i]["CC"] > 0) {
        data[i]["18.6"] = ((data[i]["CC"] - data[i]["AG"]) * 18.6) / 100;
      }
    }
    console.log("Rvalue : ", data["R"]);

    // Update UI elements with calculated values (uncomment and define as needed)
    // label52.caption = `${(1234.56).toFixed(2)} €`;
    // label17.caption = `${(78.9).toFixed(2)} €`;
    // progressBar1.visible = false;

    // setTimeout(() => {
    //     image17.visible = false;
    // }, 3000);
  } catch (error) {
    console.error(
      "Upps, da ist leider ein Fehler aufgetreten, bitte wenden Sie sich an office@lohnkonzepte.de und melden Sie den Fehler: BS_indi_3",
      error
    );
  }
}
frame16();
