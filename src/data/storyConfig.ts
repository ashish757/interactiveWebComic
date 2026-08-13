export type TimelinePhase = [number, number];

export type AnimationType = 'bottom' | 'top' | 'left' | 'right' | 'fade' | 'pop' | 'none';

export type TimelineConfig = {
    enter?: TimelinePhase;
    stay?: TimelinePhase;
    exit?: TimelinePhase;
};

export type StoryElement = {
    id: string;
    type: string;
    layout?: { top?: string; bottom?: string; left?: string; right?: string; transform?: string; width?: string; height?: string };
    timeline: TimelineConfig;
    enterFrom?: AnimationType;
    exitTo?: AnimationType;
    animation?: 'pulse' | 'rocking' | 'scale-up-scale-down' | 'none';

    assetKey?: string;
    className?: string;
    classNameImg?: string;

    text?: string;
    speaker?: string;
    tailPosition?: "bottom-left" | "bottom-right" | 'left' | 'right';
    
    gameTarget?: string;
};

export type BranchCondition = {
    game: string;
    outcome: 'win' | 'lose';
};

export type Scene = {
    sceneId: number;
    duration: number;
    baseBackground: string;
    elements: StoryElement[];
    // For minigame scenes
    isMinigame?: string;
    minigameBackground?: string;
    // For branching narrative scenes
    branch?: BranchCondition;
};







