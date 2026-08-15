
import type {Scene} from "../types/storyConfig.type.ts";


export const storyData: Scene[] = [
    {
        "sceneId": 1,
        "duration": 250,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s1-bg",
                "type": "background_element",
                "assetKey": "houseFamily",
                "enterFrom": "none",
                "exitTo": "fade"
            },
            {
                "id": "s1-title1",
                "type": "title",
                "text": "A mighty dark wizard Mogambo is on his quest to conquer the whole wizarding world. Upon hearing the prophecy, he knows he might be killed by a boy. Let's unravel the mysteries of the Wizarding world as our choices take this saga through turns.",
                "layout": {
                    width: '400px',
                    "top": "10%",
                    "left": "10%"
                },
                "timeline": {
                    "enter": 0,
                    "exit": 70
                },
                "enterFrom": "pop",
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
                    "enter": 70,
                    "exit": 130
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
                    "enter": 130,
                },
                "enterFrom": "right",
                "exitTo": "none"
            },
            {
                "id": "s2-title",
                "type": "title",
                "text": "MOGAMBO",
                "layout": { "top": "10%", "left": "10%" },
                "timeline": {
                    "enter": 130,
                },
                "enterFrom": "left",
                "exitTo": "none"
            },
            {
                "id": "s2-dialogue-1",
                "type": "title",
                "text": "I WILL CONQUER THE WORLD!",
                size: "lg",
                "layout": {
                    "top": "25%",
                    "left": "5%"
                },
                "timeline": {
                    "enter": 170,
                    "exit": 230
                },
                "enterFrom": "pop",
                "exitTo": "fade",
            },
            {
                "id": "s2-dialogue-2",
                "type": "title",
                "text": "No one can stop me!",
                size: "lg",
                "layout": {
                    "top": "25%",
                    "left": "10%"
                },
                "timeline": {
                    "enter": 230,
                },
                "enterFrom": "pop",
                "exitTo": "none",
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
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "scene-1-boom",
                "type": "audio",
                "assetKey": "thunder",
                "timeline": { "enter": 0 }
            },
            {
                "id": "s3-dialogue1",
                "type": "title",
                "text": "KRAKOOM!",
                "layout": { "top": "20%", "right": "15%" },
                "timeline": { "enter": 0},
                "enterFrom": "right",
                "exitTo": "none",
            },
            {
                "id": "s3-dialogue2",
                "type": "title",
                size: 'md',
                "text": "Unfortunate Night! Might Mogambo comes to the hollow",
                "layout": { "top": "10%", "left": "20%" },
                "timeline": { "enter": 30 },
                "enterFrom": "pop",
                "exitTo": "none",
            }
        ]
    },
    {
        "sceneId": 4,
        "duration": 200,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s4-bg", 
                "type": "background_element", 
                "assetKey": "villainAtGate",
                "enterFrom": "none",
                "exitTo": "none"
            },

            {
                "id": "s4-dialogue",
                "type": "dialogue",
                "text": "Prophecy!! Some Mere Human will kill me?",
                "layout": { "top": "5%", "left": "55%" },
                "timeline": { "enter": 10, "exit": 120 },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "left"
            },
            {
                "id": "s4-dialogue2",
                "type": "dialogue",
                "text": "Hahahaha....What a Joke",
                "layout": { "top": "5%", "left": "55%" },
                "timeline": { "enter": 120, },
                "enterFrom": "pop",
                "exitTo": "none",
                "tailPosition": "left"
            },
        ]
    },
    {
        "sceneId": 5,
        "duration": 250,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s5-bg", 
                "type": "background_element", 
                "assetKey": "houseAttack",
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s5-dialogue2",
                "type": "dialogue",
                "text": "What was that sound?",
                "layout": { "top": "13%", "left": "60%" },
                "timeline": { "enter": 40, "exit": 100},
                "enterFrom": "pop",
                "exitTo": "pop",
                "tailPosition": "left"
            },
            {
                "id": "audio5",
                "type": "audio",
                "assetKey": "woodBreak",
                "timeline": { "enter": 10 }
            },
            {
                "id": "s5-dialogue1",
                "type": "title",
                "text": "CREEK!",
                "layout": { "top": "30%", "right": "5%" },
                "timeline": { "enter": 0 },
                "enterFrom": "right",
                "exitTo": "none",
            },
            {
                "id": "s5-dialogue4",
                "type": "dialogue",
                "text": "Someone is at the gate! Is it Mo...",
                "layout": { "top": "10%", "left": "15%" },
                "timeline": { "enter": 120, exit: 200 },
                "enterFrom": "pop",
                "exitTo": "pop",
                "tailPosition": "right"
            },
            {
                "id": "s5-dialogue3",
                "type": "dialogue",
                "text": "I will go and see, you be here with Ash",
                "layout": { "top": "10%", "left": "15%" },
                "timeline": { "enter": 200 },
                "enterFrom": "pop",
                "exitTo": "none",
                "tailPosition": "right"
            }
        ]
    },
    {
        "sceneId": 6,
        "duration": 200,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s6-bg",
                "type": "background_element", 
                "assetKey": "villainFather",
                "enterFrom": "none",
                "exitTo": "none"
            },
            { 
                "id": "s6-dialogue",
                "type": "dialogue", 
                "text": "Why have you come here? What do you want from us?",
                "layout": { "top": "1%", "left": "22%" },
                "timeline": { "enter":10, exit: 80 },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            },
            {
                "id": "s6-dialogue2",
                "type": "dialogue",
                "text": "Your Son",
                "layout": { "top": "8%", "left": "56%" },
                "timeline": { "enter": 80, exit: 150},
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "right"
            },
            {
                "id": "s6-dialogue3",
                "type": "dialogue",
                "text": "NO! I will not let you, The prophecy will come true",
                "layout": { "top": "1%", "left": "22%" },
                "timeline": { "enter": 150},
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
                "assetKey": "villainAttack",
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s7-dialogue",
                "type": "dialogue",
                "speaker": "Mugambo",
                "text": "Try and stop me if you can!",
                "layout": { "top": "10%", "left": "10%", "transform": "translateX(-50%)" },
                "timeline": { "enter": [10, 20], "stay": [20, 140], "exit": [140, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "right"
            },
            {

                "id": "s7-dialogue2",
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
        "sceneId": 8,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s8-bg",
                "type": "background_element", 
                "assetKey": "fatherDead",
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "audio8",
                "type": "audio",
                "assetKey": "sad",
                "timeline": { "enter": 10 }
            },
            {

                "id": "s8-dialogue",
                "type": "dialogue",
                "speaker": "Father",
                "text": "The prophecy will come true! He will live.....aah (dead)",
                "layout": { "top": "23%", "left": "30%" },
                "timeline": { "enter": [10, 20], "stay": [20, 140], "exit": [140, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            },
            {
                "id": "s8-dialogue2",
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
        "sceneId": 9,
        "duration": 150,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s9-bg",
                "type": "background_element",
                "assetKey": "villainBlast",
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s9-title",
                "type": "title",
                "text": "KA-BOOM",
                "layout": {
                    "top": "10%",
                    "left": "10%"
                },
                "timeline": { "enter": 10 },
                "enterFrom": "pop",
                "exitTo": "none"
            },
            {
                "id": "s9-title2",
                "type": "title",
                "text": "Mogambo dashes towards Ash's Cradle",
                "layout": {
                    "bottom": "20%",
                    "right": "8%"
                },
                "timeline": { "enter": 40, },
                "enterFrom": "pop",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 10,
        "duration": 180,
        "baseBackground": "none",
        "elements": [
            { 
                "id": "s10-bg",
                "type": "background_element", 
                "assetKey": "motherProtect",
                "enterFrom": "none",
                "exitTo": "none"
            },

            {
                "id": "s10-dialogue2",
                "type": "dialogue",
                "speaker": "Mother",
                "text": "I wont let you take my son!",
                "layout": { "top": "1%", "left": "50%" },
                "timeline": { "enter": 10, exit: 100 },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "bottom-left"
            },
            {
                "id": "s10-dialogue1",
                "type": "title",
                "text": "Protego Totalum!",
                "layout": { "top": "1%", "left": "55%" },
                "timeline": { "enter": 100},
                "enterFrom": "pop",
                "exitTo": "none",
            },
            {
                "id": "s10-dialogue3",
                "type": "title",
                "text": "Protective Barrier!",
                size: 'md',
                "layout": { "top": "20%", "left": "10%" },
                "timeline": { "enter": 110 },
                "enterFrom": "pop",
                "exitTo": "none",
            },
            {
                "id": "s10-caption",
                "type": "caption",
                "text": "Lily Builds a protective barrier around her son",
                "timeline": { "enter": 110 },
            },

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
                "enterFrom": "none",
                "exitTo": "fade"
            },
            {
                "id": "s11-dialogue",
                "type": "title",
                "text": "Wahtttt...aaah",
                "layout": { "top": "40%", "left": "70%" },
                "timeline": { "enter": 10, exit: 100 },
                "enterFrom": "pop",
                "exitTo": "fade",
            },
            { 
                "id": "s11-bg2", 
                "type": "background_element", 
                "assetKey": "villainDie2",
                "timeline": { "enter": 120 },
                "enterFrom": "fade",
                "exitTo": "none"
            },
            {
                "id": "s11-dialogue2",
                "type": "title",
                "text": "Disintegrate!!",
                "layout": { "top": "8%", "left": "70%" },
                "timeline": { "enter": 120 },
                "enterFrom": "pop",
                "exitTo": "none",
            },
            {
                "id": "s11-caption",
                "type": "caption",
                "text": "As Mogambo touches the barrier, his body starts to disintegrate and evaporate into thin air",
                "timeline": { "enter": 120 },
            },
            {
                "id": "s11-dialogue3",
                "type": "dialogue",
                "speaker": "Father",
                "text": "This is not possible...",
                "layout": { "top": "10%", "left": "33%" },
                "timeline": { "enter": 140 },
                "enterFrom": "pop",
                exitTo:   "none",
                "tailPosition": "right"
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
            "enterFrom": "none",
            "exitTo": "none"
        },
        {
            "id": "s111-dialogue",
            "type": "dialogue",
            "speaker": "mother",
            "text": "O my son! you have to be brave, you have to be the one who will defeat Mogambo when time comes",
            "layout": { "top": "1%", "left": "56%" },
            "timeline": { "enter": 20 },
            "enterFrom": "pop",
            "exitTo": "none",
            "tailPosition": "left"
        },
        {
            "id": "s111-dialogue2",
            "type": "title",
            size: 'md',
            "speaker": "kid",
            "text": "Zzzzz...",
            "layout": { "top": "40%", "left": "70%" },
            "timeline": { "enter": 30},
            "enterFrom": "pop",
            "exitTo": "none",
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
            },
            {
                "id": "s111-caption",
                "type": "caption",
                "text": "Lily put all her powers trying to save her son, but Mogambo was too powerful. She died trying to protect her son",
                "timeline": { "enter": 10 },
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
            },
            {
                "id": "s13-title",
                "type": "title",
                "text": "Prophecy will prove itself",
                "layout": { "top": "10%", "left": "10%" },
                "timeline": { "enter": 20 },
                "enterFrom": "fade",
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
                "id": "s14-caption",
                "type": "caption",
                "text": "Hogwarts Principal Dumbledor found the baby and took him to Hogwarts to be raised in secret",
                "timeline": { "enter": 10 },
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
            },
            {
                "id": "s135title",
                "type": "title",
                "text": "Hogwarts Express",
                "layout": { "top": "10%", "left": "30%" },
                "timeline": { "enter": 20 },
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
                "timeline": {"enter": [0, 0], "stay": [0, 150], "exit": [150, 150]},
                "enterFrom": "none",
                "exitTo": "none"
            },

            {
                "id": "s16-c",
                "type": "character",
                "assetKey": "3sitting",
                animation: "rocking",

                "layout": {height: "300px", "top": "10%", "left": "10%"},
                "timeline": {"enter": 10,},
                "enterFrom": "left",
                "exitTo": "none"
            },

            {
                "id": "s16-c2",
                "type": "character",
                "assetKey": "dinner",
                animation: "scale-up-scale-down",

                "layout": {height: "400px", "bottom": "10%", "right": "10%"},
                "timeline": {"enter": 10},
                "enterFrom": "right",
                "exitTo": "none"
            },
            {
                "id": "s16-title",
                "type": "title",
                "text": "Young boy, Ash Joins hogwarts With his friends Shub & Tanu",
                "layout": {"top": "15%", "right": "20%"},
                size: 'md',
                "timeline": {"enter": 20},
                "enterFrom": "fade",
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
                "timeline": { "enter": 10 },
                "enterFrom": "pop",
                "exitTo": "none"
            },

            {
                "id": "s17-c2",
                "type": "character",
                "assetKey": "3adven2",
                "layout": { height: "500px", "top": "20%", "left": "20%", transform: "rotate(-5deg)" },
                "timeline": { "enter": 50 },
                "enterFrom": "pop",
                "exitTo": "none"
            },
            {
                "id": "s17-c3",
                "type": "character",
                "assetKey": "3adven3",
                "layout": { height: "500px", "top": "20%", "left": "20%", transform: "rotate(10deg)" },
                "timeline": { "enter": 100 },
                "enterFrom": "pop",
                "exitTo": "none"
            },

            {
                "id": "s17-c4",
                "type": "character",
                "assetKey": "3adven4",
                "layout": { height: "500px", "top": "20%", "left": "20%", transform: "rotate(-10deg)" },
                "timeline": { "enter": 150 },
                "enterFrom": "pop",
                "exitTo": "none"
            },
            {
                id: "s17-title",
                type: "title",
                text: "Ash and his friends Exploring Hogwarts",
                timeline: { enter: 10 },
                enterFrom: "top",
                exitTo: "none"
            }
        ]
    },
    {
        "sceneId": 18,
        "duration": 200,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s18-bg",
                "type": "background_element",
                "assetKey": "corri",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s18-dialogue",
                type: "dialogue",
                text: "Shhhh....Just Follow me",
                layout: { top: "15%", "left": "29%" },
                timeline: { enter: 10, exit: 100 },
                enterFrom: "pop",
                exitTo: "pop",
                tailPosition: "right"
            },
            {
                id: "s18-dialogue2",
                type: "dialogue",
                text: "People Say Dungeons are haunted, but I have never seen anything",
                layout: { top: "8%", "right": "8%" },
                timeline: { enter: 100, exit: 200 },
                enterFrom: "pop",
                exitTo: "pop",
                tailPosition: "bottom-left"
            }, {
                id: "s18-caption",
                type: "caption",
                text: "One Night the Trio decides to explore the underground Dungeons of Hogwarts",
            }
        ]
    },
    {
        "sceneId": 19,
        "duration": 250,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s19-bg",
                "type": "background_element",
                "assetKey": "restricted",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s18-dialogue1",
                type: "dialogue",
                text: "This was not on the map",
                layout: { top: "35%", "left": "45%" },
                timeline: { enter: 10, exit: 100 },
                enterFrom: "pop",
                exitTo: "pop",
                tailPosition: "bottom-left"
            },
            {
                id: "s18-dialogue2",
                type: "dialogue",
                text: "Looks like some ancient magic is protecting this place",
                layout: { top: "30%", "left": "55%" },
                timeline: { enter: 100, exit: 200 },
                enterFrom: "pop",
                exitTo: "pop",
                tailPosition: "bottom-left"
            },
            {
              id: "s18-title",
              type: "title",
                text: "To enter this place, you will have to",
                layout: { top: "50%", "left": "50%", transform: "translateX(-50%)" },
                timeline: { enter: 200 },
                exitTo: "none",
                enterFrom: "top",
            },
            {
                "id": "s19-button",
                "type": "button",
                "text": "PROVE YOUR MEMORY",
                "gameTarget": "simon",
                "layout": { "bottom": "15%", "left": "50%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 200 },
                "enterFrom": "bottom",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 190,
        "duration": 100,
        "baseBackground": "none",
        "isMinigame": "simon",
        "minigameBackground": "shelf",
        "elements": [
            {
                id: "s190-audio",
                type: "audio",
                assetKey: "game",
                timeline: { enter: 0, },
            },
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
            },
            {
                id: "s20-dialogue2",
                type: "dialogue",
                text: "Lets go, There are just books here, nothing else",
                layout: { top: "10%", "left": "15%" },
                timeline: { enter: 10, exit: 90 },
                enterFrom: "fade",
                exitTo: "pop",
                tailPosition: "bottom-right"
            },
            {
                id: "s20-dialogue2",
                type: "dialogue",
                text: "Wait! this place seems a little strange, I feel some magic here",
                layout: { top: "50%", "right": "2%" },
                timeline: { enter: 90 },
                enterFrom: "fade",
                exitTo: "none",
                tailPosition: "left"
            },
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
                id: "s21-title",
                type: "title",
                text: "Found Something",
                layout: { top: "50%", "right": "2%" },
                timeline: { enter: 10 },
                enterFrom: "fade",
                exitTo: "none",
            },
        ]
    },
    {
        "sceneId": 22,
        "duration": 250,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s22-bg",
                "type": "background_element",
                "assetKey": "reading",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s22-dialogue1",
                type: "dialogue",
                text: "What it is?",
                layout: { top: "40%", "right": "8%" },
                timeline: { enter: 10, exit: 100 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "left"
            },
            {
                id: "s22-dialogue2",
                type: "dialogue",
                text: "What does it say?",
                layout: { top: "40%", "left": "10%" },
                timeline: { enter: 50, exit: 90 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "right"
            },
            {
                id: "s22-dialogue3",
                type: "dialogue",
                text: "It says something about prophecy orb",
                layout: { top: "16%", "left": "45%" },
                timeline: { enter: 90, exit: 170 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "bottom-left"
            }, {
                id: "s22-dialogue4",
                type: "dialogue",
                text: "\"Prophecy  made by the orb which is protected under the ministry of magic. It cam be free if one decides to walk on the path of the prophecy.\"",
                layout: { top: "10%", "left": "45%" },
                timeline: { enter: 170 },
                enterFrom: "fade",
                exitTo: "none",
                tailPosition: "bottom-left"
            }

        ]
    },
    {
        "sceneId": 23,
        "duration": 250,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s23-bg",
                "type": "background_element",
                "assetKey": "thinking",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s22-dialogue4",
                type: "dialogue",
                text: "I might know someone who can help us with this",
                layout: { top: "20%", "left": "17%" },
                timeline: { enter: 10, exit: 80 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "right"
            },
            {
                id: "s22-dialogue4",
                type: "dialogue",
                text: "Who is it!",
                layout: { top: "25%", "left": "65%" },
                timeline: { enter: 80, exit: 150 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "bottom-left"
            },
            {
                id: "s22-dialogue4",
                type: "dialogue",
                text: "Draco, that boy in our class, his father works in the ministry.",
                layout: { top: "20%", "left": "17%" },
                timeline: { enter: 150, exit: 210 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "right"
            },
            {
                id: "s22-dialogue4",
                type: "dialogue",
                text: "Ok, then lets  use my Invisibility cloak, to sneak into his room, come on guys!",
                layout: { top: "55%", "right": "27%" },
                timeline: { enter: 210 },
                enterFrom: "fade",
                exitTo: "none",
                tailPosition: "right"
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
        "duration": 250,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s25-bg",
                "type": "background_element",
                "assetKey": "enter",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s25-dialogue1",
                type: "dialogue",
                text: "Good, he is sleeping",
                layout: { top: "30%", "left": "22%" },
                timeline: { enter: 10, exit:100 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "right"
            },
            {
                id: "s25-dialogue2",
                type: "dialogue",
                text: "Dont worry, he is my friend, he will help us",
                layout: { top: "15%", "left": "35%" },
                timeline: { enter: 100, exit:200 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "bottom-right"
            }

        ]
    },
    {
        "sceneId": 26,
        "duration": 200,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s26-bg",
                "type": "background_element",
                "assetKey": "awake",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s26-dialogue1",
                type: "dialogue",
                text: "aaah...GHOST!! Help me, help me",
                layout: { top: "15%", "left": "35%" },
                timeline: { enter: 10, exit:100 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "bottom-right"
            },
            {
                id: "s26-dialogue2",
                type: "dialogue",
                text: "Just Shut Up....",
                layout: { top: "25%", "right": "3%" },
                timeline: { enter: 100},
                enterFrom: "fade",
                tailPosition: "right"
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
            },
            {
                id: "s27-dialogue1",
                type: "dialogue",
                text: "Dont Worry, I have connections in the ministry, I will get you all inside",
                layout: { top: "8%", "right": "25%" },
                timeline: { enter: 10},
                enterFrom: "fade",
                exitTo: 'none',
                tailPosition: "bottom-right"
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
                "enterFrom": "none",
                "exitTo": "none"
            },
            // {
            //     "id": "s2-villain",
            //     "type": "character",
            //     "assetKey": "flying",
            //     "classNameImg": "min-h-screen",
            //     "layout": {
            //         "top": "-10%",
            //     },
            //     "timeline": {
            //         enter: [0, 20],
            //         exit: [20, 120]
            //     },
            //     "enterFrom": "right",
            //     "exitTo": "left"
            // },

            {
                "id": "s15-title",
                "type": "character",
                "assetKey": "flying",
                "classNameImg": "scale-110 rotate-[0deg]",
                "layout": { "top": "1%", "left": "10%" },
                "timeline": { "enter": [-60, 0], "stay": [0, 0], "exit": [0, 150] },
                "enterFrom": "right",
                "exitTo": "left"
            },
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
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s29-dialogue1",
                type: "dialogue",
                text: "Alright, Lets Go",
                layout: { top: "40%", "left": "30%" },
                timeline: { enter: 10, exit:100 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "bottom-left"
            },
            {
                id: "s29-dialogue2",
                type: "dialogue",
                text: "No, Wait, let me go, I know the place, I will take you to the prophecy orb",
                layout: { top: "35%", "left": "20%" },
                timeline: { enter: 100, },
                enterFrom: "fade",
                exitTo: "none",
                tailPosition: "bottom-right"
            },

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
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s30-dialogue1",
                type: "dialogue",
                text: "Follow me, Stay Quiet.",
                layout: { top: "13%", "left": "62%" },
                timeline: { enter: 10 },
                enterFrom: "fade",
                exitTo: "none",
                tailPosition: "left"
            },
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
                "enterFrom": "none",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 33,
        "duration": 170,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s33-bg",
                "type": "background_element",
                "assetKey": "inside",
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s33-dialogue1",
                type: "dialogue",
                text: "WOW, There are so manu orbs here",
                layout: { top: "37%", "left": "35%" },
                timeline: { enter: 10, exit: 90 },
                enterFrom: "fade",
                exitTo: "fade",
                tailPosition: "bottom-right"
            },
            {
                id: "s33-dialogue2",
                type: "dialogue",
                text: "SO how fo we find the right one?",
                layout: { top: "37%", "left": "25%" },
                timeline: { enter: 90},
                enterFrom: "fade",
                exitTo: "none",
                tailPosition: "bottom-right"
            },
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
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                id: "s34-dialogue1",
                type: "dialogue",
                text: "Hey, look this one started to glow when i touched it",
                layout: { top: "27%", "right": "10%" },
                timeline: { enter: 10, },
                enterFrom: "fade",
                exitTo: "none",
                tailPosition: "left"
            },
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
            },
            {
                id: "s35-title",
                type: "title",
                text: "SNATCH!!",
                layout: { top: "10%", "left": "50%", transform: "translateX(-50%)" },
                timeline: { enter: 10, },
                enterFrom: "pop",
                exitTo: "none",
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
                id: "s36-dialogue1",
                type: "dialogue",
                text: "Draco, you traitor, Come back here give us the orb",
                layout: { "top": "10%", "left": "50%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 10, exit: 100},
                "enterFrom": "fade",
                "exitTo": "fade",
                tailPosition: "bottom-left"
            },
            {
                "id": "s36-dialogue2",
                "type": "dialogue",
                "text": "Oh no, the snake is chasing us, we have to fight it",
                "layout": { "top": "10%", "left": "30%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 100, exit: 200 },
                "enterFrom": "fade",
                "exitTo": "fade",
                tailPosition: "bottom-left"
            },
            {
                "id": "s36-button",
                "type": "button",
                "text": "FIGHT SNAKE",
                "gameTarget": "snake",
                "layout": { "bottom": "10%", "left": "50%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 200 },
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
        "elements": [
            {
                id: "s137-audio",
                type: "audio",
                assetKey: "game",
                timeline: { enter: 0, exit: 100 },
                exitTo: "fade"
            },
        ]
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
                "id": "s38w-title1",
                "type": "title",
                "text": "YOU DEFEATED THE SNAKE!",
                "layout": { "top": "10%", "left": "30%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 10 },
                "enterFrom": "fade",
                "exitTo": "none"
            },
            {
                "id": "s38w-title2",
                "type": "title",
                "text": "Draco is captured and the prophecy orb is saved",
                "layout": { "bottom": "5%", "left": "70%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 30 },
                "enterFrom": "fade",
                size:"md",
                "exitTo": "none"
            },
            {
                "id": "s38w-dialogue",
                "type": "dialogue",
                "text": "Draco, Traitor, You made a mistake, now die",
                "layout": { "top": "5%", "left": "70%" },
                "timeline": { "enter": 30 },
                "enterFrom": "fade",
                "exitTo": "none"
            }

        ]
    },
    {
        "sceneId": 50,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "lose" },
        "elements": [
            {
                "id": "s50l-bg",
                "type": "background_element",
                "assetKey": "chainShub",
                "timeline": { "enter": [0, 0], "stay": [0, 150], "exit": [150, 150] },
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s50l-dialogue",
                "type": "title",
                "text": "THE SNAKE GOT YOU...",
                "layout": { "top": "10%", "left": "50%", "transform": "translateX(-50%)" },
                "timeline": { "enter": [10, 20], "stay": [20, 150], "exit": [150, 150] },
                "enterFrom": "fade",
                "exitTo": "none"
            },
            {
                "id": "s50w-dialogue",
                "type": "title",
                "text": "Draco has captured Shub",
                "layout": { "bottom": "5%", "left": "70%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 30 },
                "enterFrom": "fade",
                size:"md",
                "exitTo": "none"
            },
            {
                "id": "s50w-dialogue",
                "type": "dialogue",
                "text": "Hahaha, no one survives my snake now die!!",
                "layout": { "top": "5%", "left": "70%" },
                "timeline": { "enter": 30 },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 39,
        "duration": 160,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s39w-bg",
                "type": "background_element",
                "assetKey": "revive",
                "enterFrom": "none",
                "exitTo": "none"
            },
            {
                "id": "s39w-title2",
                "type": "title",
                "text": "Mogambo Was Revived!!",
                "layout": { "top": "5%", "left": "10%", },
                "timeline": { "enter": 0 },
                "enterFrom": "left",
                "exitTo": "none"
            },
            {
                "id": "s39w-dialogue",
                "type": "dialogue",
                "text": "Thank you, Ash, for reviving me",
                "layout": { "top": "5%", "left": "70%" },
                "timeline": { "enter": 30, exit: 140 },
                "enterFrom": "fade",
                "exitTo": "fade"
            },
            {
                "id": "s39w-dialogue",
                "type": "dialogue",
                "text": "You look so Eager to die",
                "layout": { "top": "5%", "left": "70%" },
                "timeline": { "enter": 140 },
                "enterFrom": "fade",
                "exitTo": "none"
            }

        ]
    },
    {
        "sceneId": 391,
        "duration": 200,
        "baseBackground": "none",
        "elements": [
            {
                "id": "s391w-bg",
                "type": "background_element",
                "assetKey": "birth2",
                "enterFrom": "none",
                timeline: {enter: 0, exit: 100},
                "exitTo": "top"
            },
            {
                id: "s391w-character1",
                type: "character",
                assetKey: "ash",
                "classNameImg": "min-h-[90vh]",
                layout: { "top": "5%", "left": "5%"},
                timeline: { "enter": 50 },
                enterFrom: "left",
                exitTo: "none"
            },
            {
                id: "s391w-character3",
                type: "character",
                assetKey: "shub",
                "classNameImg": "min-h-[90vh]",
                layout: { "top": "25%", "left": "0%"},
                timeline: { "enter": 70 },
                enterFrom: "left",
                exitTo: "none"
            },
            {
                id: "s391w-character4",
                type: "character",
                assetKey: "tanu",
                "classNameImg": "min-h-[90vh]",
                layout: { "top": "25%", "left": "15%"},
                timeline: { "enter": 90 },
                enterFrom: "left",
                exitTo: "none"
            },
            {
                id: "s391w-character2",
                type: "character",
                assetKey: "mogamboTrans",
                "classNameImg": "max-h-[100vh]",
                layout: { "bottom": "0%", "right": "-15%" },
                timeline: { "enter": 50 },
                enterFrom: "right",
                exitTo: "none"
            },
            {
                "id": "s391w-title2",
                "type": "title",
                "text": "VS",
                "layout": { "top": "40%", "left": "40%", },
                "timeline": { "enter": 100 },
                "enterFrom": "left",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 39,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "win" },
        "elements": [
            {
                "id": "s39w-bg",
                "type": "background_element",
                "assetKey": "fight1",
                enterFrom: "none"
            },
            {
                "id": "s39w-title1",
                "type": "title",
                "text": "KRA-KOOM!!",
                "layout": { "top": "10%", "left": "45%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 10 },
                "enterFrom": "left",
                size: 'md',
                "exitTo": "none"
            },
            {
                "id": "s39w-dialogue",
                "type": "dialogue",
                "text": "We will defeat you",
                "layout": { "top": "20%", "left": "15%" },
                "timeline": { "enter": 70 },
                "enterFrom": "fade",
                "exitTo": "none"
            }

        ]
    },
    {
        "sceneId": 40,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "win" },
        "elements": [
            {
                "id": "s40w-bg",
                "type": "background_element",
                "assetKey": "bottle1",
                enterFrom: "none"
            },
            {
                "id": "s40w-title1",
                "type": "title",
                "text": "SWOOSH!!",
                "layout": { "top": "10%", "left": "45%" },
                "timeline": { "enter": 10 },
                "enterFrom": "left",
                size: 'md',
                "exitTo": "none"
            },
            {
                "id": "s40w-dialogue",
                "type": "dialogue",
                "text": "What is this Stuff, it is making me feel dizzy",
                "layout": { "top": "70%", "right": "15%" },
                tailPosition: "right",
                "timeline": { "enter": 70 },
                "enterFrom": "fade",
                "exitTo": "none"
            }

        ]
    },

    {
        "sceneId": 51,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "lose" },
        "elements": [
            {
                "id": "s51l-bg",
                "type": "background_element",
                "assetKey": "fight2",
                enterFrom: "none",
                exitTo: "none"
            },
            {
                "id": "s51w-title1",
                "type": "title",
                "text": "KRA-KOOM!!",
                "layout": { "top": "10%", "left": "45%", "transform": "translateX(-50%)" },
                "timeline": { "enter": 10 },
                "enterFrom": "left",
                size: 'md',
                "exitTo": "none"
            },
            {
                "id": "s51w-dialogue",
                "type": "dialogue",
                "text": "We will defeat you",
                "layout": { "top": "20%", "left": "15%" },
                "timeline": { "enter": 70 },
                "enterFrom": "fade",
                "exitTo": "none"
            }

        ]
    },
    {
        "sceneId": 52,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "lose" },
        "elements": [
            {
                "id": "s52l-bg",
                "type": "background_element",
                "assetKey": "bottle2",
                enterFrom: "none",
                exitTo: "none"
            },
            {
                "id": "s52w-title1",
                "type": "title",
                "text": "SWOOSH!!",
                "layout": { "top": "10%", "left": "45%" },
                "timeline": { "enter": 10 },
                "enterFrom": "left",
                size: 'md',
                "exitTo": "none"
            },
            {
                "id": "s52w-dialogue",
                "type": "dialogue",
                "text": "What is this Stuff, it is making me feel dizzy",
                "layout": { "top": "70%", "right": "15%" },
                tailPosition: "right",
                "timeline": { "enter": 70 },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 42,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "win" },
        "elements": [
            {
                "id": "s42l-bg",
                "type": "background_element",
                "assetKey": "threedead",
                enterFrom: "none",
                exitTo: 'none'
            },
            {
                "id": "s42l-dialogue",
                "type": "title",
                "text": "Mogambo Defeated",
                "layout": { "top": "10%", "left": "30%", "transform": "translateX(-50%)" },
                "timeline": { enter: 10 },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 43,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "lose" },
        "elements": [
            {
                "id": "s43l-bg",
                "type": "background_element",
                "assetKey": "twodead",
                enterFrom: "none",
                exitTo: 'none'

            },
            {
                "id": "s43l-dialogue",
                "type": "title",
                "text": "Mogambo Defeated",
                "layout": { "top": "10%", "left": "30%", "transform": "translateX(-50%)" },
                "timeline": { enter: 10 },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 44,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "win" },
        "elements": [
            {
                "id": "s44l-bg",
                "type": "background_element",
                "assetKey": "threeLand",
                enterFrom: "none",
                exitTo: 'none'

            },
            {
                "id": "s44l-dialogue",
                "type": "title",
                "text": "Ash, Shub and Tanu, return to hogwarts",
                "layout": { "top": "10%", "left": "30%", "transform": "translateX(-50%)" },
                "timeline": { enter: 10 },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 45,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "lose" },
        "elements": [
            {
                "id": "s45l-bg",
                "type": "background_element",
                "assetKey": "twoLand",
                enterFrom: "none",
                exitTo: 'none'

            },
            {
                "id": "s45l-dialogue",
                "type": "title",
                "text": "Ash and Tanu, return to hogwarts",
                "layout": { "top": "10%", "left": "20%" },
                size: "md",
                "timeline": { enter: 10 },
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 46,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "win" },
        "elements": [
            {
                "id": "s46l-bg",
                "type": "background_element",
                "assetKey": "threeCheer",
                enterFrom: "none",
                exitTo: 'none'

            },
            {
                id: "s46-audio",
                type: "audio",
                assetKey: "cheer",
                timeline: { enter: 0, },
            },
            {
                "id": "s46l-dialogue",
                "type": "title",
                "text": "Everyone is cheering for them",
                "layout": { "top": "10%", "left": "20%" },
                "timeline": { enter: 10 },
                "enterFrom": "pop",
                "exitTo": "none"
            }
        ]
    },
    {
        "sceneId": 46,
        "duration": 150,
        "baseBackground": "none",
        "branch": { game: "snake", outcome: "lose" },
        "elements": [
            {
                "id": "s46l-bg",
                "type": "background_element",
                "assetKey": "twoCheer",
                enterFrom: "none",
                exitTo: 'none'

            },
            {
                "id": "s46l-dialogue",
                "type": "title",
                "text": "Everyone is cheering for them",
                "layout": { "top": "10%", "left": "30%", "transform": "translateX(-50%)" },
                "timeline": { enter: 10, exit: 100 },
                "enterFrom": "pop",
                "exitTo": "fade"
            },
            {
               id: "s46-audio",
                type: "audio",
                assetKey: "cheer",
                timeline: { enter: 0, },
            },
            {
                "id": "s46l-dialogue",
                "type": "title",
                "text": "Shub's scacrifice is not forgotten, he will be remembered as a hero",
                "layout": { "top": "15%", "left": "30%", "transform": "translateX(-50%)" },
                "timeline": { enter: 100 },
                size: 'md',
                "enterFrom": "fade",
                "exitTo": "none"
            }
        ]
    },


]
