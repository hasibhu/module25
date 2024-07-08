
// option 1: writing js code in html file

// option 2: ad onclick funtion othe html element 
// red
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// blue
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}



// option 3: 
// grey
const makeGrey = document.getElementById('makeGrey');
makeGrey.onclick = makeGreyFunction;

function makeGreyFunction() {
    document.body.style.backgroundColor = 'grey';
}


// // option 3 - version 2

const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleFunction() {
    document.body.style.backgroundColor = 'purple';
}


// option 4
const saddlebrownButton = document.getElementById('saddlebrown');

saddlebrownButton.addEventListener('click', function makebrownButton() {
    document.body.style.backgroundColor = 'saddlebrown';
});


// option 4 another version

const goldenrodButton = document.getElementById('goldenrod');

goldenrodButton.addEventListener('click', function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
});



// option 5 with annonimous function

// steelblue
document.getElementById('steelblue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'steelblue';
})


// Pink
document.getElementById('pink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink';
})

// orange
document.getElementById('orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})








