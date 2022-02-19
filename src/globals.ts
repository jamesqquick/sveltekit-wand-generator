// export enum CoreEnum {
//     PhoenixFeather = "Phoenix Feather",
//     snallygasterHeartstring = "Snallygaster Heartstring",
//     test = "test"
// }

// export enum WoodEnum {
//     Cypress = "Cypress",
//     Spruce = "Spruce",
//     Holly = "Holly"
// }

export const woods: string[] = ['Acacia',
    'Alder',
    'Apple',
    'Ash',
    'Aspen',
    'Beech',
    'Blackthorn',
    'Black Walnut',
    'Cedar',
    'Cherry',
    'Chestnut',
    'Cypress',
    'Dogwood',
    'Ebony',
    'English oak',
    'Elder',
    'Elm',
    'Fir',
    'Hawthorn',
    'Hazel',
    'Holly',
    'Hornbeam',
    'Larch',
    'Laurel',
    'Maple',
    'Pear',
    'Pine',
    'Poplar',
    'Red oak',
    'Redwood',
    'Reed',
    'Rosewood',
    'Rowan',
    'Silver lime',
    'Spruce',
    'Snakewood',
    'Sugar Maple',
    'Sycamore',
    'Tamarack',
    'Vine',
    'Walnut',
    'Willow',
    'Yew'
];

export const cores: string[] = ['Unicorn hair',
    'Dragon heartstring',
    'Phoenix feather',
    'Veela hair',
    'Thestral tail hair',
    'Troll whisker',
    'Kelpie hair',
    'Thunderbird tail feather',
    'Wampus cat hair',
    'White River Monster spine',
    'Rougarou hair',
    'Kneazle whiskers',
    'Horned Serpent horn',
    'Snallygaster heartstring',
    'Jackalope antler',
    'Basilisk horn'
];

export const makers: string[] = [
    'Cosme Acajor',
    'Violetta Beauvais',
    'Arturo Cephalopos',
    'Death',
    'Mykew Gregorovitch',
    'Johannes Jonker',
    'Jimmy Kiddell',
    'Antioch Peverell',
    'Geraint Ollivander',
    'Gerbold Ollivander',
    'Gervaise Ollivander',
    'Garrick Ollivander',
    'Thiago Quintana',
    'Shikoba Wolfe',
    'Isolt Sayre',
    'James Steward',
    'Salazar Slytherin',
]


export const lengths = [
    10, 10.25, 10.5, 10.75,
    11, 11.25, 11.5, 11.75,
    11, 11.25, 11.5, 11.75,
    12, 12.25, 12.5, 12.75,
    13, 13.25, 13.5, 13.75,
    14, 14.25, 14.5, 14.75,
    15, 15.25, 15.5, 15.75,
    16, 16.25, 16.5, 16.75,
    17, 17.25, 17.5, 17.75,
    18, 18.25, 18.5, 18.75,
    19, 19.25, 19.5, 19.75,
]

export const flexibilities = [
    "Very flexible",
    "Quite flexible",
    "Surprisingly swishy",
    "Swishy",
    "Quite bendy",
    "Fairly bendy",
    "Whippy",
    "Pliant",
    "Supple",
    "Reasonably supple",
    "Slightly springy",
    "Slightly yielding",
    "Solid",
    "Stiff",
    "Hard",
    "Rigid",
    "Unbending",
    "Unyielding",
    "Brittle",
]

export const propertiesConfigArr = [
    { name: 'core', dataArray: cores },
    { name: 'wood', dataArray: woods },
    { name: 'flexibility', dataArray: flexibilities },
    { name: 'length', dataArray: lengths },
    { name: 'maker', dataArray: makers }
]