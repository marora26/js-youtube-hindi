const clock = document.getElementById('clock');
// const clockNew = document.querySelector('#clock')
console.log(clock);

let date = new Date();
console.log(date.toLocaleTimeString());

// console.log(typeof date);

setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

}, 1000)