const cities = [
	'Marysville',
	'Perris',
	'Cleveland',
	'Worcester',
	'Columbia',
	'Waterbury',
	'Eagan',
	'Southfield',
	'Lafayette',
	'Boise City',
	'Elkhart',
	'Buena Park',
	'Marietta',
	'Parker',
	'West Palm Beach',
	'Salem',
	'Aurora',
	'Leesburg',
	'Doral',
	'Westminster',
	'Lubbock',
	'Overland Park',
	'Jackson',
	'Gastonia',
	'Daytona Beach',
	'Kansas City',
	'Rancho Palos Verdes',
	'Burnsville',
	'Rowlett',
	'Roswell',
	'Montgomery',
	'Logan',
	'Woburn',
	'Allentown',
	'Mount Pleasant',
	'Columbus',
	'Buffalo',
	'New Berlin',
	'North Richland Hills',
	'Lima',
	'Sacramento',
	'Fort Smith',
	'East Providence',
	'Urbandale',
	'Mount Vernon',
	'Lakewood',
	'Henderson',
	'Covina',
	'Stamford',
	'Bloomington',
	'Kingsport',
	'Spokane',
	'Kennewick',
	'Philadelphia',
	'Bellingham',
	'Visalia',
	'La Crosse',
	'Council Bluffs',
	'North Lauderdale',
	'Dallas',
	'Antioch',
	'Sterling Heights',
	'Deerfield Beach',
	'Fishers',
	'Cheyenne',
	'Murrieta',
	'Lenexa',
	'Noblesville',
	'Southaven',
	'Chino',
	'Gaithersburg',
	'Fountain Valley',
	'Frederick',
	'Greenville',
	'DeKalb',
	'West Allis',
	'Thornton',
	'West Des Moines',
	'Fall River',
	'Tulare',
	'Chula Vista',
	'Coral Springs',
	'Concord',
	'Smyrna',
	'Apopka',
	'Grand Forks',
	'Lancaster',
	'Naperville',
	'Hollywood',
	'Rogers',
	'New Orleans',
	'Lakewood',
	'Oak Lawn',
	'Caldwell',
	'Portland',
	'Concord',
	'Burien',
	'St. Charles',
	'Waukesha',
	'Flagstaff',
	'Puyallup',
	'Schenectady',
	'Denver',
	'Springfield',
	'Campbell',
	'Moreno Valley',
	'Kettering',
	'Lincoln Park',
	'Lake Havasu City',
	'North Little Rock',
	'Reno',
	'Littleton',
	'Prescott',
	'Dublin',
	'Texarkana',
	'Portland',
	'Brooklyn Park',
	'West Haven',
	'El Centro',
	'The Colony',
	'Flint',
	'Pittsburg',
	'Buckeye',
	'Brea',
	'Indio',
	'Scottsdale',
	'Columbus',
	'Lancaster',
	'Lincoln',
	'Trenton',
	'Boston',
	'Glendora',
	'Rochester',
	'Florissant',
	'Annapolis',
	'Chapel Hill',
	'Lawrence',
	'Calexico',
	'Calumet City',
	'Missoula',
	'Clovis',
	'Pearland',
	'Gilbert',
	'Wausau',
	'Raleigh',
	'Orange',
	'Walnut Creek',
	'Bremerton',
	'Porterville',
	'Marana',
	'Tallahassee',
	'Conroe',
	'Blacksburg',
	'San Antonio',
	'Hartford',
	'Waterloo',
	'Binghamton',
	'Meridian',
	'Fond du Lac',
	'Baytown',
	'Cary',
	'Weymouth Town',
	'Tulsa',
	'Mission',
	'Cuyahoga Falls',
	'Malden',
	'Allen',
	'Tucson',
	'Franklin',
	'Shakopee',
	'Jacksonville',
	'Atlantic City',
	'Erie',
	'Merced',
	'Abilene',
	'Yorba Linda',
	'Greenville',
	'Huntersville',
	'St. Clair Shores',
	'Harrisburg',
	'San Buenaventura (Ventura)',
	'Fremont',
	'Pueblo',
	'Chelsea',
	'Belleville',
	'Minneapolis',
	'Bartlett',
	'Wichita Falls',
	'Missouri City',
	'St. Louis',
	'Pharr',
	'Albuquerque',
	'Athens-Clarke County',
	'South Jordan',
	'North Las Vegas',
	'Pomona',
	'Eastvale',
	'Grove City',
	'Lawrence',
	'Midland',
	'Oklahoma City',
	'Oro Valley',
	'Mesa',
	'Norwalk',
	'Kentwood',
	'Brookfield',
	'Rockwall',
	'Mishawaka',
	'Tustin',
	'St. Cloud',
	'Passaic',
	'Escondido',
	'San Bruno',
	'Berkeley',
	'San Clemente',
	'Lawton',
	'Eau Claire',
	'Maricopa',
	'DeSoto',
	'Fort Wayne',
	'Shoreline',
	'Medford',
	'La Habra',
	'Albany',
	'Daly City',
	'Taylor',
	'Lynchburg',
	'Bowie',
	'Danbury',
	'Charlottesville',
	'Coral Gables',
	"Coeur d'Alene",
	'El Monte',
	'Crystal Lake',
	'Danville',
	'Goodyear',
	'Paterson',
	'Salem',
	'Kissimmee',
	'Saginaw',
	'Brownsville',
	'Flower Mound',
	'Grapevine',
	'Edina',
	'Detroit',
	'Fairfield',
	'Mansfield',
	'Rochester',
	'Birmingham',
	'Austin',
	'Santa Barbara',
	'Addison',
	'Rio Rancho',
	'Normal',
	'Romeoville',
	'Coon Rapids',
	'San Mateo',
	'Orlando',
	'Casper',
	'Bedford',
	'Wilmington',
	'Pinellas Park',
	'North Miami Beach',
	'Kansas City',
	'Fitchburg',
	'Wheeling',
	'Newton',
	'North Miami',
	'Norwich',
	'Newark',
	'Alexandria',
	'Blaine',
	'Harlingen',
	'Lompoc',
	'Denton',
	'Galveston',
	'Greenwood',
	'Salinas',
	'Miami Gardens',
	'Huntington',
	'Laredo',
	'Melbourne',
	'Haltom City',
	'Palm Bay',
	'Wilson',
	'Bountiful',
	'Ceres',
	'Parma',
	'Rapid City',
	'Bell Gardens',
	'Commerce City',
	'Springfield',
	'Fort Collins',
	'San Leandro',
	'Vista',
	'Yonkers',
	'Cincinnati',
	'Hagerstown',
	'Sanford',
	'Union City',
	'Toledo',
	'Sierra Vista',
	'Newport News',
	'Hammond',
	'Buffalo Grove',
	'Sugar Land',
	'Huntsville',
	'Lodi',
	'Edmonds',
	'Duncanville',
	'Rocky Mount',
	'Pontiac',
	'National City',
	'Hayward',
	'Niagara Falls',
	'Sparks',
	'Hanford',
	'Cypress',
	'Youngstown',
	'Madison',
	'Redlands',
	'Cape Girardeau',
	'Nampa',
	'Washington',
	'Wheaton',
	'Lancaster',
	'Rialto',
	'Fargo',
	'Peoria',
	'Omaha',
	'Rancho Santa Margarita',
	'Manhattan',
	'Palm Springs',
	'San Diego',
	'Santa Rosa',
	'Lowell',
	'Broken Arrow',
	'Kent',
	'Nashville',
	'Hackensack',
	'Broomfield',
	'Durham',
	'Wichita',
	'Cathedral City',
	'Lakeville',
	'Elmhurst',
	'Weslaco',
	'Greenfield',
	'Sunnyvale',
	'Santa Cruz',
	'Kenosha',
	'State College',
	'Mansfield',
	'Quincy',
	'Pompano Beach',
	'San Angelo',
	'Bloomington',
	'Tracy',
	'Spartanburg',
	'Nashua',
	'Macon',
	'Hempstead',
	'Camden',
	'Palm Desert',
	'Streamwood',
	'Chesapeake',
	'Dublin',
	'Camarillo',
	'Muskegon',
	'Elizabeth',
	'Anchorage',
	'Minot',
	'Davie',
	'McAllen',
	'McKinney',
	'Killeen',
	'Findlay',
	'Oakland',
	'Mountain View',
	'Lake Elsinore',
	'Amarillo',
	'Provo',
	'Atlanta',
	'Monterey Park',
	'Strongsville',
	'Madera',
	'Decatur',
	'Woonsocket',
	'Mobile',
	'Vallejo',
	'Arcadia',
	'Collierville',
	'Jefferson City',
	'Longview',
	'Chandler',
	'Arvada',
	'Alhambra',
	'Kokomo',
	'Oakland Park',
	'Indianapolis',
	'Boynton Beach',
	'Apache Junction',
	'Mount Prospect',
	'Cranston',
	'Lafayette',
	'Olathe',
	'Johns Creek',
	'Greensboro',
	'Kalamazoo',
	'Tigard',
	'Jacksonville',
	'Citrus Heights',
	'Tuscaloosa',
	'Ankeny',
	'Hawthorne',
	'Hoover',
	'Delray Beach',
	'Wellington',
	'Bullhead City',
	'Weston',
	'Troy',
	'New Rochelle',
	'Stockton',
	'Royal Oak',
	'Titusville',
	'Laguna Niguel',
	'Spokane Valley',
	'Costa Mesa',
	'Grand Prairie',
	'Portsmouth',
	'Lacey',
	'Apex',
	'Sioux City',
	'Encinitas',
	'Spanish Fork',
	'Huntington Park',
	'Eden Prairie',
	'Peoria',
	'Tempe',
	'Wilmington',
	'Taylorsville',
	'Westland',
	'Mesquite',
	'Burlington',
	'Garland',
	'Richmond',
	'Bismarck',
	'Carson City',
	'Muskogee',
	'Augusta-Richmond County',
	'Fayetteville',
	'Albany',
	'Sayreville',
	'Newark',
	'Diamond Bar',
	'Decatur',
	'Chattanooga',
	'Jeffersonville',
	'Bartlett',
	'Baldwin Park',
	'Miami Beach',
	'Jackson',
	'Port Arthur',
	'San Luis Obispo',
	'Burleson',
	'Newport Beach',
	'Riverton',
	'Yakima',
	'Dayton',
	'Gulfport',
	'Long Beach',
	'Chico',
	'Hattiesburg',
	'Eugene',
	'Colton',
	'Montebello',
	'Pleasanton',
	'Everett',
	'Hutchinson',
	'Fairfield',
	'Avondale',
	'Euclid',
	'Battle Creek',
	'Bloomington',
	'Rock Island',
	'Beaverton',
	'Kenner',
	'Clovis',
	'Troy',
	'Milpitas',
	'Des Plaines',
	'Placentia',
	'Taunton',
	'Montclair',
	'Johnson City',
	'Savannah',
	'Warren',
	'Vancouver',
	'Sunrise',
	'Muncie',
	'Lehi',
	'San Francisco',
	'Fontana',
	'Frisco',
	'Chino Hills',
	'Poway',
	'Huber Heights',
	'New Brunswick',
	'Norfolk',
	'Hillsboro',
	'San Jacinto',
	'Pensacola',
	'Hamilton',
	'Florence',
	'San Bernardino',
	'Peachtree Corners',
	'Victorville',
	'Gary',
	'Casa Grande',
	'Morgan Hill',
	'Dubuque',
	'Syracuse',
	'Clarksville',
	'Lakeland',
	'Valley Stream',
	'Dover',
	'Moorhead',
	'Culver City',
	'Palatine',
	'Seattle',
	'Covington',
	'Elk Grove',
	'Shreveport',
	'Ogden',
	'Harrisonburg',
	'Inglewood',
	'Pasadena',
	'Lawrence',
	'Lake Oswego',
	'Petaluma',
	'Springfield',
	'Napa',
	'Aurora',
	'Duluth',
	'Roanoke',
	'Bend',
	'Apple Valley',
	'Waltham',
	'Fort Myers',
	'Tampa',
	'Upland',
	'Danville',
	'Beloit',
	'Plantation',
	'Colorado Springs',
	'Modesto',
	'Grand Rapids',
	'Oak Park',
	'Sarasota',
	'Jurupa Valley',
	'Bellflower',
	'Boulder',
	'Santa Fe',
	'Coachella',
	'Marlborough',
	'Riverside',
	'Palmdale',
	'Novato',
	'Layton',
	'Bolingbrook',
	'Mission Viejo',
	'Glenview',
	'Lincoln',
	'Folsom',
	'Prescott Valley',
	'Las Cruces',
	'Bozeman',
	'Schaumburg',
	'Warren',
	'St. Peters',
	'Ames',
	'Surprise',
	'Richardson',
	'Midland',
	'San Marcos',
	'Wilkes-Barre',
	'Appleton',
	'Shawnee',
	'Mentor',
	'Livermore',
	'Charlotte',
	'Owensboro',
	'Jupiter',
	'Rohnert Park',
	'Chicago',
	'Billings',
	'Wauwatosa',
	'Lombard',
	'New Haven',
	'York',
	'Knoxville',
	'Elyria',
	'Barnstable Town',
	'Murray',
	'Alameda',
	'Manteca',
	'Maplewood',
	'Medford',
	'Murfreesboro',
	'Yuba City',
	'Shelton',
	'Cedar Falls',
	'Germantown',
	'Scranton',
	'Auburn',
	'Manassas',
	'Vacaville',
	'Santa Monica',
	'Suffolk',
	'Rochester Hills',
	'La Quinta',
	'Charleston',
	'Delano',
	'St. Cloud',
	'Charleston',
	'Kannapolis',
	'Corona',
	'Rocklin',
	"Lee's Summit",
	'Palm Coast',
	'Sandy',
	'Bentonville',
	'Santa Clarita',
	'Altamonte Springs',
	'New Braunfels',
	'Memphis',
	'Irving',
	'Alexandria',
	'Hesperia',
	'Holyoke',
	'Dunwoody',
	'Skokie',
	'Kearny',
	'Bethlehem',
	'St. Joseph',
	'Redondo Beach',
	'Houston',
	'Temecula',
	'Ann Arbor',
	'Beaumont',
	'East Lansing',
	'Santee',
	'Tamarac',
	'Bellevue',
	'Pembroke Pines',
	'Springdale',
	'Oxnard',
	'Odessa',
	'Stillwater',
	'Brockton',
	'Bayonne',
	'Paramount',
	'Moline',
	'Meridian',
	'Cleveland',
	'Jersey City',
	'St. Paul',
	'Deltona',
	'Freeport',
	'Iowa City',
	'Anaheim',
	'Apple Valley',
	'Great Falls',
	'West Valley City',
	'Hampton',
	'Georgetown',
	'Orem',
	'Monrovia',
	'Keller',
	'Goose Creek',
	'Little Rock',
	'Santa Ana',
	'White Plains',
	'Idaho Falls',
	'Bellevue',
	'Roseville',
	'Perth Amboy',
	'Peabody',
	'Grand Island',
	'Columbia',
	'Racine',
	'Carmel',
	'Portage',
	'Middletown',
	'Woodland',
	'Revere',
	'Euless',
	'Arlington Heights',
	'Hemet',
	'High Point',
	'Newark',
	'Midwest City',
	'San Marcos',
	'Port Orange',
	'Lakewood',
	'Westerville',
	'Rockford',
	'El Cajon',
	'St. Petersburg',
	'Downers Grove',
	'Milford',
	'Albany',
	'Las Vegas',
	'Pasadena',
	'Port St. Lucie',
	'Cedar Rapids',
	'Ormond Beach',
	'Quincy',
	'Miramar',
	'El Paso',
	'Topeka',
	'Rosemead',
	'Keizer',
	'Minnetonka',
	'Akron',
	'Edinburg',
	'Rancho Cucamonga',
	'North Charleston',
	'Louisville',
	'Watsonville',
	'Coconut Creek',
	'Bradenton',
	'Carlsbad',
	'Texas City',
	'Redding',
	'Wyoming',
	'Lorain',
	'Roy',
	'Fort Lauderdale',
	'Warner Robins',
	'Clearwater',
	'Cutler Bay',
	'Florence',
	'Terre Haute',
	'Temple',
	'Beavercreek',
	'Sioux Falls',
	'Columbus',
	'Margate',
	'Leominster',
	'Warwick',
	'Bakersfield',
	'Miami',
	'Lake Charles',
	'Richland',
	'Hickory',
	'South San Francisco',
	'Plymouth',
	'South Bend',
	'Edmond',
	'Des Moines',
	'Bonita Springs',
	'Draper',
	'Whittier',
	'Livonia',
	'Milwaukee',
	'Auburn',
	'Sumter',
	'Beverly',
	'Renton',
	'Centennial',
	'Richmond',
	'Anderson',
	'Beaumont',
	'Pflugerville',
	'Hoboken',
	'Lexington-Fayette',
	'Norwalk',
	'Yuma',
	'Highland',
	'Carol Stream',
	'Joliet',
	'Rock Hill',
	'Rancho Cordova',
	'Dearborn Heights',
	'Honolulu',
	'Victoria',
	'Attleboro',
	'Wylie',
	'Carrollton',
	'Plainfield',
	'Hoffman Estates',
	'Methuen',
	'North Port',
	'Rockville',
	'Burbank',
	'Fullerton',
	'Oshkosh',
	'Huntsville',
	'Farmington Hills',
	'Pico Rivera',
	'Cerritos',
	'La Puente',
	'Grand Junction',
	'Enid',
	'San Jose',
	'Round Rock',
	'Maple Grove',
	'Norman',
	'Homestead',
	'Friendswood',
	'Irvine',
	'Pocatello',
	'Pacifica',
	'Sheboygan',
	'Bossier City',
	'Cedar Park',
	'Sandy Springs',
	'Champaign',
	'Clifton',
	'Moore',
	'Blue Springs',
	'Lancaster',
	'Bryan',
	'Hurst',
	'Cape Coral',
	'Cupertino',
	'Pittsfield',
	'Gilroy',
	'Manchester',
	'Virginia Beach',
	'Salina',
	'Somerville',
	'Largo',
	'Fresno',
	'Phenix City',
	'Berwyn',
	'Palm Beach Gardens',
	'Pawtucket',
	'San Gabriel',
	'Winston-Salem',
	'Alpharetta',
	"O'Fallon",
	'Redwood City',
	'Union City',
	'Hallandale Beach',
	'Mankato',
	'Aliso Viejo',
	'Menifee',
	'Loveland',
	'Carpentersville',
	'Providence',
	'Hialeah',
	'San Ramon',
	'Ontario',
	'Kirkland',
	'St. George',
	'Hilton Head Island',
	'Glendale',
	'Meriden',
	'Gardena',
	'Westfield',
	'Elgin',
	'Plano',
	'Longmont',
	'Coppell',
	'Lakewood',
	'Jonesboro',
	'College Station',
	'Dearborn',
	'Utica',
	'Monroe',
	'Baltimore',
	'Springfield',
	'Pine Bluff',
	'Plainfield',
	'Lynn',
	'Woodbury',
	'Gainesville',
	'West Sacramento',
	'Sammamish',
	'Aventura',
	'Fayetteville',
	'San Rafael',
	'Conway',
	'Tacoma',
	'Middletown',
	'Burlington',
	'Twin Falls',
	'Sherman',
	'New York',
	'Simi Valley',
	'West Covina',
	'Castle Rock',
	'Valdosta',
	'Fort Worth',
	'Carson',
	'Evansville',
	'Santa Maria',
	'Brentwood',
	'La Mesa',
	'Westminster',
	'Reading',
	'Turlock',
	'Greeley',
	'Tyler',
	'Winter Garden',
	'Waco',
	'Martinez',
	'Thousand Oaks',
	'Azusa',
	'Bridgeport',
	'St. Louis Park',
	'Chesterfield',
	'Greenacres',
	'Pasco',
	'Torrance',
	'Madison',
	'Janesville',
	'Waukegan',
	'Bowling Green',
	'Arlington',
	'Lewisville',
	'Farmington',
	'Oakley',
	'Palo Alto',
	'Springfield',
	'New Bedford',
	'Redmond',
	'Brentwood',
	'Davis',
	'La Mirada',
	'Smyrna',
	'Altoona',
	'Dothan',
	'East Orange',
	'Tinley Park',
	'Biloxi',
	'Urbana',
	'Garden Grove',
	'Lynwood',
	'Northglenn',
	'Canton',
	'Brookhaven',
	'Baton Rouge',
	'Bristol',
	'Independence',
	'Lansing',
	'Orland Park',
	'Vineland',
	'Green Bay',
	'Evanston',
	'Ocoee',
	'Los Angeles',
	'Federal Way',
	'West Jordan',
	'Yucaipa',
	'Pittsburgh',
	'Downey',
	'Cicero',
	'South Gate',
	'Panama City',
	'Joplin',
	'League City',
	'Salt Lake City',
	'Fort Pierce',
	'Phoenix',
	'Corvallis',
	'Cedar Hill',
	'Chicopee',
	'Ocala',
	'Roswell',
	'Park Ridge',
	'Concord',
	'Olympia',
	'Huntington Beach',
	'Corpus Christi',
	'Haverhill',
	'Hanover Park',
	'Cambridge',
	'Glendale',
	'Stanton',
	'Summerville',
	'Davenport',
	'Boca Raton',
	'New Britain',
	'Roseville',
	'Cleveland Heights',
	'Gresham',
	'Lauderhill',
	'Hendersonville',
	'Santa Clara',
	'Oceanside',
	'Lake Forest',
	'Novi',
	'West New York',
	'Everett',
	'Linden',
	'Asheville',
	'Compton',
]

