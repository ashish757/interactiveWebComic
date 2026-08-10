export const ASSETS = {
    backgrounds: {
        houseFamily: "/assets/house-familiy.jpeg",
        house: "/assets/house.jpeg",
        villainAtGate: "/assets/villain-at-gate.jpeg",
        villainFather: "/assets/villain-father.jpeg",
        houseAttack: "/assets/house-attack.jpeg",
        fatherDead: "/assets/father-dead.jpeg",
        motherCry: "/assets/mother-cry.jpeg",
        motherDead: "/assets/mother-dead.jpeg",
        babyAlone: "/assets/baby-alone.jpeg",
        babySaved: "/assets/baby-saved.jpeg",
        villainBlast: "/assets/villain-blast.jpeg",
        villainAttack: "/assets/villain-attack.jpeg",
        villainDie: "/assets/villain-die.jpeg",
        villainDie2: "/assets/villain-die-2.jpeg",
    },
    characters: {
        villain: "/assets/villain.png", // using public/assets/villain.png
        father: "/assets/char/father.png",
        mother: "/assets/char/mother.png",
        kid: "/assets/char/kid.png"
    }
} as const;

export type BackgroundKey = keyof typeof ASSETS.backgrounds;
export type CharacterKey = keyof typeof ASSETS.characters;