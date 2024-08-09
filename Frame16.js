function frame16() {
    const data = [
        {
            "Dienstwagen ?  Ja/nein": "ja",
            "einfache Entfernung": "",
            "JobTicket vorhanden?": " ",
            "Wochenarbeitstage ?": 33,
            "Prämie / Zuwendung": " ",
            "berechnet?": "brutto",
            "netto Korrektur Faktor": 1.05,
            "kalkulierte brutto Zuwendung": 0,
            18.6: "",
        },
    ];

    let Daten = [
        {
            J3: 20,
            J1: 22,
            J2: [8, 9],
            J5: [1, 28],
        },
    ];

    let Daten2 = [
        {
            D1: 0,
        },
    ];

    const listeANBausteine = {
        AL: 0,
        AN: 0,
        AP: 0,
        AR: 0,
        AS: 0,
        AU: 0,
        BK: 0,
        BM: 0,
    };
    try {
        // Initialize UI elements (uncomment and define as needed)
        // const progressBar1 = { value: 10, visible: true };
        // const image17 = { visible: false };
        // const label52 = { caption: "" };
        // const label17 = { caption: "" };

        if (
            listeANBausteine.AL > 0 ||
            listeANBausteine.AN > 0 ||
            listeANBausteine.AP > 0 ||
            listeANBausteine.AR > 0 ||
            listeANBausteine.AS > 0 ||
            listeANBausteine.AU > 0 ||
            listeANBausteine.BK > 0 ||
            listeANBausteine.BM > 0
        ) {
            let isBestandskunde = confirm(
                "Es sind bereits Bausteine verteilt. Handelt es sich um einen Bestandskunden?"
            );

            if (isBestandskunde) {
                // If user selects "Yes"
                alert(
                    "Bestandskunde: es werden nur Bausteine berechnet, die noch nicht oder noch nicht vollständig ausgenutzt werden"
                );
            } else {
                // If user selects "No"
                alert(
                    "kein Bestandskunde, alle bereits verteilten Bausteine werden gelöscht"
                );
                leeren();
            }
        }

        let textBox1Value = Daten.J3;
        Daten.J3 = parseFloat(textBox1Value) / 100;
        let textBox6Value = Daten.J1;
        let textBox7Value = Daten.J2;
        let textBox8Value = Daten.J5;

        // Daten2.D1 = parseFloat(textBox5Value);

        const listeANBausteineRange = {
            E3: "Erhöhung",
            E4: "individuell",
            E2: comboBox1Value,
            O4: textBox1Value + " %",
            O3: "Aufschlag:",
        };

        function Faktoren() {
            // Implementation here
        }
        Faktoren();

        for (let i = 0; i < data.length; i++) {
            data[i]["Prämie / Zuwendung"] = 1000;
            data[i][comboBox1Value] = "netto";
            Daten.J3 = 0;

            if (
                data[i]["Dienstwagen ?  Ja/nein"] == "ja" &&
                data[i]["einfache Entfernung"] !== ""
            ) {
                alert(
                    `In Zeile ${i} ist Dienstwagen und km Erstattung gleichzeitig eingetragen, km Angabe wird entfernt`
                );
                data[i]["einfache Entfernung"] = "";
            }

            if (
                data[i]["JobTicket vorhanden?"] == "ja" &&
                data[i]["einfache Entfernung"] !== ""
            ) {
                alert(
                    `In Zeile ${i} ist vorhandenes JobTicket und km Erstattung gleichzeitig eingetragen, km Angabe wird entfernt`
                );
                data[i]["einfache Entfernung"] = "";
            }

            if (data[i]["Wochenarbeitstage ?"] == "") {
                data[i]["Wochenarbeitstage ?"] = 5;
            }

            let faktor;
            if (textBox1Value == "") {
                textBox1Value = 0;
                faktor = 1;
            } else {
                faktor = 1 + parseFloat(textBox1Value) / 100;
            }

            if (comboBox1Value == "netto") {
                data[i]["Prämie / Zuwendung"] *= faktor;
                data[i]["berechnet?"] = "netto";
            } else if (comboBox1Value == "brutto") {
                data[i]["Prämie / Zuwendung"] =
                    (data[i]["Prämie / Zuwendung"] / 2) *
                    data[i]["netto Korrektur Faktor"] *
                    faktor;
                data[i]["berechnet?"] = "brutto";
            }
        }

        function setzen() {
            // Implementation here
        }
        setzen();

        for (let i = 0; i < data.length; i++) {
            data[i]["kalkulierte brutto Zuwendung"] =
                (data[i]["Prämie / Zuwendung"] /
                    data[i]["netto Korrektur Faktor"]) *
                2;

            if (data[i]["kalkulierte brutto Zuwendung"] > 0) {
                
                data[i]["18.6"] = ((data[i]["kalkulierte brutto Zuwendung"] - data[i]["nicht verteilt brutto"] ) * 18.5) / 100;
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
            "Upps, da ist leider ein Fehler aufgetreten, bitte wenden Sie sich an office@lohnkonzepte.de und melden Sie den Fehler: BS_indi_3"
        );
    }
}
