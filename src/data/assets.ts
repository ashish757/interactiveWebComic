export const ASSETS = {
    backgrounds: {
        houseFamily: "/assets/house-familiy.jpeg",
        house: "/assets/house.jpeg",
        villainAtGate: "/assets/villain-at-gate.jpeg",
        villainFather: "/assets/villain-father.jpeg",
        houseAttack: "/assets/house-attack.jpeg",
        fatherDead: "/assets/father-dead.jpeg",
        motherProtect: "/assets/mother-protect.jpeg",
        motherCry: "/assets/mother-cry.jpeg",
        motherDead: "/assets/mother-dead.jpeg",
        babyAlone: "/assets/baby-alone.jpeg",
        babySaved: "/assets/baby-saved.jpeg",
        villainBlast: "/assets/villain-blast.jpeg",
        villainAttack: "/assets/villain-attack.jpeg",
        villainDie: "/assets/villain-die.jpeg",
        villainDie2: "/assets/villain-die-2.jpeg",
        bgForest: "/assets/bg/forest.jpeg",
        bgLight: "/assets/bg/lightning.jpeg",
        bgRain: "/assets/bg/rainbg.mp4",
    },
    characters: {
        villain: "/assets/villain.png",
        father: "/assets/char/father.png",
        mother: "/assets/char/mother.png",
        kid: "/assets/char/kid.png",
        step1: "/assets/step1.jpeg",
        step2: "/assets/step2.jpeg",
        step3: "/assets/step3.jpeg",
        step4: "/assets/step4.jpeg",
        step5: "/assets/step5.jpeg",
    }
} as const;

export type BackgroundKey = keyof typeof ASSETS.backgrounds;
export type CharacterKey = keyof typeof ASSETS.characters;