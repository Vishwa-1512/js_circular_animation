let nodes = document.getElementById("animate").childNodes;

let allchildNodes = [];
for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == "div") {
        console.log(nodes[i].innerText);
        allchildNodes.push(nodes[i]);
    }
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let colors = ["red", "yellow", "blue", "green"];

let count = 0;
let timer;

const startAnimation = () => {
    for (var i = 0; i < allchildNodes.length; i++) {
        allchildNodes[i].style.animation = `div${i} 3000ms infinite linear`;
    }
};

function stopAnimation() {
    for (var i = 0; i < allchildNodes.length; i++) {
        allchildNodes[i].style.animation = `none`;

    }
}

const changeColor = () => {
    colors.unshift(colors.pop());
    for (var i = 0; i < allchildNodes.length; i++) {
        allchildNodes[i].style.backgroundColor = colors[i];
    }
};

const changeColorHandler = () => {
    timer = setInterval(() => {
        changeColor(count);
    }, 2300);
};

btn1.addEventListener("click", () => {
    startAnimation();
    changeColorHandler();
});

btn2.addEventListener("click", () => {
    clearInterval(timer);
    stopAnimation();
});