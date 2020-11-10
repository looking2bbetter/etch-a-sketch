const container = document.querySelector('#container');

let gridSize = 25;

let gridCreate = () => {
    console.log(gridSize);
    for (let i = 1; i <= gridSize * gridSize; i++) {
        container.innerHTML += "<div class='divis'><p>" + i + "</p></div>";

        container.setAttribute('style', 'width: ' + gridSize * 44 + 'px;');
    }
}

gridCreate();

const divis = document.querySelectorAll('.divis');
divis.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.setAttribute('style', 'background-color: blue;');
        })
    });

let button = document.querySelector('button');

button.addEventListener('click', () => {
    document.querySelectorAll('.divis').forEach((div) => {
        div.setAttribute('style', 'background-color: white;');
    })

    let requestedGridSize = prompt("How large of a grid would you like?");

    gridSize = requestedGridSize;
    console.log(gridSize);
    container.innerHTML = "";
    gridCreate();
    console.log(gridSize);
})