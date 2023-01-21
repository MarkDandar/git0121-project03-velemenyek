const reviews = [

    {
        name: "Teszt Elek",
        job: "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis suscipit, officiis, ratione error quisquam maiores, officia fugiat quod voluptatibus laudantium? Maiores voluptatem delectus officiis perspiciatis dolores optio odio nihil, culpa adipisci consequatur et velit ipsam architecto commodi suscipit nam at quasi quod unde, provident cum quaerat sit magnam fugit! Assumenda atque ipsa quibusdam molestias nemo molestiae, fugit consectetur, sequi eveniet voluptatibus aut minima! Earum laborum fugiat quaerat deserunt error beatae, corporis nesciunt. Quos magnam sequi perspiciatis, iure numquam placeat!"
    },
    {
        name: "Török Bálint",
        job: "Java fejlesztő",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis suscipit, officiis, ratione error  et velit ipsam architecto commodi suscipit nam at quasi quod unde, provident cum quaerat sit magnam fugit! Assumenda atque ipsa quibusdam molestias nemo molestiae, fugit consectetur, sequi eveniet voluptatibus aut minima! Earum laborum fugiat quaerat deserunt error beatae, corporis nesciunt. Quos magnam sequi perspiciatis, iure numquam placeat!"
    },
    {
        name: "Szent Endre",
        job: "Manuális tesztelő",
        img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis suscipit, officiis, ratione error quisquam maiores, officia fugiat quod voluptatibus laudantium? Maiores voluptatem delectus officiis perspiciatis dolores optio odio nihil, culpa adipisci consequatur et velit ipsam architecto commodi suscipit nam at quasi quod unde, provident cum quaerat sit magnam fugit! Assumenda atque ipsa!"
    }
];

//Eltárolom változóba azokat a html elemeket, amiket használni akarok
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//Kiinduló pont felvétele -> ez fogja jelölni, hogy a tömbön belül melyik elem legyen a kezdőérték (melyik emberkét lássuk először)
let current = 0;

//Kiinduló elem (emberke) betöltése
window.addEventListener("load", () => {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
})

//Írunk egy fgv-t, amivel ki tudjuk választani a következő emberünket és a hozzá köthető adatokat (kép, név, állás, vélemény)
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;

}

//Gombnyomásra ugorjunk a következő emberkére
nextBtn.addEventListener("click", () => {

    //A kiinduló értéket növeljük 1-gyel -> lépünk egyet előre az objektumok között
    current++;

    if(current > reviews.length - 1){
        current = 0;
    }

    showPerson(current);
})

//Gombnyomásra ugorjunk az előző emberkére
prevBtn.addEventListener("click", () => {

    //A kiinduló értéket csökkentjük 1-gyel -> lépünk egyet vissza az objektumok között
    current--;

    if(current < 0){
        current = reviews.length - 1;
    }

    showPerson(current);
})

