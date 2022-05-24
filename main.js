document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const url = `https://ghibliapi.herokuapp.com/films`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        random = Math.floor(Math.random() * data.length)
        console.log(random);
        document.querySelector('#poster').src = data[random].image;
        document.querySelector('#title').innerText = data[random].title;
        document.querySelector('#time').innerText = data[random].running_time;
        document.querySelector('#score').innerText = data[random].rt_score;
        document.querySelector('#synopsis').innerText = data[random].description;
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}


const main = document.querySelector('#main');
document.querySelector('#button').addEventListener('click', hide);

function hide(){
    main.classList.remove('hidden');
}