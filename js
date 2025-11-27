var value = document.getElementById("value");
var a = 0;

function increment() {
    a += 1;
    value.innerHTML = `<span style="color:green;">${a}</span>`;
}

function decrement() {
    a -= 1;
    value.innerHTML = `<span style="color:red;">${a}</span>`;
}

function reset() {
    a = 0;
    value.textContent = a;
}
