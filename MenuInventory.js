function main() {
    try {
        // progressBar1.value = 10;
        // progressBar1.visible = true;
        let textBox3Value = 0;
        let textBox4Value = 0;
        let textBox5Value = 0;

        let textBox6Value = 0;
        let textBox7Value = 0;
        let textBox8Value = 0;
        let textBox1Value = 0;
        let comboBox1Value = "netto";
        if (textBox3Value > 0 && textBox4Value > 0) {
            // alert(
            //     "Wählen Sie bitte eine Gehaltserhöhung in % ODER eine Gehaltserhöhung in Euro, einer der beiden Werte muss Null sein"
            // );
            return;
        }

        let data = [
            {
                "AN PersNr": "1",
                "AN Nachname": "Nicole",
                "brutto Gehalt": 3500,
                Steuerklasse: 1,
                Uberstunden: 0,
                R: 1,
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
                R: " ",
                AE: "brutto",
                Q: 1.05,
                CC: 0,
                AG: 0,
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
        let Daten = [{ J3: "20%", J1: 22, J2: [8, 9], J5: [1, 28] }];

        if (
            data[0]["AL"] > 0 ||
            data[0]["AN"] > 0 ||
            data[0]["AP"] > 0 ||
            data[0]["AR"] > 0 ||
            data[0]["AT"] > 0 ||
            data[0]["AX"] > 0 ||
            data[0]["BK"] > 0 ||
            data[0]["BM"] > 0
        ) {
            let isBestandskunde = confirm(
                "Es sind bereits Bausteine verteilt. Handelt es sich um einen Bestandskunden?"
            );
            if (isBestandskunde) {
                // alert(
                //     "Bestandskunde: es werden nur Bausteine berechnet, die noch nicht oder noch nicht vollständig ausgenutzt werden"
                // );
            } else {
                // alert(
                //     "kein Bestandskunde, alle bereits verteilten Bausteine werden gelöscht"
                // );
                function process_leeren() {
                  let leeren = require("./leeren.js");
                  data = leeren(data);
              }
              process_leeren();
            }
        }

        let i = 0;
        data[i]["E2"] = comboBox1Value;
        data[i]["02"] = `${textBox1Value} %`;
        data[i]["03"] = "Aufschlag:";

        if (textBox1Value === "") {
            textBox1Value = 0;
        }
        Daten["J3"] = parseFloat(textBox5Value) / 100;
        Daten["J1"] = textBox6Value;
        Daten["J2"] = textBox7Value;
        Daten["J5"] = textBox8Value;

        for (let ii = 1; ii <= 2; ii++) {
            //progressBar1.value += 20;
            if (ii === 1) {
                // Call a function to set factors
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
                    data[i]["Y"] = parseFloat(textBox5Value);
                }

                if (textBox3Value === "") {
                    textBox3Value = 0;
                }

                if (textBox4Value === "") {
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
                        data[i]["O"] *
                        ((parseFloat(textBox3Value) / 100) * faktor);
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
                        data[i]["O"] *
                        (parseFloat(textBox3Value) / 100) *
                        faktor;
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
                        (parseFloat(textBox4Value) / 100 / 2) *
                        data[i]["Q"] *
                        faktor;
                    data[i]["E3"] = "Erhöhung in %";
                    data[i]["E4"] = textBox4Value;
                    data[i]["CC"] = parseFloat(textBox4Value) * faktor;
                }
            }
            if (ii === 1) {
                function process_Faktoren() {
                    const faktoren = require("./Module_3.js");
                    data = faktoren(data);
                }
                process_Faktoren();
            }
        }

        
          function process_setzen() {
            const setzen = require("./Module_2.js");
            data = setzen(data, BSlist);
        }
        process_setzen();
        

        for (let i = 0; i < data.length; i++) {
            if (data[i]["AE"] === "netto") {
                data[i]["CC"] = (data[i]["R"] / data[i]["Q"]) * 2;
            } else if (data[i]["CC"] > 0) {
                data[i]["AD"] =
                    (data[i]["CC"] - data[i]["AG"] * data[6]["AD"]) / 100;
            }
        }

        // Output the final state of the data array
        console.log(data);
    } catch (e) {
        console.error("An error occurred:", e);
    }
}
main();
