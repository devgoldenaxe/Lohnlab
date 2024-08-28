function berechnungCalc(brutto, stkl, EingabeG) {
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

    let C2 = Eingabe[5] > 4 ? 0 : D1 * Eingabe[8];
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
                    ? (Eingabe[14] === 1
                          ? sum(F11, F7, -F8)
                          : sum(F11, F7 / 2)) * min(C5 / 100, F17)
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

    console.log("C2:", C2);
    console.log("C3:", C3);
    console.log("C4:", C4);
    console.log("C5:", C5);
    console.log("C6:", C6);
    console.log("C7:", C7);
    console.log("C8:", C8);
    console.log("C9:", C9);
    console.log("C10:", C10);
    console.log("C11:", C11);
    console.log("C12:", C12);
    console.log("C13:", C13);
    console.log("C14:", C14);
    console.log("C15:", C15);
    console.log("C16:", C16);
    console.log("C17:", C17);
    console.log("C18:", C18);

    console.log("C20:", C20);
    console.log("C21:", C21);

    console.log("C23:", C23);
    console.log("C24:", C24);
    console.log("C25:", C25);
    console.log("C26:", C26);
    console.log("C27:", C27);
    console.log("C28:", C28);
    console.log("C29:", C29);
    console.log("C30:", C30);
    console.log("C31:", C31);
    console.log("C32:", C32);
    console.log("C33:", C33);
    console.log("C34:", C34);
    console.log("C35:", C35);
    console.log("C36:", C36);
    console.log("C37:", C37);
    console.log("C38:", C38);
    console.log("C39:", C39);
    console.log("C40:", C40);
    console.log("C41:", C41);
    console.log("C42:", C42);
    console.log("C43:", C43);
    console.log("C44:", C44);
    console.log("C45:", C45);
    console.log("C46:", C46);
    console.log("C47:", C47);
    console.log("C48:", C48);
    console.log("C49:", C49);
    console.log("C50:", C50);
    console.log("C51:", C51);
    console.log("C52:", C52);
    console.log("C53:", C53);
    console.log("C54:", C54);
    console.log("C55:", C55);
    console.log("C56:", C56);
    console.log("C57:", C57);
    console.log("C58:", C58);
    console.log("C59:", C59);
    console.log("C60:", C60);
    console.log("C61:", C61);
    console.log("C62:", C62);
    console.log("C63:", C63);
    console.log("C64:", C64);
    console.log("C65:", C65);
    console.log("C66:", C66);
    console.log("C67:", C67);
    console.log("C68:", C68);
    console.log("C69:", C69);
}
let brutto = 3490.88;
let stkl = 5;
let EingabeG = [0.0, 0, 0, 9, 14.6, 1.7, 0, 1, 0, 0, 0, 0.0, 0.0];
Berechnungcalc(brutto, stkl, EingabeG);
