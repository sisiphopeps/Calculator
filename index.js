let show = document.getElementById("output");

let display = (input)=> {
    show.value += input;
}

const answer = () => {
    show.value = eval(show.value);
}

let clearOne = () => {
    show.value = show.value.slice(0,-1);
}

let clearAll = () => {
    show.value = '';
}