export const storyData: Scene[] = [
    {
        "sceneId": 1,
        "duration": 210,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s1-bg",
                "type": "background_element",
                "assetKey": "houseFamily",
                "timeline": {
                    "enter": [0, 0],
                    "stay": [0, 210],
                    "exit": [210, 210]
                },
                "enterFrom": "none",
                "exitTo": "fade"
            },
            {
                "id": "s1-title",
                "type": "title",
                "text": "HOME",
                "layout": {
                    "top": "10%",
                    "left": "10%"
                },
                "timeline": {
                    "enter": [20, 30],
                    "stay": [30, 90],
                    "exit": [90, 100]
                },
                "enterFrom": "fade",
                "exitTo": "fade"
            },
            {
                "id": "s2-villain",
                "type": "character",
                "assetKey": "villain",
                "classNameImg": "min-h-screen",
                "layout": {
                    "bottom": "0%",
                    "top": "0%",
                    "right": "0%"
                },
                "timeline": {
                    "enter": [100, 110],
                    "stay": [110, 150],
                    "exit": [150, 200]
                },
                "enterFrom": "right",
                "exitTo": "none"
            },
            {
                "id": "s2-title",
                "type": "title",
                "text": "Mogambo",
                "layout": { "top": "10%", "left": "10%" },
                "timeline": {
                    "enter": [100, 110],
                    "stay": [110, 150],
                    "exit": [150, 200]
                },
                "enterFrom": "left",
                "exitTo": "none"
            },
            {
                "id": "s2-dialogue-1",
                "type": "title",
                "speaker": "Mugambo",
                "text": "this world will be mine.",
                "layout": {
                    "top": "25%",
                    "left": "5%"
                },
                "timeline": {
                    "enter": [120, 130],
                    "stay": [130, 150],
                    "exit": [150, 160]
                },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            },
            {
                "id": "s2-dialogue-2",
                "type": "title",
                "speaker": "Mugambo",
                "text": "No one can stop me!",
                "layout": {
                    "top": "25%",
                    "left": "10%"
                },
                "timeline": {
                    "enter": [160, 170],
                    "stay": [170, 200],
                    "exit": [200, 210]
                },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            }
        ]
    },
    {
        "sceneId": 3,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s3-bg", 
                "type": "background_element", 
                "assetKey": "house", 
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s3-dialogue",
                "type": "title",
                "text": "KRAKOOM!",
                "layout": { "top": "20%", "right": "15%" },
                "timeline": { "enter": [10, 20], "stay": [20, 150], "exit": [150, 150] },
                "enterFrom": "pop",
                "exitTo": "none",
                "tailPosition": "right"
            }
        ]
    },
    {
        "sceneId": 4,
        "duration": 120,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s4-bg", 
                "type": "background_element", 
                "assetKey": "villainAtGate",
                "timeline": { "enter": [0, 0], "stay": [0, 120], "exit": [120, 120] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s4-dialogue",
                "type": "dialogue",
                "text": "Prophecy!! I must stop it!",
                "layout": { "top": "5%", "left": "55%" },
                "timeline": { "enter": [10, 20], "stay": [20, 120], "exit": [120, 120] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "left"
            }
        ]
    },
    {
        "sceneId": 5,
        "duration": 120,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s5-bg", 
                "type": "background_element", 
                "assetKey": "houseAttack",
                "timeline": { "enter": [0, 0], "stay": [0, 120], "exit": [120, 120] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s5-dialogue1",
                "type": "title",
                "text": "CREEK!",
                "layout": { "top": "30%", "right": "5%" },
                "timeline": { "enter": [1, 10], "stay": [10, 120], "exit": [120, 120] },
                "enterFrom": "pop",
                "exitTo": "none",
                "tailPosition": "right"
            },
            {
                "id": "s5-dialogue2",
                "type": "dialogue",
                "text": "Someone is at the gate!",
                "layout": { "top": "10%", "left": "15%" },
                "timeline": { "enter": [20, 30], "stay": [30, 120], "exit": [120, 120] },
                "enterFrom": "pop",
                "exitTo": "none",
                "tailPosition": "right"
            }
        ]
    },
    {
        "sceneId": 7,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s7-bg", 
                "type": "background_element", 
                "assetKey": "villainFather",
                "timeline": { "enter": [0, 0], "stay": [0, 200], "exit": [200, 200] }, 
                "enterFrom": "none",
                "exitTo": "none"
            },
            { 
                "id": "s7-dialogue", 
                "type": "dialogue", 
                "speaker": "Father", 
                "text": "I won't let you hurt my family!",
                "layout": { "top": "1%", "left": "22%" },
                "timeline": { "enter": [10, 20], "stay": [20, 150], "exit": [150, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            },
            {
                "id": "s7-dialogue2",
                "type": "dialogue",
                "speaker": "mogambo",
                "text": "Try and stop me!",
                "layout": { "top": "8%", "left": "56%" },
                "timeline": { "enter": [60, 70], "stay": [70, 150], "exit": [150, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "right"
            }
        ]
    },
    {
        "sceneId": 6,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s6-bg",
                "type": "background_element",
                "assetKey": "villainAttack",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s5-dialogue",
                "type": "dialogue",
                "speaker": "Mugambo",
                "text": "your magic is no match for me!",
                "layout": { "top": "10%", "left": "10%", "transform": "translateX(-50%)" },
                "timeline": { "enter": [10, 20], "stay": [20, 140], "exit": [140, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "right"
            }, {

                "id": "s5-dialogue2",
                "type": "title",
                "text": "CRIT!!",
                "layout": { "top": "30%", "right": "8%", "transform": "translateX(50%)" },
                "timeline": { "enter": [-100, -90], "stay": [-90, 150], "exit": [150, 150] },
                "enterFrom": "left",
                "exitTo": "none",
                "tailPosition": "left"
            }
        ]
    },
    {
        "sceneId": 9,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s9-bg", 
                "type": "background_element", 
                "assetKey": "fatherDead",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] }, 
                "enterFrom": "none",
                "exitTo": "none"
            },
            {

                "id": "s9-dialogue",
                "type": "dialogue",
                "speaker": "Father",
                "text": "You know the prophecy will come true! you will be defeated by my son!",
                "layout": { "top": "23%", "left": "30%" },
                "timeline": { "enter": [10, 20], "stay": [20, 140], "exit": [140, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            },
            {
                "id": "s9-dialogue2",
                "type": "dialogue",
                "speaker": "mogambo",
                "text": "Only if he lives!",
                "layout": { "top": "10%", "right": "2%" },
                "timeline": { "enter": [50, 60], "stay": [60, 140], "exit": [140, 150] },
                "enterFrom": "right",
                "exitTo": "none",
                "tailPosition": "right"
            }
        ]
    },
    {
        "sceneId": 8,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s8-bg",
                "type": "background_element",
                "assetKey": "villainBlast",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s8-title",
                "type": "title",
                "text": "KA-BOOM",
                "layout": {
                    "top": "10%",
                    "left": "10%"
                },
                "timeline": { "enter": [10, 10], "stay": [10, 150], "exit": [150, 150] },
                "enterFrom": "pop",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 101,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s101-bg",
                "type": "background_element", 
                "assetKey": "motherProtect",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] }, 
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s101-dialogue1",
                "type": "title",
                "text": "Barrier!",
                "layout": { "top": "1%", "left": "10%" },
                "timeline": { "enter": [-20, -10], "stay": [-10, 140], "exit": [140, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            },
            {
                "id": "s101-dialogue2",
                "type": "dialogue",
                "speaker": "Mother",
                "text": "I Will save my child!",
                "layout": { "top": "1%", "left": "50%" },
                "timeline": { "enter": [10, 20], "stay": [20, 140], "exit": [140, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            }

        ]
    },
    {
        "sceneId": 11,
        "duration": 250,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s11-bg1", 
                "type": "background_element", 
                "assetKey": "villainDie",
                "timeline": { "enter": [0, 0], "stay": [0, 120], "exit": [120, 140] }, 
                "enterFrom": "none",
                "exitTo": "fade"
            },
            {
                "id": "s11-dialogue",
                "type": "title",
                "speaker": "Father",
                "text": "Wahtttt...aaah",
                "layout": { "top": "40%", "left": "70%" },
                "timeline": { "enter": [10, 20], "stay": [20, 90], "exit": [90, 100] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            },
            { 
                "id": "s11-bg2", 
                "type": "background_element", 
                "assetKey": "villainDie2",
                "timeline": { "enter": [120, 140], "stay": [140, 250], "exit": [250, 250] }, 
                "enterFrom": "fade",
                "exitTo": "none"
            },
            {
                "id": "s11-dialogue2",
                "type": "title",
                "text": "Disintegrate!!",
                "layout": { "top": "8%", "left": "65%" },
                "timeline": { "enter": [120, 130], "stay": [130, 250], "exit": [250, 250] },
                "enterFrom": "pop",
                "exitTo": "none",
                "tailPosition": "bottom-left"
            },
            {
                "id": "s11-dialogue3",
                "type": "dialogue",
                "speaker": "Father",
                "text": "This is not possible...",
                "layout": { "top": "40%", "left": "70%" },
                "timeline": { "enter": [140, 150], "stay": [150, 240], "exit": [240, 250] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            }
        ]
    },{
    "sceneId": 111,
    "duration": 150,
    "baseBackground": "none",
    "elements": [
        {
            "id": "s111-bg",
            "type": "background_element",
            "assetKey": "motherCry",
            "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
            "enterFrom": "none",
            "exitTo": "none"
        },
        {
            "id": "s111-dialogue",
            "type": "dialogue",
            "speaker": "mother",
            "text": "Whyyy!",
            "layout": { "top": "1%", "left": "50%" },
            "timeline": { "enter": [20, 30], "stay": [20, 80], "exit": [80, 100] },
            "enterFrom": "pop",
            "exitTo": "fade",
            "tailPosition": "bottom-left"
        },
        {
            "id": "s111-dialogue2",
            "type": "dialogue",
            "speaker": "kid",
            "text": "Zzzzz...",
            "layout": { "top": "40%", "left": "70%" },
            "timeline": { "enter": [50, 70], "stay": [70, 150], "exit": [150, 170] },
            "enterFrom": "pop",
            "exitTo": "fade",
            "tailPosition": "bottom-left"
        }
    ]
},
    {
        "sceneId": 12,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s12-bg", 
                "type": "background_element", 
                "assetKey": "motherDead",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] }, 
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },

    {
        "sceneId": 13,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s13-bg", 
                "type": "background_element", 
                "assetKey": "babyAlone",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] }, 
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 14,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s14-bg", 
                "type": "background_element", 
                "assetKey": "babySaved",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            { 
                "id": "s14-title", 
                "type": "title", 
                "text": "Prophecy will prove itself",
                "layout": { "top": "10%", "left": "10%" },
                "timeline": { "enter": [50, 70], "stay": [70, 150], "exit": [150, 150] },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 15,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s15-bg",
                "type": "background_element",
                "assetKey": "platform",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s15-title",
                "type": "character",
                "assetKey": "train",
                "classNameImg": "scale-110 rotate-[0deg]",
                "layout": { "top": "1%", "left": "10%" },
                "timeline": { "enter": [-60, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "left",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 16,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s16-bg",
                "type": "background_element",
                "assetKey": "hogwarts",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },

            {
                "id": "s16-c",
                "type": "character",
                "assetKey": "3sitting",
                animation: "rocking",

                "layout": { height: "300px", "top": "10%", "left": "10%" },
                "timeline": { "enter": [0, 10], "stay": [10, 150], "exit": [150, 150] },
                "enterFrom": "left",
                "exitTo": "none"
            },

            {
                "id": "s16-c2",
                "type": "character",
                "assetKey": "dinner",
                animation: "scale-up-scale-down",

                "layout": { height: "400px", "bottom": "10%", "right": "10%" },
                "timeline": { "enter": [0, 10], "stay": [10, 150], "exit": [150, 150] },
                "enterFrom": "right",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 17,
        "duration": 250,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s17-bg",
                "type": "background_element",
                "assetKey": "bgClass",
                "timeline": { "enter": [0, 0], "stay": [0, 250], "exit": [250, 250] },
                "enterFrom": "none",
                "exitTo": "none"
            },

            {
                "id": "s17-c",
                "type": "character",
                "assetKey": "3adven1",
                "layout": { height: "500px", "top": "20%", "left": "20%", transform: "rotate(5deg)" },
                "timeline": { "enter": [0, 10], "stay": [10, 250], "exit": [250, 250] },
                "enterFrom": "pop",
                "exitTo": "none"
            },

            {
                "id": "s17-c2",
                "type": "character",
                "assetKey": "3adven2",
                "layout": { height: "500px", "top": "20%", "left": "20%", transform: "rotate(-5deg)" },
                "timeline": { "enter": [50, 60], "stay": [60, 250], "exit": [250, 250] },
                "enterFrom": "pop",
                "exitTo": "none"
            },
            {
                "id": "s17-c3",
                "type": "character",
                "assetKey": "3adven3",
                "layout": { height: "500px", "top": "20%", "left": "20%", transform: "rotate(10deg)" },
                "timeline": { "enter": [100, 110], "stay": [110, 250], "exit": [250, 250] },
                "enterFrom": "pop",
                "exitTo": "none"
            },

            {
                "id": "s17-c4",
                "type": "character",
                "assetKey": "3adven4",
                "layout": { height: "500px", "top": "20%", "left": "20%", transform: "rotate(-10deg)" },
                "timeline": { "enter": [150, 160], "stay": [160, 250], "exit": [250, 250] },
                "enterFrom": "pop",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 18,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s18-bg",
                "type": "background_element",
                "assetKey": "corri",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 19,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s19-bg",
                "type": "background_element",
                "assetKey": "restricted",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 20,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s20-bg",
                "type": "background_element",
                "assetKey": "lib",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 21,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s21-bg",
                "type": "background_element",
                "assetKey": "shelf",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s21-button",
                "type": "button",
                "text": "CAST SPELL",
                "gameTarget": "simon",
                "layout": { "bottom": "15%", "left": "50%", "transform": "translateX(-50%)" },
                "timeline": { "enter": [50, 60], "stay": [60, 150], "exit": [150, 150] },
                "enterFrom": "bottom",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 210, // inserted scene for Simon Game
        "duration": 100,
        "baseBackground": "none",
        "isMinigame": "simon",
        "minigameBackground": "shelf",
        "elements": []
    },
    {
        "sceneId": 22,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s22-bg",
                "type": "background_element",
                "assetKey": "reading",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 23,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s23-bg",
                "type": "background_element",
                "assetKey": "thinking",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 24,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s24-bg",
                "type": "background_element",
                "assetKey": "wear",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 25,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s25-bg",
                "type": "background_element",
                "assetKey": "enter",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 26,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s26-bg",
                "type": "background_element",
                "assetKey": "awake",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 27,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s27-bg",
                "type": "background_element",
                "assetKey": "takeoff",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 28,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s28-bg",
                "type": "background_element",
                "assetKey": "sky",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 281,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s281-bg",
                "type": "background_element",
                "assetKey": "fly",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 29,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s29-bg",
                "type": "background_element",
                "assetKey": "ministry",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 30,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s30-bg",
                "type": "background_element",
                "assetKey": "entry",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 31,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s31-bg",
                "type": "background_element",
                "assetKey": "puzzleGate",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 32,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s32-bg",
                "type": "background_element",
                "assetKey": "open1",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 33,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s33-bg",
                "type": "background_element",
                "assetKey": "inside",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 34,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s34-bg",
                "type": "background_element",
                "assetKey": "ball",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 35,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s35-bg",
                "type": "background_element",
                "assetKey": "snatch",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 36,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s36-bg",
                "type": "background_element",
                "assetKey": "run",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s36-button",
                "type": "button",
                "text": "FIGHT SNAKE",
                "gameTarget": "snake",
                "layout": { "bottom": "10%", "left": "50%", "transform": "translateX(-50%)" },
                "timeline": { "enter": [50, 60], "stay": [60, 150], "exit": [150, 150] },
                "enterFrom": "bottom",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 37,
        "duration": 100,
        "baseBackground": "none",
        "isMinigame": "snake",
        "minigameBackground": "grass",
        "elements": []
    },
    {
        "sceneId": 38,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "win" },
        "elements": [
            {
                "id": "s38w-bg",
                "type": "background_element",
                "assetKey": "chainDraco",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s38w-dialogue",
                "type": "title",
                "text": "YOU DEFEATED THE SNAKE!",
                "layout": { "top": "10%", "left": "50%", "transform": "translateX(-50%)" },
                "timeline": { "enter": [10, 20], "stay": [20, 150], "exit": [150, 150] },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 39,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "lose" },
        "elements": [
            {
                "id": "s39l-bg",
                "type": "background_element",
                "assetKey": "chainShub",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s39l-dialogue",
                "type": "title",
                "text": "THE SNAKE GOT YOU...",
                "layout": { "top": "10%", "left": "50%", "transform": "translateX(-50%)" },
                "timeline": { "enter": [10, 20], "stay": [20, 150], "exit": [150, 150] },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    }
]
