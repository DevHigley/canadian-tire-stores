const incoming = [
	{
		name: "022 Espanola, O",
		retail: "12453852",
		service: "441990",
		address: "801 CENTRE STREET, ESPANOLA, ON P5E 1N2",
		phone: "(705) 869-3807",
		lat: "46.25052",
		lng: "-81.76351"
	},
	{
		name: "024 Cochrane, O",
		retail: "6773605",
		service: "167949",
		address: "201 HIGHWAY 11 WEST, COCHRANE, ON P0L 1C0",
		phone: "(705) 272-4341",
		lat: "49.05886",
		lng: "-81.04488"
	},
	{
		name: "034 Thunder Bay",
		retail: "21167781",
		service: "412219",
		address: "1221 WEST ARTHUR STREET, THUNDER BAY, ON P7K 1A7",
		phone: "(807) 475-4235",
		lat: "48.38208",
		lng: "-89.3129"
	},
	{
		name: "038 Fenelon Fal",
		retail: "9691614",
		service: "286200",
		address: "160 LINDSAY STREET, FENELON FALLS, ON K0M 1N0",
		phone: "(705) 887-3310",
		lat: "44.53217",
		lng: "-78.73929"
	},
	{
		name: "047 Huntsville,",
		retail: "18446492",
		service: "467810",
		address: "77 KING WILLIAM STREET, HUNTSVILLE, ON P1H 1E5",
		phone: "(705) 789-5566",
		lat: "45.33429",
		lng: "-79.20416"
	},
	{
		name: "052 Kirkland La",
		retail: "5890732",
		service: "110659",
		address: "146 GOVERNMENT ROAD WEST, KIRKLAND LAKE, ON P2N 2E9",
		phone: "(705) 567-9281",
		lat: "48.14799",
		lng: "-80.04326"
	},
	{
		name: "056 Lindsay, ON",
		retail: "28249038",
		service: "821302",
		address: "377 KENT ST. WEST, LINDSAY, ON K9V 4S1",
		phone: "(705) 324-2176",
		lat: "44.34964",
		lng: "-78.75775"
	},
	{
		name: "061 Midland, ON",
		retail: "20789551",
		service: "467822",
		address: "HWY 93 NORTH HUGEL AVENUE, MIDLAND, ON L4R 5K9",
		phone: "(705) 526-9321",
		lat: "44.73856",
		lng: "-79.911308"
	},
	{
		name: "062 Gravenhurst",
		retail: "13063341",
		service: "767320",
		address: "431 TALISMAN DR., GRAVENHURST, ON P1P 0A7",
		phone: "(705) 687-3422",
		lat: "44.90467",
		lng: "-79.36916"
	},
	{
		name: "068 New Liskear",
		retail: "12790840",
		service: "327810",
		address: "HIGHWAY 11 NORTH, NEW LISKEARD, ON P0J 1P0",
		phone: "(705) 647-7331",
		lat: "47.50072",
		lng: "-79.68092"
	},
	{
		name: "072 North Bay,",
		retail: "31386407",
		service: "564761",
		address: "890 MCKEOWN AVENUE, NORTH BAY, ON P1B 8M1",
		phone: "(705) 472-3000",
		lat: "46.33252",
		lng: "-79.47622"
	},
	{
		name: "074 Orillia, ON",
		retail: "17855975",
		service: "789721",
		address: "1017 BRODIE DR., ORILLIA, ON L3V 7X6",
		phone: "(705) 325-7414",
		lat: "44.63095",
		lng: "-79.43719"
	},
	{
		name: "078 Parry Sound",
		retail: "14920007",
		service: "612118",
		address: "30 PINE DRIVE, PARRY SOUND, ON P2A 3B8",
		phone: "(705) 746-2133",
		lat: "45.3431",
		lng: "-80.00868"
	},
	{
		name: "081 Peterboroug",
		retail: "25243643",
		service: "683130",
		address: "1200 LANSDOWNE ST W, PETERBOROUGH, ON K9J 2A1",
		phone: "(705) 742-0406",
		lat: "44.28118",
		lng: "-78.35188"
	},
	{
		name: "083 Thunder Bay",
		retail: "30128179",
		service: "431497",
		address: "939 FORT WILLIAM RD, THUNDER BAY, ON P7B 3A6",
		phone: "(807) 623-1999",
		lat: "48.4029",
		lng: "-89.24045"
	},
	{
		name: "095 Sault Ste.",
		retail: "33615675",
		service: "731823",
		address: "200 MCNABB STREET, SAULT STE MARIE, ON P6B 1Y4",
		phone: "(705) 949-0770",
		lat: "46.5228",
		lng: "-84.3177"
	},
	{
		name: "102 Sturgeon Fa",
		retail: "11730772",
		service: "334993",
		address: "12011 HIGHWAY 17 EAST, STURGEON FALLS, ON P2B 2S7",
		phone: "(705) 753-2630",
		lat: "46.37144",
		lng: "-79.95883"
	},
	{
		name: "108 Collingwood",
		retail: "18861379",
		service: "837943",
		address: "89 BALSAM STREET, COLLINGWOOD, ON L9Y 3Y6",
		phone: "(705) 445-4161",
		lat: "44.50442",
		lng: "-80.23697"
	},
	{
		name: "111 Timmins, ON",
		retail: "17580406",
		service: "156798",
		address: "2199 RIVERSIDE DRIVE, TIMMINS, ON P4R 0A1",
		phone: "(705) 268-8591",
		lat: "48.47073",
		lng: "-81.40416"
	},
	{
		name: "167 Elliot Lake",
		retail: "6709205",
		service: "141837",
		address: "50 HILLSIDE DRIVE SOUTH, ELLIOTT LAKE, ON P5A 1M7",
		phone: "(705) 848-3663",
		lat: "46.38087",
		lng: "-82.64704"
	},
	{
		name: "178 Kapuskasing",
		retail: "6390972",
		service: "105327",
		address: "25 BRUNETVILLE ROAD, KAPUSKASING, ON P5N 2E9",
		phone: "(705) 335-6066",
		lat: "49.42008",
		lng: "-82.41835"
	},
	{
		name: "201 Nipigon, ON",
		retail: "3637166",
		service: "149435",
		address: "CORNER 1 & 5 STREET, NIPIGON, ON P0T 2J0",
		phone: "(807) 887-3131",
		lat: "49.01086",
		lng: "-88.25972"
	},
	{
		name: "206 Bracebridge",
		retail: "14458445",
		service: "422851",
		address: "HWY #118 WEST, BRACEBRIDGE, ON P1L 1V4",
		phone: "(705) 645-5261",
		lat: "45.0581",
		lng: "-79.41364"
	},
	{
		name: "244 Chelmsford,",
		retail: "13247628",
		service: "279560",
		address: "3595 HWY. # 144, CHELMSFORD, ON P0M 1L0",
		phone: "(705) 855-9011",
		lat: "46.56789",
		lng: "-81.19359"
	},
	{
		name: "278 Sudbury Nor",
		retail: "27268990",
		service: "696040",
		address: "1485 LASALLE BLVD, SUDBURY, ON P3A 5H7",
		phone: "(705) 566-9700",
		lat: "46.522",
		lng: "-80.9449"
	},
	{
		name: "279 Wawa, ON",
		retail: "5278227",
		service: "62280",
		address: "54 BROADWAY AVE., WAWA, ON P0S 1K0",
		phone: "(705) 856-2285",
		lat: "47.99548",
		lng: "-84.77123"
	},
	{
		name: "406 Hearst, ON",
		retail: "6797194",
		service: "78368",
		address: "1330 FRONT STREET, HEARST, ON P0L 1N0",
		phone: "(705) 362-5822",
		lat: "49.69109",
		lng: "-83.68064"
	},
	{
		name: "445 Sudbury Sou",
		retail: "19635223",
		service: "465056",
		address: "2259 REGENT STREET SOUTH, SUDBURY, ON P3E 5M9",
		phone: "(705) 523-6000",
		lat: "46.44759",
		lng: "-80.99308"
	},
	{
		name: "451 Marathon, O",
		retail: "5476509",
		service: "115797",
		address: "3 PENINSULA ROAD, MARATHON, ON P0T 2E0",
		phone: "(807) 229-2900",
		lat: "48.71862",
		lng: "-86.3785"
	},
	{
		name: "652 Wasaga Beac",
		retail: "10435115",
		service: "261750",
		address: "75 45TH STREET SOUTH, WASAGA BEACH, ON L9Z 1A7",
		phone: "(705) 422-1250",
		lat: "44.47178",
		lng: "-80.07374"
	},
	{
		name: "657 Hanmer, ON",
		retail: "11635420",
		service: "152743",
		address: "5206 HWY 69 NORTH, HANMER, ON P3P 1Z3",
		phone: "(705) 969-4242",
		lat: "46.65291",
		lng: "-80.9714"
	},
	{
		name: "660 Peterboroug",
		retail: "20072053",
		service: "560380",
		address: "1050 CHEMONG ROAD, PETERBOROUGH, ON K9H 7S2",
		phone: "(705) 745-1388",
		lat: "44.32563",
		lng: "-78.33607"
	},
	{
		name: "682 Minden, ON",
		retail: "9032917",
		service: "154740",
		address: "92 Water St, Minden, ON K0M 2K0",
		phone: "(705) 286-4400",
		lat: "44.93138",
		lng: "-78.7161"
	},
	{
		name: "687 Innisfil, O",
		retail: "10473250",
		service: "387077",
		address: "1455 Innisfil Beach Road Innisfil, ON L9S 4B2",
		phone: "(705) 431-2121",
		lat: "44.30889",
		lng: "-79.57388"
	}
];

console.log(
	incoming.map((store) => {
		return {
			name: store.name,
			address: store.address,
			phone: store.phone,
			coordinates: {
				lat: parseFloat(store.lat),
				lng: parseFloat(store.lng)
			},
			sales: {
				retail: parseFloat(store.retail),
				service: parseFloat(store.service)
			}
		};
	})
);
