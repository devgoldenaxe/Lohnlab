let EingabeG = [
    0, 0, 1979.74, 3718.27, 2, 5, 0.0, 0, 0, 9, 14.6, 1.7, 0, 1, 0, 0, 0, 0.0,
    0.0,
  ];
  function calculateAblauf() {
    let B2 = EingabeG[6] !== 0 ? 1 : 0;
    let B3 = 0;
    let B4 = 0;
    let B5 = EingabeG[6];
    let B6 = EingabeG[14];
    let B7 = EingabeG[11];
    let B8 = EingabeG[4];
    let B9 = EingabeG[18];
    let B10 = EingabeG[17];
    let B11 = EingabeG[12];
    let B12 = 0;
    let B13 = EingabeG[15];
    let B14 = EingabeG[13];
    let B15 = EingabeG[9];
    let B16 = EingabeG[3] * 100;
    let B17 = 0;
    let B18 = EingabeG[5];
    let B19 = 0;
    let B20 = 0;
    let B21 = 0;
    let B22 = 0;
    let B23 = EingabeG[8];
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
    console.log("B229--->",B229);
    console.log(B241);
    console.log(B242);
    console.log(B243);
    console.log(B244);
    console.log(B245);
    console.log(B246);
    console.log(B247);
    console.log(B248);
    console.log(B249);
    console.log(B252);
    console.log(B253);
    console.log(B254);
    console.log(B255);
    console.log(B256);
    console.log(B259);
    console.log(B260);
    console.log(B261);
    console.log(B264);
    console.log(B265);
  }
  calculateAblauf();