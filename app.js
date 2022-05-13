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
const matchedData = {
    avengers: []
};

stones.forEach(stone => {
    stone.addEventListener('click', ({ target }) => {
        userChoose(stone);
        matchedData.stone = stone.id;
        console.log(matchedData);
    });
});


avengers.forEach(avenger => {
    avenger.addEventListener('click', ({ target }) => {
        userChoose(avenger);
        matchedData.avengers.push(avenger.id);
    });
});

glove.addEventListener('click', ({ target }) => {
    userChoose(glove);
    let stoneMatch = endGameData.filter(data => data.name === matchedData.stone);
    let matchesCount = 0;
    matchedData.avengers.forEach(avenger => {
        if (stoneMatch[0].avengers.includes(avenger)) {
            matchesCount++;
        } else {
            matchesCount = -10; ///
        }
    });
    // need tp fix this issue of matches above
    // use sort?
    //json striginfy
    //lowdash
    console.log(stoneMatch[0].avengers.length);
    if (matchesCount === stoneMatch[0].avengers.length) {
        alert('Hooray!');
    } else {
        alert('Wrong!');
    }
    matchedData.avengers =[];
    matchedData.stone = null;
    avengers.forEach(avenger => {
        avenger.classList.remove('chosen');
    });
    stones.forEach(stone => {
        stone.classList.remove('chosen');
    });
});

function userChoose(userChoice) {
    if (userChoice.classList.contains('chosen')) {
        userChoice.classList.remove('chosen');
    } else {
        userChoice.classList.add('chosen');
    }
}

