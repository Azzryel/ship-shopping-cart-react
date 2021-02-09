
let id =0;

const items = [
    {
        name: "Black Pearl",
        img: "../images/black-pearl.jpg",
        descr: "An ornate fictional ship made famous in the Pirates of the Caribbean film franchise, the Black Pearl is a grand ship recognizable by her intimidating black hull and sails.  Known to be untouchable for her speed, thanks to the large amount of sails she uses, she was originally known as Wicked Wench until she was burned and sunk before being resurrected from the sea floor by Davy Jones and renamed by Jack Sparrow.",
        money: generateRandomNumber(),
        id: generateItemId(),
        category: "ship",
    },
    {
        name: "Jolly Roger",
        img: "../images/jolly-roger.jpg",
        descr: "Another fictional ship, this one featured in Peter Pan, the Jolly Roger is the ship that Captain Hook, Mr. Smee and their crew of pirates call home.  Captain Hook uses the ship as headquarters for all of his pirate business and is the only place in Neverland, besides Skull Rock, considered to be pirate territory.",
        money: generateRandomNumber(),
        id: generateItemId(),
        category: "ship",
    },
    {
        name: "Queen Anne’s Revenge",
        img: "../images/queen-annes-revenge.jpg",
        descr: "Notorious English pirate Blackbeard seized the French-owned slave ship called the Concorde in 1717 and turned it into his flagship because of its ability to sail quickly, renaming the vessel Queen Anne’s Revenge.  Following a raid on five merchant ships in Charleston, the ship became severely damaged when it encountered a sandbar.  Several historians suggest that because Blackbeard knew the area well, he deliberately ran the ship aground hoping to kill some of his crew, which would enlarge his slice of the fortune.",
        money: generateRandomNumber(),
        id: generateItemId(),
        category: "ship",
    },
    {
        name: "Fancy",
        img: "../images/fancy.jpg",
        descr: "Henry Avery, who was a one-time Royal Navy midshipman, organized a successful mutiny while stationed aboard the privateer Charles II along the coast of Spain in 1694.  This takeover set his short-lived occupation as a pirate in motion, renaming the ship the Fancy and setting out with his crew in search of fortune, which they amassed working primarily in the Indian Ocean.  They headed to the Bahamas in late 1695 with an immense fortune to retire early, where they were granted refuge in exchange for treasure.",
        money: generateRandomNumber(),
        id: generateItemId(),
        category: "ship",
    },
    {
        name: "Whydah",
        img: "../images/whydah.jpg",
        descr: "Originally launched as a slave ship from London in 1715, the Whydah was overtaken by pirates commanded by “Black Sam” Bellamy during its second voyage.  Rumored to contain treasure collected by Bellamy’s crew from more than 50 ships, the Whydah ran into a storm off the coast of Cape Cod where it hit a sandbar and sank, leaving just 2 surviving men out of 146.",
        money: generateRandomNumber(),
        id: generateItemId(),
        category: "ship",
    },
    {
        name: "Royal Fortune",
        img: "../images/royal-fortune.jpg",
        descr: "First capturing a French brigantine near Newfoundland, Bartholomew Roberts upgraded and repaired the ship, headed south to the Caribbean, and renamed her the Royal Fortune.  He also used the same name for a subsequently captured French warship and when renaming the Onslow.  Roberts died in a blaze of glory on his final Royal Fortune when it sank in an attack by a British warship.",
        money: generateRandomNumber(),
        id: generateItemId(),
        category: "ship",
    },
    {
        name: "Thousand Sunny",
        img: "../images/thousand-sunny.JPG",
        descr: " the second ship of the Straw Hat Pirates, built after the Going Merry was destroyed. It is often referred to as Sunny by the crew.",
        money: generateRandomNumber(),
        id: generateItemId(),
        category: "ship",
    },

    /*  item template
    {
        name: "",
        img: "",
        descr: "",
        money: generateRandomNumber(),
        id: generateItemId(),
        category: "",
    },
    */

];

function generateRandomNumber() {
    return Math.floor(Math.random() * 100000) + 10000;
}


function generateItemId() {
    return id += 1001;
}

export default items;