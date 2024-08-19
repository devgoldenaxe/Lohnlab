let data = [
    {
        "AN PersNr": "2",
        "AN Nachname": "Nicole",
        O: 3500, // TODO update other data
        Steuerklasse: 1,
        Uberstunden: 0,
        Q: 0,
        Y: 3,
        AB: "ja", // TODO check
        AC: "", // TODO check
        AD: 0,
        AE: "brutto",
        AF: 0,
        AG: 0,
        AL: 0,
        AM: 0,
        AN: 0,
        AO: 0,
        AP: 0,
        AQ: 0,
        AR: 0,
        AS: 0,
        AT: 0,
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
        BM: 0,
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
        CC: 0,
        CD: 0,
        CE: 0,
        R: 0,
        S: "ja",
        T: 9,
        U: 0,
        V: 0,
        W: "ja",
        X: 0,
        Z: 0,
    },
    {
        "AN PersNr": "3",
        "AN Nachname": "Max",
        O: 3000, // TODO update other data
        Steuerklasse: 3,
        Uberstunden: 0,
        Q: 0,
        Y: 3,
        AB: "", // TODO check
        AC: "", // TODO check
        AD: 0,
        AE: "brutto",
        AF: 0,
        AG: 0,
        AL: 0,
        AM: 0,
        AN: 0,
        AO: 0,
        AP: 0,
        AQ: 0,
        AR: 0,
        AS: 0,
        AT: 0,
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
        BM: 0,
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
        CC: 0,
        CD: 0,
        CE: 0,
        R: 0,
        S: "",
        T: 0,
        U: 0,
        V: 3,
        W: "",
        X: 200,
        Z: 0,
    },
    {
        "AN PersNr": "4",
        "AN Nachname": "Franz",
        O: 2500, // TODO update other data
        Steuerklasse: 1,
        Uberstunden: 0,
        Q: 0,
        Y: 5,
        AB: "", // TODO check
        AC: "", // TODO check
        AD: 0,
        AE: "brutto",
        AF: 0,
        AG: 0,
        AL: 0,
        AM: 0,
        AN: 0,
        AO: 0,
        AP: 0,
        AQ: 0,
        AR: 0,
        AS: 0,
        AT: 0,
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
        BM: 0,
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
        CC: 0,
        CD: 0,
        CE: 0,
        R: 0,
        S: "ja",
        T: 0,
        U: 0,
        V: 0,
        W: "",
        X: 0,
        Z: 0,
    },
    {
        "AN PersNr": "5",
        "AN Nachname": "Eva",
        O: 3200, // TODO update other data
        Steuerklasse: 5,
        Uberstunden: 0,
        Q: 0,
        Y: 5,
        AB: "", // TODO check
        AC: "ja", // TODO check
        AD: 0,
        AE: "brutto",
        AF: 0,
        AG: 0,
        AL: 0,
        AM: 0,
        AN: 0,
        AO: 0,
        AP: 0,
        AQ: 0,
        AR: 0,
        AS: 0,
        AT: 0,
        AU: 0,
        AW: 0,
        AV: 0,
        AX: 0,
        BC: 0,
        BD: 0,
        BG: 0,
        BH: 0,
        BI: 0,
        BJ: 0,
        BK: 0,
        BL: 0,
        BM: 0,
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
        CC: 0,
        CD: 0,
        CE: 0,
        R: 0,
        S: "",
        T: 0,
        U: 0,
        V: 0,
        W: "",
        X: 0,
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
// let E2 = "brutto";
// let Daten = [
//     {
//         J3: 20,
//         J1: 22,
//         J2: 8.9,
//         J5: 1.28,
//     },
// ];

// let Daten2 = [
//     {
//         D1: 0,
//     },
// ];

let textBox6Value = 22;
let textBox7Value = 8.9;
let textBox8Value = 1.28;
let textBox1Value = 5; //
let ComboBox1 = "brutto";

function process_Faktoren(data, Daten) {
    let faktoren = require("./Module_3.js");
    return faktoren(data, Daten);
}

function process_setzen(data, BSlist) {
    let setzen = require("./Module_2.js");
    return setzen(data, BSlist);
}

function menuTasks(
    data,
    BSlist,
    textBox6Value,
    textBox7Value,
    textBox8Value,
    textBox1Value,
    ComboBox1
) {
    try {
        // const progressBar1 = { value: 10, visible: true };
        // const image17 = { visible: false };
        // const label52 = { caption: "" };
        // const label17 = { caption: "" };

        let Daten = {
            J3: 0.5,
            J1: 22,
            J2: 8.9,
            J5: 1.28,
            P1: 0.025,
            Q4: 0.05,
            Q8: 0.15,
            Q3: 0.25,
            D1: 0,
        };

        // if (
        //     data.AL > 0 ||
        //     data.AN > 0 ||
        //     data.AP > 0 ||
        //     data.AR > 0 ||
        //     data.AS > 0 ||
        //     data.AU > 0 ||
        //     data.BK > 0 ||
        //     data.BM > 0
        // ) {
        // let isBestandskunde = confirm(
        //     "Es sind bereits Bausteine verteilt. Handelt es sich um einen Bestandskunden?"
        // );

        // if (isBestandskunde) {
        // If user selects "Yes"
        // alert(
        //     "Bestandskunde: es werden nur Bausteine berechnet, die noch nicht oder noch nicht vollständig ausgenutzt werden"
        //         // );
        //     } else {
        //         // If user selects "No"
        //         // alert(
        //         //     "kein Bestandskunde, alle bereits verteilten Bausteine werden gelöscht"
        //         // );
        //         // function process_leeren() {
        //         //     let leeren = require("./leeren.js");
        //         //     data = leeren(data);
        //         // }
        //         // process_leeren();
        //     }
        // }

        Daten.J3 = parseFloat(textBox1Value) / 100;
        Daten.J1 = textBox6Value;
        Daten.J2 = textBox7Value;
        Daten.J5 = textBox8Value;

        Daten.D1 = textBox5Value;

        let E3 = "Erhöhung";
        let E4 = "individuell";
        let E2 = ComboBox1;
        let O4 = textBox1Value + " %";
        let O3 = "Aufschlag:";

        data = process_Faktoren(data, Daten);

        /*import { faktoren } from './Module_3.js';          ----> method for calling setzen function from athother file
faktoren();*/

        for (let i = 0; i < data.length; i++) {
            if (data[i]["S"] == "ja" && data[i]["V"] !== "") {
                // alert(
                //     `In Zeile ${i} ist Dienstwagen und km Erstattung gleichzeitig eingetragen, km Angabe wird entfernt`
                // );
                data[i]["V"] = "";
            }

            if (data[i]["AC"] == "ja" && data[i]["V"] !== "") {
                // alert(
                //     `In Zeile ${i} ist vorhandenes JobTicket und km Erstattung gleichzeitig eingetragen, km Angabe wird entfernt`
                // );
                data[i]["V"] = "";
            }

            if (data[i]["Y"] == "") {
                data[i]["Y"] = 5;
                let faktor;
                if (textBox1Value == 0) {
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
        }

        data = process_setzen(data, BSlist);
        /*import { setzen } from './Module_3.js';          ----> method for calling setzen function from athother file
setzen();*/

        for (let i = 0; i < data.length; i++) {
            data[i]["CC"] = (data[i]["R"] / data[i]["Q"]) * 2;

            if (data[i]["CC"] > 0) {
                data[i]["AD"] = ((data[i]["CC"] - data[i]["AG"]) * 18.6) / 100;
            }
        }

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
menuTasks(
    data,
    BSlist,
    textBox6Value,
    textBox7Value,
    textBox8Value,
    textBox1Value,
    ComboBox1
    // Daten2
);
