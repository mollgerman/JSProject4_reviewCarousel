let reviews = [
    {
        id: 1,
        name: "John West",
        occupation: "Designer",
        img: "https://t4.ftcdn.net/jpg/04/84/17/61/240_F_484176129_U7WDgWgWuplaEJPCjhldTGTj090F8Xbc.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        name: "Sandra Boris",
        occupation: "Chief",
        img: "https://t4.ftcdn.net/jpg/04/62/21/99/240_F_462219944_iCINpyaLBsAQ5TT0bAQlLeweFiZEcYRs.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3,
        name: "Luke Montana",
        occupation: "Assistant",
        img: "https://t3.ftcdn.net/jpg/02/22/85/16/240_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 4,
        name: "Jason Owell",
        occupation: "Accountant",
        img: "https://t4.ftcdn.net/jpg/00/67/20/79/240_F_67207980_5jNk6I3KFlJjOXY73c3FlfvssaxY5N51.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 5,
        name: "Lyra Muller",
        occupation: "Programmer",
        img: "https://t4.ftcdn.net/jpg/02/95/17/13/240_F_295171356_0H8YIAN2f00LxkJmH0B3t02RspVZz12p.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]


const named = document.getElementById("name");
const occupation = document.getElementById("occupation");
const image = document.getElementById("image");
const text = document.getElementById("text");
const prev = document.querySelector(".prevButton");
const next = document.querySelector(".nextButton");
const number = document.getElementById("number");
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    image.src = item.img;
    named.textContent = item.name;
    occupation.textContent = item.occupation;
    text.textContent = item.text;
    number.textContent = (currentItem + 1)  + " of " + (reviews.length);
  });

prev.addEventListener("click", function() {
    if (currentItem >= 1) {
        currentItem = currentItem - 1;
    }
    else {
        currentItem = reviews.length - 1; 
    }
    showPerson();
})

next.addEventListener("click", function() {
    if (currentItem < reviews.length) {
        currentItem += 1;
    }
    else {
        currentItem =  0; 
    }
    showPerson();
})

function showPerson() {
    const item = reviews[currentItem];
    image.src = item.img;
    named.textContent = item.name;
    occupation.textContent = item.occupation;
    text.textContent = item.text;
    if (currentItem == reviews.length){
        number.textContent = (currentItem ) + " of " + (reviews.length + 1);
    }
    else {
        number.textContent = (currentItem + 1) + " of " + (reviews.length );
    }
    
}