// document.querySelector("body").innerHTML += "<h5>JS veikia!</h5>"

fetch('https://randomuser.me/api/') //fetch funkcija yra asinchronine ir del to mes naudojame then metoda, kad nesidubliuotu duomenys, kad palauktu, REACTE naudojama AXIO
.then((response) => response.json()) //kreipimasis
.then(jsonObjektas => { //responsas paverstas i json formata
    console.log(jsonObjektas.results[0])
    let fetch = jsonObjektas.results[0];
    let name = fetch.name;

    document.querySelector('.img').innerHTML += `<img src="${fetch.picture.large}" class="box__header--img" />`;

    document.querySelector('.box__header--name').innerHTML += name.first + " " + name.last;

    document.querySelector('.box__flex--phone').innerHTML = fetch.phone;
    document.querySelector('.box__flex--cell').innerHTML = fetch.cell;
    document.querySelector('.box__flex--email').innerHTML = fetch.email;

    document.querySelector('.box__flex--address').innerHTML = fetch.location.street.number + fetch.location.street.name + fetch.location.city + fetch.location.country + fetch.location.postcode;
})
