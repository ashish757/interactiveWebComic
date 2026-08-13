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
        awake: "/assets/p2/awake.jpeg",
        enter: "/assets/p2/enter.jpeg",
        takeoff: "/assets/p2/takeoff.jpeg",
        sky: "/assets/p2/sky.jpeg",
        ministry: "/assets/p2/ministry.jpeg",
        fly: "/assets/p2/fly.mp4",

        ball: "/assets/p2/ball.jpeg",
        entry: "assets/p2/entry.jpeg",
        open1: "/assets/p2/open1.jpeg",
        open2: "/assets/p2/open2.jpeg",
        puzzleGate: "/assets/p2/puzzlegate.jpeg",
        snatch: "/assets/p2/snatch.jpeg",
        inside: "/assets/p2/inside.jpeg",
        insidebg: "/assets/p2/insidebg.jpeg",
        run: "/assets/p2/run.jpeg",
        birth1: "/assets/p2/birth1.jpeg",
        birth2: "/assets/p2/birth2.jpeg",
        bottle1: "/assets/p2/bottle1.jpeg",
        bottle2: "/assets/p2/bottle2.jpeg",
        chainDraco: "/assets/p2/chainDraco.jpeg",
        chainShub: "/assets/p2/chainShub.jpeg",
        crossbg: "/assets/p2/crossbg.jpeg",
        die1: "/assets/p2/die1.jpeg",
        kill: "/assets/p2/kill.jpeg",
        fight2: "/assets/p2/fight2.jpeg",
        snakebg: "/assets/p2/snakebg.jpeg",

        simonbg: "/assets/p2/simonbg.jpeg",



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