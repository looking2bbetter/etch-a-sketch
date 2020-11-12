const container = document.getElementById('container');
// const grid = document.querySelector('grid');
// let divis = document.querySelectorAll('.divis');
// this variable declaration can't be accessed in gridCreate, why is that ??????
let gridSize = 5;

let gridCreate = () => {
    container.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;

    for (let i = 1; i <= gridSize * gridSize; i++) {
        container.innerHTML += "<div class='divis'></div>";
    }

    // so it needs to be declared here, whyyy????
    selectColor('black');
}
let random = document.getElementById('random');
let black = document.getElementById('black');

function selectColor(colorofchoice) {
    let divis = document.querySelectorAll('.divis');
    // let chosenColor = 'black';

    divis.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.setAttribute('style', `background-color: ${colorofchoice}`);
        })
    });

    // random.addEventListener('click', () => {
    //     chosenColor = yeetColorIntoExistence();
    // })
}

gridCreate();

let reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    document.querySelectorAll('.divis').forEach((div) => {
        div.setAttribute('style', 'background-color: white;');
    })

    function requestedGridSize() {
        let firstRequest = prompt('How large of a grid would you like created?');
        if (firstRequest > 0 && firstRequest < 31) {
            return firstRequest;
        } else {
            let secondRequest;
            while (firstRequest > 30 || firstRequest < 1) {
                secondRequest = prompt('Please enter a size between 0 and 30.');
                if (secondRequest > 0 && secondRequest < 31) {
                    console.log(secondRequest);
                    return secondRequest;
                }
            }
        }
    }

    gridSize = requestedGridSize();
    container.innerHTML = "";
    gridCreate();
})

random.addEventListener('click', () => {
    let divis = document.querySelectorAll('.divis');
    
    divis.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.setAttribute('style', `background-color: ${yeetColorIntoExistence()}`);
        })
    });
})

black.addEventListener('click', () => {
    let divis = document.querySelectorAll('.divis');
    
    divis.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.setAttribute('style', `background-color: black`);
        })
    });
})

yeetColorIntoExistence = function() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};