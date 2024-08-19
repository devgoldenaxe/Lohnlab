let data = [
    {
        "AN PersNr": "5",
        "AN Nachname": "Eva",
        O: 3200,
        Steuerklasse: 5,
        Uberstunden: 0,
        Q: 0,
        Y: 5,
        AB: "",
        AC: "ja",
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
        BX: 0,
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
// let AD_val = 18.6;
// let E2 = "brutto";

// let Daten = [
//     {
//         J3: 20,
//         J1: 22,
//         J2: 8.9,
//         J4: 0.5,
//         J5: 1.28,
//     },
// ];

let textBox1Value = 5;
let textBox6Value = 22;
let textBox7Value = 8.9;
let textBox8Value = 1.28;
let ComboBox1 = "brutto";

// function process_Faktoren(data, Daten) {
//     let faktoren = require("./Module_3.js");
//     return faktoren(data, Daten);
// }

function process_setzen(data, BSlist) {
    let setzen = require("./Module_2.js");
    return setzen(data, BSlist);
}

function frame16(
    data,
    BSlist,
    textBox6Value,
    textBox7Value,
    textBox8Value,
    textBox1Value,
    ComboBox1
) {
    // let Daten2 = [
    //     {
    //         D1: 0,
    //     },
    // ];

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

    try {
        // Initialize UI elements (uncomment and define as needed)
        // const progressBar1 = { value: 10, visible: true };
        // const image17 = { visible: false };
        // const label52 = { caption: "" };
        // const label17 = { caption: "" };

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
        //     // let isBestandskunde = confirm(
        //     //     "Es sind bereits Bausteine verteilt. Handelt es sich um einen Bestandskunden?"
        //     // );
        //     // if (isBestandskunde) {
        //     //     // If user selects "Yes"
        //     //     alert(
        //     //         "Bestandskunde: es werden nur Bausteine berechnet, die noch nicht oder noch nicht vollständig ausgenutzt werden"
        //     //     );
        //     // } else {
        //     //     // If user selects "No"
        //     //     alert(
        //     //         "kein Bestandskunde, alle bereits verteilten Bausteine werden gelöscht"
        //     //     );
        //     //     function process_leeren() {
        //     //     let leeren = require("./leeren.js");
        //     //     data = leeren(data);
        //     // }
        //     // process_leeren();
        //     // }
        // }

        Daten.J3 = parseFloat(textBox1Value) / 100;
        Daten.J1 = textBox6Value;
        Daten.J2 = textBox7Value;
        Daten.J5 = textBox8Value;
        //console.log("textbox1value : ", textBox6Value);
        // Daten2.D1 = parseFloat(textBox5Value);

        // let E3 = "Erhöhung";
        // let E4 = "individuell";
        // let E2 = ComboBox1;
        // let O4 = textBox1Value + " %";
        // let O3 = "Aufschlag:";

        for (let i = 0; i < data.length; i++) {
            data[i]["R"] = 1000;
            E2 = "netto";
            Daten.J3 = 0;

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
        }

        data = process_setzen(data, BSlist);
        //console.log(setzen);
        /*  const setzen = require('./Module_2.js');

            setzen();        ----> method for calling setzen function from athother file
            */

        for (let i = 0; i < data.length; i++) {
            data[i]["R"] = data[i]["BX"];
            data[i]["AF"] = "";
            data[i]["AG"] = "";
            // console.log("AGvalu1", data[i]["AG"]);
            data[i]["CC"] = (data[i]["R"] / data[i]["Q"]) * 2;

            if (data[i]["CC"] > 0) {
                data[i]["AD"] = ((data[i]["CC"] - data[i]["AG"]) * 18.6) / 100;
            }
        }
        console.log("Gvalue : ", data[0]["AG"]);

        // Update UI elements with calculated values (uncomment and define as needed)
        // label52.caption = `${(1234.56).toFixed(2)} €`;
        // label17.caption = `${(78.9).toFixed(2)} €`;
        // progressBar1.visible = false;

        // setTimeout(() => {
        //     image17.visible = false;
        // }, 3000);

        function process_G3(data) {
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
                AF,
                CI,
                BI,
                BC,
                BO,
                BG,
                BQ,
                BS,
                BU,
                Daten
            ) {
                BX =
                    AL +
                    AN +
                    AP +
                    AR +
                    AT +
                    AX +
                    BO +
                    BC +
                    BG +
                    BQ +
                    BS +
                    BI +
                    BK +
                    BM +
                    BU; //BZ / 12
                let CD = 0;
                if (BX > 0) {
                    CD = Daten.J1;
                }
                let CE = 0;
                if (AX > 0) {
                    CE = Daten.J2;
                }
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
                    row.AF,
                    row.CI,
                    row.BI,
                    row.BC,
                    row.BO,
                    row.BG,
                    row.BQ,
                    row.BS,
                    row.BU,
                    Daten
                );
                console.log("++ AL", row.AL);
                console.log("++ AN", row.AN);
                console.log("++ AP", row.AP);
                console.log("++ AR", row.AR);
                console.log("++ AT", row.AT);
                console.log("++ BK", row.BK);
                console.log("++ BM", row.BM);
                console.log("++ AX", row.AX);
                console.log("++ CD", row.CD);
                console.log("++ CE", row.CE);
                console.log("++ AF", row.AF);
                console.log("++ CI", row.CI);
                console.log("++ BI", row.BI);
                console.log("++ BC", row.BC);
                console.log("++ Daten", Daten);

                console.log("-- CG : ", sum);
                console.log("-- CG : ", sum);
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

    } catch (error) {
        console.error(
            "Upps, da ist leider ein Fehler aufgetreten, bitte wenden Sie sich an office@lohnkonzepte.de und melden Sie den Fehler: BS_indi_3",
            error
        );
    }
}
frame16(
    data,
    BSlist,
    textBox6Value,
    textBox7Value,
    textBox8Value,
    textBox1Value,
    ComboBox1
);
