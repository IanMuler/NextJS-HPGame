/*
 * This file contains all the constants used in the project
 * charactersSelector: contains the names of the characters
 * imagesByLevel: contains the images of the levels
 * fightClasses: contains the classes of the characters in the fight
 */

type CharacterSelector = {
  name: string;
  image: string;
  apiImg: string;
};

export const charactersSelector: CharacterSelector[] = [
  {
    name: "Harry",
    image: "/images/Harry-Frente.png",
    apiImg: "/images/Harry-Foto.webp",
  },
  {
    name: "Hermione",
    image: "/images/Hermione-Frente.png",
    apiImg: "/images/Hermione-Foto.webp",
  },
  {
    name: "Ron",
    image: "/images/Ron-Frente.png",
    apiImg: "/images/Ron-Foto.webp",
  },
];

type LevelImages = {
  fightWallpaper: string;
  floor: string;
  heroes: string[];
  villains: string;
  attack2png: string;
  defense2png: string;
  cure2png: string;
};

type ImagesByLevel = LevelImages[];

export const imagesByLevel: ImagesByLevel = [
  {
    fightWallpaper: "/images/Fondo-troll.jpg",
    floor: "/images/Piso1-12.jpg",
    // Nivel 0 => (Troll)
    heroes: [
      "/images/Harry1.png", // Harry
      "/images/Hermione1.png", // Hermione
      "/images/Ron1.png", // Ron
    ],
    villains: "/images/Troll.png",
    attack2png: "/images/Claws212.png",
    defense2png: "/images/baston.png",
    cure2png: "/images/steak.png",
  },
  {
    fightWallpaper: "/images/Fondo-quirrel.jpg",
    floor: "/images/Piso2.png",
    // Nivel 1 => (Quirrell)
    heroes: ["/images/Harry1.png", "/images/Hermione1.png", "/images/Ron1.png"],
    villains: "/images/Quirrell.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Fondo-basilisco.jpg",
    floor: "/images/Piso3-4.png",
    // Nivel 2 => (Basilisco)
    heroes: ["/images/Harry1.png", "/images/Hermione1.png", "/images/Ron2.png"],
    villains: "/images/Basilisco.png",
    attack2png: "/images/Claws212.png",
    defense2png: "/images/escudosnake-removebg-preview.png",
    cure2png: "/images/steak.png",
  },
  {
    fightWallpaper: "/images/Fondo-tom.jpg",
    floor: "/images/Piso3-4.png",
    // Nivel 3 => (Tom Riddle)
    heroes: ["/images/Harry1.png", "/images/Hermione1.png", "/images/Ron2.png"],
    villains: "/images/Tom-Riddle.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Pettigrew2.jpg",
    floor: "/images/Piso5-6.jpg",
    // Nivel 4 => (Pettigrew)
    heroes: ["/images/Harry5.png", "/images/Hermione3.png", "/images/Ron4.png"],
    villains: "/images/Petegrew.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Fondo-dementor.jpg",
    floor: "/images/Piso5-6.jpg",
    // Nivel 5 => (Dementor)
    heroes: ["/images/Harry5.png", "/images/Hermione3.png", "/images/Ron4.png"],
    villains: "/images/Dementor.png",
    attack2png: "/images/Claws212.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Fondo-dragon.jpg",
    floor: "/images/Piso7.jpg",
    // Nivel 6 => (Dragon)
    heroes: ["/images/Harry4.png", "/images/Hermione4.png", "/images/Ron4.png"],
    villains: "/images/Dragon2.png",
    attack2png: "/images/Claws212.png",
    defense2png: "/images/escudosnake-removebg-preview.png",
    cure2png: "/images/steak.png",
  },
  {
    fightWallpaper: "/images/Fondo-voldemort.jpg",
    floor: "/images/Piso8-13.jpg",
    // Nivel 7 => (Voldemort1)
    heroes: ["/images/Harry4.png", "/images/Hermione4.png", "/images/Ron4.png"],
    villains: "/images/Voldemort.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Fondo-umbridge.jpg",
    floor: "/images/Piso9.jpg",
    // Nivel 8 => (Umbridge)
    heroes: [
      "/images/Harry5-2.png",
      "/images/Hermione5.png",
      "/images/Ron4.png",
    ],
    villains: "/images/Umbridge.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Fondo-lucius.jpg",
    floor: "/images/Piso10.jpg",
    // Nivel 9 => (Lucius)
    heroes: [
      "/images/Harry5-2.png",
      "/images/Hermione5.png",
      "/images/Ron4.png",
    ],
    villains: "/images/Lucius.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Fondo-bellatrix.jpg",
    floor: "/images/Piso11.jpg",
    // Nivel 10 => (Bellatrix)
    heroes: [
      "/images/Harry5-2.png",
      "/images/Hermione5.png",
      "/images/Ron4.png",
    ],
    villains: "/images/Bellatrix.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Fondo-draco.jpg",
    floor: "/images/Piso1-12.jpg",
    // Nivel 11 => (Draco)
    heroes: ["/images/Harry6.png", "/images/Hermione6.png", "/images/Ron4.png"],
    villains: "/images/Draco.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
  {
    fightWallpaper: "/images/Fondo-voldemort2.jpg",
    floor: "/images/Piso8-13.jpg",
    // Nivel 12 => (Voldemort2)
    heroes: [
      "/images/Harry7-2.png",
      "/images/Hermione7.png",
      "/images/Ron4.png",
    ],
    villains: "/images/Voldemort2.png",
    attack2png: "/images/Rayoverde.png",
    defense2png: "/images/Shield-Villain.png",
    cure2png: "/images/curevillain.png",
  },
];

type FightClasses = {
  heroes: string[][];
  villains: string[];
};

export const fightClasses: FightClasses = {
  heroes: [
    [
      "Harry0",
      "Harry1",
      "Harry2",
      "Harry3",
      "Harry4",
      "Harry5",
      "Harry6",
      "Harry7",
      "Harry8",
      "Harry9",
      "Harry10",
      "Harry11",
      "Harry12",
    ],
    [
      "Hermione0",
      "Hermione1",
      "Hermione2",
      "Hermione3",
      "Hermione4",
      "Hermione5",
      "Hermione6",
      "Hermione7",
      "Hermione8",
      "Hermione9",
      "Hermione10",
      "Hermione11",
      "Hermione12",
    ],
    [
      "Ron0",
      "Ron1",
      "Ron2",
      "Ron3",
      "Ron4",
      "Ron5",
      "Ron6",
      "Ron7",
      "Ron8",
      "Ron9",
      "Ron10",
      "Ron11",
      "Ron12",
    ],
  ],
  villains: [
    "Troll",
    "Quirrell",
    "Basilisco",
    "Tom",
    "Pettigrew",
    "Dementor",
    "Dragon",
    "Voldemort1",
    "Umbridge",
    "Lucius",
    "Bellatrix",
    "Draco",
    "Voldemort2",
  ],
};
