const endGameData = [{
    name: "space-stone", avengers: ["captain-america", "iron-man"]
}, {
    name: "mind-stone", avengers: ["ant-man", "captain-america"]
}, {
    name: "reality-stone", avengers: ["rocket-raccoon", "thor"]
}, {
    name: "power-stone", avengers: ["war-machine", "nebula"]
}, {
    name: "time-stone", avengers: [{ name: "hulk" }]
}, {
    name: "soul-stone", avengers: ["black-widow", "hawkeye"]
}];

const stones = document.querySelectorAll('.stone');
const avengers = document.querySelectorAll('.avenger');
const glove = document.querySelector('.infinity_glove');

stones.forEach(stone => {
    stone.addEventListener('click', ({ target }) => {
        userChoose(stone);
    });
});


avengers.forEach(avenger => {
    avenger.addEventListener('click', ({ target }) => {
        userChoose(avenger);
    });
});

glove.addEventListener('click', ({ target }) => {
    userChoose(glove);
});

function userChoose(userChoice) {
    if (userChoice.classList.contains('chosen')) {
        userChoice.classList.remove('chosen');
    } else {
        userChoice.classList.add('chosen');
    }
}

