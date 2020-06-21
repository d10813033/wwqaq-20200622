let questions = [
    {
        "question":"不知為何，每天都習慣聽音樂", //可以利用question得到後面"你現在對今年非常樂觀？"的這個值
        "answers":[
            ["是的",2],
            ["不是",3]
        ]
    },
    {
        "question":"可以參與同樣的課程或社團持續甚至超過三年以上",
        "answers":[
            ["是的",4],
            ["不是",5]
        ]
    },
    {
        "question":"向下伸展時能夠碰到地板",
        "answers":[
            ["可以",5],
            ["不行",6]
        ]
    },
    {
        "question":"擅長節奏、音樂遊戲？",
        "answers":[
            ["是的",8],
            ["不是",7]
        ]
    },
    {
        "question":"手機裡有15種以上的APP",
        "answers":[
            ["是的",9],
            ["沒有",8]
        ]
    },
    {
        "question":"有想要買什麼東西時，會猶豫很久的類型？",
        "answers":[
            ["是",7],
            ["不是",9]
        ]
    },
    {
        "question":"有節省和存錢的習慣",
        "answers":[
            ["有",10],
            ["沒有",11]
        ]
    },
    {
        "question":"葡萄汁派而非蘋果汁派的（喜歡葡萄汁>蘋果汁)",
        "answers":[
            ["是，是葡萄汁派",12],
            ["不是，是蘋果汁派","10"]
        ]
    },
    {
        "question":"自己比較喜歡哪種打扮？",
        "answers":[
            ["不花俏，簡約的","11"],
            ["女孩子氣的","12"]
        ]
    },
    {
        "question":"喜歡和孩子們一起玩嗎？",
        "answers":[
            ["喜歡","Merry Panic"],
            ["不喜歡","三千世界"]
        ]
    },
    {
        "question":"有喜歡的香水嗎？",
        "answers":[
            ["有","TOXIC"],
            ["沒有","Étoile"]
        ]
    }, 
    {
        "question":"在自己的房間內有安裝一些間接照明的物品",
        "answers":[
            ["有","THEATER BELL"],
            ["沒有","Merry Panic"]
        ]
    }
    
];

let finalAnswers={
    "Merry Panic":["以幸福騷動打造獨特色彩！","擅長輕鬆愉快且充滿活力的Hiphop的舞團。三人在為無處可歸的孩子們所建的照護設施「綿羊館」相遇，並以「製造快樂騷動」為宗旨組成隊伍。轉入紅鶴學園後他們每天過著籌措生活費與ダンキラ練習兩頭燒的生活。受某位人物的教誨後，他們發誓會懷著即使面對逆境也不認輸的雜草魂……。"],
    "Étoile":["高過藍天，高貴的絕對王者。","優雅而美麗，擅長芭蕾舞的舞團。三位閃耀的超級名流組成的隊伍，在一瞬之間稱霸紅鶴學園。以「強大、高貴、優美的完美舞蹈」為理念將對手碾壓得體無完膚，並以這份壓倒性的強度自豪。定期舉辦著只有特別的名流可以參加的showcase...至少坊間是這麼謠傳的？"],
    "THEATER BELL":["響徹劇場的鈴聲是刺激開始的信號。","擅長成熟且令人興奮的爵士舞的舞團。只要這群眉清目秀、魅惑女性心弦的紳士們出現在現場，無論哪裡都會變成他們的舞台。他們以「非日常的娛樂」為信念，將不辜負觀眾的服務精神及高雅輕鬆的Talk作為賣點，目前在校園內外的人氣正在迅速上升中。"],
    "三千世界":["為戰而舞！舞士道的表現者。","擅長由武術和舞蹈所結合的武術舞蹈的舞團。三人都是在源覚心流武術學習的舞藝者，將『以禮為始，以禮為終』的精神也沿襲至ダンキラ的世界。小學的時候就已經組了隊，在不斷的努力之下，終於在組成的第7年成功轉入紅鶴學園。為了實現那稱之為「舞士道」的未來，他們開拓武術舞蹈，並以此為目標不斷向前邁進。"],
    "TOXIC":["不管是誰都逃不過的毒手。","擅長vogue舞的神秘舞團。由服裝設計師シキ及其品牌旗下的兩位專屬模特兒アゲハ與九十九組成。不僅在演藝圈活躍，也有著邪教般的人氣。「不以幸福為目的，追求剎那間的快樂」—如此獨特的生活方式、思想、時尚魅惑並俘虜了許多人"],
};