const states = [
	'Washington',
	'California',
	'Ohio',
	'Massachusetts',
	'South Carolina',
	'Connecticut',
	'Minnesota',
	'Michigan',
	'Louisiana',
	'Idaho',
	'Indiana',
	'California',
	'Georgia',
	'Colorado',
	'Florida',
	'Massachusetts',
	'Illinois',
	'Virginia',
	'Florida',
	'California',
	'Texas',
	'Kansas',
	'Mississippi',
	'North Carolina',
	'Florida',
	'Missouri',
	'California',
	'Minnesota',
	'Texas',
	'New Mexico',
	'Alabama',
	'Utah',
	'Massachusetts',
	'Pennsylvania',
	'South Carolina',
	'Georgia',
	'New York',
	'Wisconsin',
	'Texas',
	'Ohio',
	'California',
	'Arkansas',
	'Rhode Island',
	'Iowa',
	'New York',
	'Colorado',
	'Nevada',
	'California',
	'Connecticut',
	'Indiana',
	'Tennessee',
	'Washington',
	'Washington',
	'Pennsylvania',
	'Washington',
	'California',
	'Wisconsin',
	'Iowa',
	'Florida',
	'Texas',
	'California',
	'Michigan',
	'Florida',
	'Indiana',
	'Wyoming',
	'California',
	'Kansas',
	'Indiana',
	'Mississippi',
	'California',
	'Maryland',
	'California',
	'Maryland',
	'North Carolina',
	'Illinois',
	'Wisconsin',
	'Colorado',
	'Iowa',
	'Massachusetts',
	'California',
	'California',
	'Florida',
	'North Carolina',
	'Georgia',
	'Florida',
	'North Dakota',
	'Ohio',
	'Illinois',
	'Florida',
	'Arkansas',
	'Louisiana',
	'Washington',
	'Illinois',
	'Idaho',
	'Oregon',
	'California',
	'Washington',
	'Missouri',
	'Wisconsin',
	'Arizona',
	'Washington',
	'New York',
	'Colorado',
	'Illinois',
	'California',
	'California',
	'Ohio',
	'Michigan',
	'Arizona',
	'Arkansas',
	'Nevada',
	'Colorado',
	'Arizona',
	'California',
	'Texas',
	'Maine',
	'Minnesota',
	'Connecticut',
	'California',
	'Texas',
	'Michigan',
	'California',
	'Arizona',
	'California',
	'California',
	'Arizona',
	'Ohio',
	'Pennsylvania',
	'Nebraska',
	'New Jersey',
	'Massachusetts',
	'California',
	'Minnesota',
	'Missouri',
	'Maryland',
	'North Carolina',
	'Indiana',
	'California',
	'Illinois',
	'Montana',
	'California',
	'Texas',
	'Arizona',
	'Wisconsin',
	'North Carolina',
	'California',
	'California',
	'Washington',
	'California',
	'Arizona',
	'Florida',
	'Texas',
	'Virginia',
	'Texas',
	'Connecticut',
	'Iowa',
	'New York',
	'Idaho',
	'Wisconsin',
	'Texas',
	'North Carolina',
	'Massachusetts',
	'Oklahoma',
	'Texas',
	'Ohio',
	'Massachusetts',
	'Texas',
	'Arizona',
	'Tennessee',
	'Minnesota',
	'Florida',
	'New Jersey',
	'Pennsylvania',
	'California',
	'Texas',
	'California',
	'South Carolina',
	'North Carolina',
	'Michigan',
	'Pennsylvania',
	'California',
	'California',
	'Colorado',
	'Massachusetts',
	'Illinois',
	'Minnesota',
	'Tennessee',
	'Texas',
	'Texas',
	'Missouri',
	'Texas',
	'New Mexico',
	'Georgia',
	'Utah',
	'Nevada',
	'California',
	'California',
	'Ohio',
	'Kansas',
	'Texas',
	'Oklahoma',
	'Arizona',
	'Arizona',
	'Connecticut',
	'Michigan',
	'Wisconsin',
	'Texas',
	'Indiana',
	'California',
	'Minnesota',
	'New Jersey',
	'California',
	'California',
	'California',
	'California',
	'Oklahoma',
	'Wisconsin',
	'Arizona',
	'Texas',
	'Indiana',
	'Washington',
	'Massachusetts',
	'California',
	'New York',
	'California',
	'Michigan',
	'Virginia',
	'Maryland',
	'Connecticut',
	'Virginia',
	'Florida',
	'Idaho',
	'California',
	'Illinois',
	'California',
	'Arizona',
	'New Jersey',
	'Oregon',
	'Florida',
	'Michigan',
	'Texas',
	'Texas',
	'Texas',
	'Minnesota',
	'Michigan',
	'Ohio',
	'Texas',
	'New York',
	'Alabama',
	'Texas',
	'California',
	'Illinois',
	'New Mexico',
	'Illinois',
	'Illinois',
	'Minnesota',
	'California',
	'Florida',
	'Wyoming',
	'Texas',
	'North Carolina',
	'Florida',
	'Florida',
	'Kansas',
	'Massachusetts',
	'Illinois',
	'Massachusetts',
	'Florida',
	'Connecticut',
	'New Jersey',
	'Louisiana',
	'Minnesota',
	'Texas',
	'California',
	'Texas',
	'Texas',
	'Indiana',
	'California',
	'Florida',
	'West Virginia',
	'Texas',
	'Florida',
	'Texas',
	'Florida',
	'North Carolina',
	'Utah',
	'California',
	'Ohio',
	'South Dakota',
	'California',
	'Colorado',
	'Massachusetts',
	'Colorado',
	'California',
	'California',
	'New York',
	'Ohio',
	'Maryland',
	'Florida',
	'New Jersey',
	'Ohio',
	'Arizona',
	'Virginia',
	'Indiana',
	'Illinois',
	'Texas',
	'Alabama',
	'California',
	'Washington',
	'Texas',
	'North Carolina',
	'Michigan',
	'California',
	'California',
	'New York',
	'Nevada',
	'California',
	'California',
	'Ohio',
	'Alabama',
	'California',
	'Missouri',
	'Idaho',
	'District of Columbia',
	'Illinois',
	'Texas',
	'California',
	'North Dakota',
	'Illinois',
	'Nebraska',
	'California',
	'Kansas',
	'California',
	'California',
	'California',
	'Massachusetts',
	'Oklahoma',
	'Washington',
	'Tennessee',
	'New Jersey',
	'Colorado',
	'North Carolina',
	'Kansas',
	'California',
	'Minnesota',
	'Illinois',
	'Texas',
	'Wisconsin',
	'California',
	'California',
	'Wisconsin',
	'Pennsylvania',
	'Ohio',
	'Illinois',
	'Florida',
	'Texas',
	'Illinois',
	'California',
	'South Carolina',
	'New Hampshire',
	'Georgia',
	'New York',
	'New Jersey',
	'California',
	'Illinois',
	'Virginia',
	'Ohio',
	'California',
	'Michigan',
	'New Jersey',
	'Alaska',
	'North Dakota',
	'Florida',
	'Texas',
	'Texas',
	'Texas',
	'Ohio',
	'California',
	'California',
	'California',
	'Texas',
	'Utah',
	'Georgia',
	'California',
	'Ohio',
	'California',
	'Illinois',
	'Rhode Island',
	'Alabama',
	'California',
	'California',
	'Tennessee',
	'Missouri',
	'Texas',
	'Arizona',
	'Colorado',
	'California',
	'Indiana',
	'Florida',
	'Indiana',
	'Florida',
	'Arizona',
	'Illinois',
	'Rhode Island',
	'Indiana',
	'Kansas',
	'Georgia',
	'North Carolina',
	'Michigan',
	'Oregon',
	'North Carolina',
	'California',
	'Alabama',
	'Iowa',
	'California',
	'Alabama',
	'Florida',
	'Florida',
	'Arizona',
	'Florida',
	'Michigan',
	'New York',
	'California',
	'Michigan',
	'Florida',
	'California',
	'Washington',
	'California',
	'Texas',
	'Virginia',
	'Washington',
	'North Carolina',
	'Iowa',
	'California',
	'Utah',
	'California',
	'Minnesota',
	'Arizona',
	'Arizona',
	'Delaware',
	'Utah',
	'Michigan',
	'Texas',
	'North Carolina',
	'Texas',
	'California',
	'North Dakota',
	'Nevada',
	'Oklahoma',
	'Georgia',
	'North Carolina',
	'Georgia',
	'New Jersey',
	'California',
	'California',
	'Alabama',
	'Tennessee',
	'Indiana',
	'Illinois',
	'California',
	'Florida',
	'Tennessee',
	'Texas',
	'California',
	'Texas',
	'California',
	'Utah',
	'Washington',
	'Ohio',
	'Mississippi',
	'California',
	'California',
	'Mississippi',
	'Oregon',
	'California',
	'California',
	'California',
	'Washington',
	'Kansas',
	'California',
	'Arizona',
	'Ohio',
	'Michigan',
	'Minnesota',
	'Illinois',
	'Oregon',
	'Louisiana',
	'New Mexico',
	'New York',
	'California',
	'Illinois',
	'California',
	'Massachusetts',
	'California',
	'Tennessee',
	'Georgia',
	'Ohio',
	'Washington',
	'Florida',
	'Indiana',
	'Utah',
	'California',
	'California',
	'Texas',
	'California',
	'California',
	'Ohio',
	'New Jersey',
	'Virginia',
	'Oregon',
	'California',
	'Florida',
	'Ohio',
	'South Carolina',
	'California',
	'Georgia',
	'California',
	'Indiana',
	'Arizona',
	'California',
	'Iowa',
	'New York',
	'Tennessee',
	'Florida',
	'New York',
	'Delaware',
	'Minnesota',
	'California',
	'Illinois',
	'Washington',
	'Kentucky',
	'California',
	'Louisiana',
	'Utah',
	'Virginia',
	'California',
	'California',
	'Massachusetts',
	'Oregon',
	'California',
	'Ohio',
	'California',
	'Colorado',
	'Minnesota',
	'Virginia',
	'Oregon',
	'California',
	'Massachusetts',
	'Florida',
	'Florida',
	'California',
	'Virginia',
	'Wisconsin',
	'Florida',
	'Colorado',
	'California',
	'Michigan',
	'Illinois',
	'Florida',
	'California',
	'California',
	'Colorado',
	'New Mexico',
	'California',
	'Massachusetts',
	'California',
	'California',
	'California',
	'Utah',
	'Illinois',
	'California',
	'Illinois',
	'California',
	'California',
	'Arizona',
	'New Mexico',
	'Montana',
	'Illinois',
	'Michigan',
	'Missouri',
	'Iowa',
	'Arizona',
	'Texas',
	'Michigan',
	'Texas',
	'Pennsylvania',
	'Wisconsin',
	'Kansas',
	'Ohio',
	'California',
	'North Carolina',
	'Kentucky',
	'Florida',
	'California',
	'Illinois',
	'Montana',
	'Wisconsin',
	'Illinois',
	'Connecticut',
	'Pennsylvania',
	'Tennessee',
	'Ohio',
	'Massachusetts',
	'Utah',
	'California',
	'California',
	'Minnesota',
	'Oregon',
	'Tennessee',
	'California',
	'Connecticut',
	'Iowa',
	'Tennessee',
	'Pennsylvania',
	'Alabama',
	'Virginia',
	'California',
	'California',
	'Virginia',
	'Michigan',
	'California',
	'West Virginia',
	'California',
	'Florida',
	'South Carolina',
	'North Carolina',
	'California',
	'California',
	'Missouri',
	'Florida',
	'Utah',
	'Arkansas',
	'California',
	'Florida',
	'Texas',
	'Tennessee',
	'Texas',
	'Virginia',
	'California',
	'Massachusetts',
	'Georgia',
	'Illinois',
	'New Jersey',
	'Pennsylvania',
	'Missouri',
	'California',
	'Texas',
	'California',
	'Michigan',
	'Texas',
	'Michigan',
	'California',
	'Florida',
	'Nebraska',
	'Florida',
	'Arkansas',
	'California',
	'Texas',
	'Oklahoma',
	'Massachusetts',
	'New Jersey',
	'California',
	'Illinois',
	'Mississippi',
	'Tennessee',
	'New Jersey',
	'Minnesota',
	'Florida',
	'New York',
	'Iowa',
	'California',
	'Minnesota',
	'Montana',
	'Utah',
	'Virginia',
	'Texas',
	'Utah',
	'California',
	'Texas',
	'South Carolina',
	'Arkansas',
	'California',
	'New York',
	'Idaho',
	'Washington',
	'California',
	'New Jersey',
	'Massachusetts',
	'Nebraska',
	'Missouri',
	'Wisconsin',
	'Indiana',
	'Michigan',
	'Ohio',
	'California',
	'Massachusetts',
	'Texas',
	'Illinois',
	'California',
	'North Carolina',
	'Ohio',
	'Oklahoma',
	'California',
	'Florida',
	'California',
	'Ohio',
	'Illinois',
	'California',
	'Florida',
	'Illinois',
	'Connecticut',
	'Oregon',
	'Nevada',
	'Texas',
	'Florida',
	'Iowa',
	'Florida',
	'Massachusetts',
	'Florida',
	'Texas',
	'Kansas',
	'California',
	'Oregon',
	'Minnesota',
	'Ohio',
	'Texas',
	'California',
	'South Carolina',
	'Kentucky',
	'California',
	'Florida',
	'Florida',
	'California',
	'Texas',
	'California',
	'Michigan',
	'Ohio',
	'Utah',
	'Florida',
	'Georgia',
	'Florida',
	'Florida',
	'Alabama',
	'Indiana',
	'Texas',
	'Ohio',
	'South Dakota',
	'Indiana',
	'Florida',
	'Massachusetts',
	'Rhode Island',
	'California',
	'Florida',
	'Louisiana',
	'Washington',
	'North Carolina',
	'California',
	'Minnesota',
	'Indiana',
	'Oklahoma',
	'Iowa',
	'Florida',
	'Utah',
	'California',
	'Michigan',
	'Wisconsin',
	'Washington',
	'South Carolina',
	'Massachusetts',
	'Washington',
	'Colorado',
	'Virginia',
	'Indiana',
	'California',
	'Texas',
	'New Jersey',
	'Kentucky',
	'California',
	'Arizona',
	'California',
	'Illinois',
	'Illinois',
	'South Carolina',
	'California',
	'Michigan',
	'Hawaii',
	'Texas',
	'Massachusetts',
	'Texas',
	'Texas',
	'Illinois',
	'Illinois',
	'Massachusetts',
	'Florida',
	'Maryland',
	'California',
	'California',
	'Wisconsin',
	'Texas',
	'Michigan',
	'California',
	'California',
	'California',
	'Colorado',
	'Oklahoma',
	'California',
	'Texas',
	'Minnesota',
	'Oklahoma',
	'Florida',
	'Texas',
	'California',
	'Idaho',
	'California',
	'Wisconsin',
	'Louisiana',
	'Texas',
	'Georgia',
	'Illinois',
	'New Jersey',
	'Oklahoma',
	'Missouri',
	'California',
	'Texas',
	'Texas',
	'Florida',
	'California',
	'Massachusetts',
	'California',
	'New Hampshire',
	'Virginia',
	'Kansas',
	'Massachusetts',
	'Florida',
	'California',
	'Alabama',
	'Illinois',
	'Florida',
	'Rhode Island',
	'California',
	'North Carolina',
	'Georgia',
	'Missouri',
	'California',
	'California',
	'Florida',
	'Minnesota',
	'California',
	'California',
	'Colorado',
	'Illinois',
	'Rhode Island',
	'Florida',
	'California',
	'California',
	'Washington',
	'Utah',
	'South Carolina',
	'California',
	'Connecticut',
	'California',
	'Massachusetts',
	'Illinois',
	'Texas',
	'Colorado',
	'Texas',
	'Ohio',
	'Arkansas',
	'Texas',
	'Michigan',
	'New York',
	'Louisiana',
	'Maryland',
	'Missouri',
	'Arkansas',
	'New Jersey',
	'Massachusetts',
	'Minnesota',
	'Florida',
	'California',
	'Washington',
	'Florida',
	'Arkansas',
	'California',
	'Arkansas',
	'Washington',
	'Connecticut',
	'Vermont',
	'Idaho',
	'Texas',
	'New York',
	'California',
	'California',
	'Colorado',
	'Georgia',
	'Texas',
	'California',
	'Indiana',
	'California',
	'Tennessee',
	'California',
	'Colorado',
	'Pennsylvania',
	'California',
	'Colorado',
	'Texas',
	'Florida',
	'Texas',
	'California',
	'California',
	'California',
	'Connecticut',
	'Minnesota',
	'Missouri',
	'Florida',
	'Washington',
	'California',
	'Wisconsin',
	'Wisconsin',
	'Illinois',
	'Kentucky',
	'Texas',
	'Texas',
	'New Mexico',
	'California',
	'California',
	'Oregon',
	'Massachusetts',
	'Washington',
	'California',
	'California',
	'California',
	'Tennessee',
	'Pennsylvania',
	'Alabama',
	'New Jersey',
	'Illinois',
	'Mississippi',
	'Illinois',
	'California',
	'California',
	'Colorado',
	'Ohio',
	'Georgia',
	'Louisiana',
	'Connecticut',
	'Missouri',
	'Michigan',
	'Illinois',
	'New Jersey',
	'Wisconsin',
	'Illinois',
	'Florida',
	'California',
	'Washington',
	'Utah',
	'California',
	'Pennsylvania',
	'California',
	'Illinois',
	'California',
	'Florida',
	'Missouri',
	'Texas',
	'Utah',
	'Florida',
	'Arizona',
	'Oregon',
	'Texas',
	'Massachusetts',
	'Florida',
	'Georgia',
	'Illinois',
	'New Hampshire',
	'Washington',
	'California',
	'Texas',
	'Massachusetts',
	'Illinois',
	'Massachusetts',
	'Arizona',
	'California',
	'South Carolina',
	'Iowa',
	'Florida',
	'Connecticut',
	'Michigan',
	'Ohio',
	'Oregon',
	'Florida',
	'Tennessee',
	'California',
	'California',
	'California',
	'Michigan',
	'New Jersey',
	'Massachusetts',
	'New Jersey',
	'North Carolina',
	'California',
]

const cityObjects = cities.map((city, index) => {
    return {
        id: index,
        city: city,
        state: states[index]
    }
})

export default cityObjects