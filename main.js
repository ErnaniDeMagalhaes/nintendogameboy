const startButton = document.getElementById('start');
const helloWorld = document.getElementById('hello-world');

startButton.addEventListener('click', function(){
    helloWorld.classList.toggle('hello');
});