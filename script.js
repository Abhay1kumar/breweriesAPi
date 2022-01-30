const button = document.getElementById('btn');
const card = document.getElementById('card')


button.addEventListener('click', getData);

 async function getData() {

    try {

        let data = await fetch("https://api.openbrewerydb.org/breweries")
        let res = await data.json();
        console.log(res);
        card.innerHTML = "";
        res.forEach((brewery)=>{
            displayData(brewery);
        })

    } catch (error) {
        console.log(error);

    }
}
// getData();

let displayData = (obj) => {
    card.innerHTML +=`<div class="main">
    <h3>Company Name: ${obj.name}</h3>
    <p class="para blue">Breweries Type:<span>${obj.brewery_type}</span></p>
  <p class="para blue">Breweries Street:<span>${obj.street}</span></p>
  <p class="para blue">Breweries City:<span>${obj.city}</span></p>
  <p class="para blue">Breweries State:<span>${obj.state}</span></p>
  <p class="para blue">Breweries Phone:<span>${obj.phone}</span></p>
  <p class="para blue">Breweries Website:<span>${obj.website_url}</span></p>
  <p class="para blue">Breweries Country:<span>${obj.country}</span></p>
  </div>`
}