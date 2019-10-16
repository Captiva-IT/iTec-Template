var livraisonData = [
    { numeroBC: "0009213456", distributeur: "Martin BROWER", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00", numeroBl: "0045345", dateLivraison: "14/10/2019 à 00:00", status: "Validée" },
    { numeroBC: "0009213457", distributeur: "Martin BROWER", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00", numeroBl: "0045345", dateLivraison: "14/10/2019 à 00:00", status: "Validée" },
    { numeroBC: "0009213444", distributeur: "Martin BROWER", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00", numeroBl: "0045345", dateLivraison: "14/10/2019 à 00:00", status: "Validée" },
    { numeroBC: "0009213423", distributeur: "Martin BROWER", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00", numeroBl: "0045345", dateLivraison: "14/10/2019 à 00:00", status: "Validée" },
    { numeroBC: "0009213459", distributeur: "Martin BROWER", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00", numeroBl: "0045345", dateLivraison: "14/10/2019 à 00:00", status: "Validée" },
    { numeroBC: "0009213423", distributeur: "Martin BROWER", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00", numeroBl: "0045345", dateLivraison: "14/10/2019 à 00:00", status: "Validée" },
    { numeroBC: "0009213411", distributeur: "Martin BROWER", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00", numeroBl: "0045345", dateLivraison: "14/10/2019 à 00:00", status: "Validée" },
];

var LivraisonDetailData = [
    { stockage: "2", code: "80000.673", designation: "ACCOMPAGN CAFE 2", qteColis: "500,00/CT", prop: "0", modification: "0", com: "0", type: "Libre", livJour: "0", stockTheorique: "NC", sfc: "NC", qte: "NC", inv: "", gamme: "TOUS", },
    { stockage: "1", code: "00456.341", designation: "MELANGE SEL POIVRE", qteColis: "12,00/CT", prop: "NP", modification: "0", com: "0", type: "Libre", livJour: "0", stockTheorique: "NC", sfc: "NC", qte: "NC", inv: "", gamme: "TOUS", },
    { stockage: "4", code: "12867.400", designation: "LIPTON GREEN TEA", qteColis: "180,00/CT", prop: "0", modification: "0", com: "0", type: "Libre", livJour: "0", stockTheorique: "0", sfc: "10/12/2013", qte: "0", inv: "", gamme: "NKF", },
    { stockage: "2", code: "01239.450", designation: "COCA COLA", qteColis: "80,00/CT", prop: "0", modification: "0", com: "0", type: "Libre", livJour: "0", stockTheorique: "0", sfc: "NC", qte: "NC", inv: "", gamme: "NKF", },

];

var confirmationData = [
    { numeroBC: "0009213456", distributeur: "Martin BROWER", type: "Marketing", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00" },
    { numeroBC: "0009213457", distributeur: "Martin BROWER", type: "Marketing", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00" },
    { numeroBC: "0009213444", distributeur: "Martin BROWER", type: "Hub", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00" },
    { numeroBC: "0009213423", distributeur: "Martin BROWER", type: "Marketing", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00" },
    { numeroBC: "0009213459", distributeur: "Martin BROWER", type: "Marketing", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00" },
    { numeroBC: "0009213423", distributeur: "Martin BROWER", type: "Hub", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00" },
    { numeroBC: "0009213411", distributeur: "Martin BROWER", type: "Marketing", dateTransmission: "14/10/2019 à 00:00", dateConfirmation: "14/10/2019 à 00:00" },
];

var confirmationDetailData = [
    { stockage: "2", code: "80000.673", designation: "ACCOMPAGN CAFE 2", qteColis: "500,00/CT", commande: "12", confirme: "12", ecart: "0" },
    { stockage: "1", code: "00456.341", designation: "MELANGE SEL POIVRE", qteColis: "12,00/CT", commande: "3", confirme: "3", ecart: "0" },
    { stockage: "4", code: "12867.400", designation: "LIPTON GREEN TEA", qteColis: "180,00/CT", commande: "7", confirme: "7", ecart: "0" },
    { stockage: "2", code: "01239.450", designation: "COCA COLA", qteColis: "80,00/CT", commande: "10", confirme: "10", ecart: "0" },
];

var commandeData = [
    { numeroBC: "0009213456", distributeur: "Martin BROWER", type: "Marketing", aTransmettreAvant: "14/10/2019 à 00:00" },
    { numeroBC: "0009213457", distributeur: "Martin BROWER", type: "Marketing", aTransmettreAvant: "14/10/2019 à 00:00" },
    { numeroBC: "0009213444", distributeur: "Martin BROWER", type: "Hub", aTransmettreAvant: "14/10/2019 à 00:00" },
    { numeroBC: "0009213423", distributeur: "Martin BROWER", type: "Marketing", aTransmettreAvant: "14/10/2019 à 00:00" },
    { numeroBC: "0009213459", distributeur: "Martin BROWER", type: "Marketing", aTransmettreAvant: "14/10/2019 à 00:00" },
    { numeroBC: "0009213423", distributeur: "Martin BROWER", type: "Hub", aTransmettreAvant: "14/10/2019 à 00:00" },
    { numeroBC: "0009213411", distributeur: "Martin BROWER", type: "Marketing", aTransmettreAvant: "14/10/2019 à 00:00" },
];

var commandeDetailData = [
    { stockage: "2", code: "80000.673", designation: "ACCOMPAGN CAFE 2", qteColis: "500,00/CT", prop: "0", modification: "0", com: "0", type: "Libre", livJour: "0", stockTheorique: "NC", sfc: "NC", qte: "NC", inv: "", gamme: "TOUS", },
    { stockage: "1", code: "00456.341", designation: "MELANGE SEL POIVRE", qteColis: "12,00/CT", prop: "NP", modification: "0", com: "0", type: "Libre", livJour: "0", stockTheorique: "NC", sfc: "NC", qte: "NC", inv: "", gamme: "TOUS", },
    { stockage: "4", code: "12867.400", designation: "LIPTON GREEN TEA", qteColis: "180,00/CT", prop: "0", modification: "0", com: "0", type: "Libre", livJour: "0", stockTheorique: "0", sfc: "10/12/2013", qte: "0", inv: "", gamme: "NKF", },
    { stockage: "2", code: "01239.450", designation: "COCA COLA", qteColis: "80,00/CT", prop: "0", modification: "0", com: "0", type: "Libre", livJour: "0", stockTheorique: "0", sfc: "NC", qte: "NC", inv: "", gamme: "NKF", },
];

var commandeInactifProductData = [
    {ProductCode:"00126.465",designation:"STICK FRAISE 3",status:false},
    {ProductCode:"00101.780",designation:"PLAT X STATIF 35X27",status:false},
    {ProductCode:"00423.221",designation:"MKF PETIT PLATEAU X50",status:false},
    {ProductCode:"00126.465",designation:"DRAPEAU MCD HORIZONTAL",status:false},
    {ProductCode:"00101.780",designation:"DRAPEAU M HAPPY***",status:false},
    {ProductCode:"00423.221",designation:"DRAPEAU MC CAFEE***",status:false},
    {ProductCode:"00656.122",designation:"GD PLTX STRAT 41X318",status:false},
    {ProductCode:"00676.142",designation:"DRAPEAU WIFI VERT 450X125",status:false},
]