
import type {Scene} from "../types/storyConfig.type.ts";


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
                    "enter": 20,
                    "exit": 100
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
                    "enter": 100,
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
                    "enter": 100,
                },
                "enterFrom": "left",
                "exitTo": "none"
            },
            {
                "id": "s2-dialogue-1",
                "type": "title",
                "speaker": "mogambo",
                "text": "I WILL CONQUER THE WORLD!",
                size: "lg",
                "layout": {
                    "top": "25%",
                    "left": "5%"
                },
                "timeline": {
                    "enter": 120,
                    "exit": 160
                },
                "enterFrom": "pop",
                "exitTo": "fade",
            },
            {
                "id": "s2-dialogue-2",
                "type": "title",
                "speaker": "Mugambo",
                "text": "No one can stop me!",
                size: "lg",
                "layout": {
                    "top": "25%",
                    "left": "10%"
                },
                "timeline": {
                    "enter": 160,
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
                "id": "s3-dialogue",
                "type": "title",
                "text": "KRAKOOM!",
                "layout": { "top": "20%", "right": "15%" },
                "timeline": { "enter": 0},
                "enterFrom": "right",
                "exitTo": "none",
            },
            {
                "id": "s3-dialogue",
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
                "id": "s4-dialogue",
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
                "timeline": { "enter": 10, "exit": 100},
                "enterFrom": "pop",
                "exitTo": "pop",
                "tailPosition": "left"
            },
            {
                "id": "s5-dialogue1",
                "type": "title",
                "text": "CREEK!",
                "layout": { "top": "30%", "right": "5%" },
                "timeline": { "enter": 100, },
                "enterFrom": "right",
                "exitTo": "none",
            },
            {
                "id": "s5-dialogue2",
                "type": "dialogue",
                "text": "Someone is at the gate! Is it Mo...",
                "layout": { "top": "10%", "left": "15%" },
                "timeline": { "enter": 120, exit: 200 },
                "enterFrom": "pop",
                "exitTo": "pop",
                "tailPosition": "right"
            },
            {
                "id": "s5-dialogue2",
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
                "id": "s6-dialogue2",
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
                "text": "Try ans stop me if you can!",
                "layout": { "top": "10%", "left": "10%", "transform": "translateX(-50%)" },
                "timeline": { "enter": [10, 20], "stay": [20, 140], "exit": [140, 150] },
                "enterFrom": "pop",
                "exitTo": "fade",
                "tailPosition": "right"
            }, {

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
                "id": "s9-title",
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
                "id": "s10-dialogue1",
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
                id: "s18-dialogue",
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
        "elements": []
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
