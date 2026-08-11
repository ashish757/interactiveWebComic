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
        platform: "/assets/p2/platform.jpeg",
        hogwarts: "/assets/p2/hogwarts.jpeg",
        bgClass: "/assets/p2/bg-class.jpeg",
        wear: "/assets/p2/wear.jpeg",
        restricted: "/assets/p2/restricted.jpeg",
        shelf: "/assets/p2/shelf.jpeg",
        thinking: "/assets/p2/thinking.jpeg",
        reading: "/assets/p2/reading.jpeg",
        corri: "/assets/p2/corri.jpeg",
        lib: "/assets/p2/lib.jpeg",

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
        train: "/assets/p2/train.png",
        "3sitting": "/assets/p2/3sitting.jpeg",
        dinner: "/assets/p2/dinner.jpeg",
        "3adven1": "assets/p2/3adven1.jpeg",
        "3adven2": "assets/p2/3adven2.jpeg",
        "3adven3": "assets/p2/3adven3.jpeg",
        "3adven4": "assets/p2/3adven4.jpeg",

    },
    audio: {
        click: "/assets/audio/vine-boom.mp3",
        fah: "assets/audio/fah.mp3",


    }
} as const;

export type BackgroundKey = keyof typeof ASSETS.backgrounds;
export type CharacterKey = keyof typeof ASSETS.characters;
export type AudioKey = keyof typeof ASSETS.audio;