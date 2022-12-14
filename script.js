let url = 'https://api.punkapi.com/v2/beers'
let card = document.getElementById('cardContainer')

let response = fetch(url)
response.then((value)=>{
    return value.json()
})
.then((data)=>{
    let icard = ''
    for(let item in data){
        // console.log(data[item])
        icard += `
        <div class="card mx-2 my-2" style="width: 22rem;">
        <div class="" style="display:flex;align-items:center;justify-content:center;">
        <img style="width: 6rem;height: 14rem; margin:5px;" src="${data[item].image_url}" class="card-img-top" alt="beer images">
        </div>
        <hr>
        <div class="card-body">
          <span>Title is:</span><h5 class="card-title" class="card-title-class">${data[item].name}</h5>
          <p class="card-text">Tagline is: ${data[item].tagline}</p>
          <p class="card-text">first_brewed at: ${data[item].first_brewed}</p>
          <p class="card-text">food pairing at: ${data[item].food_pairing[0]}</p>
        </div>
      </div>
        `
    }
    card.innerHTML += icard
})

