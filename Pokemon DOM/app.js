// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let pokeName = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"]
let pokemon = document.querySelector('#container')
let url ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <=151;i++){
    let div =document.createElement('div')
    let img = document.createElement('img');
    let span = document.createElement('span');
    let p = document.createElement('p');
    let h1 = document.querySelector('h1');

    div.classList.add('pokemon')

    p.innerHTML = `${pokeName[i-1]}`;
    img.src = `${url}${i}.png`
    span.innerHTML = `#${i}`
    
    h1.style.fontFamily = 'Arial';
    h1.style.textTransform = 'uppercase';
    h1.style.color = '#D8EBE4'
    h1.style.textAlign = "center";
    h1.style.textShadow = '5px 5px 10px #FED049'
    div.style.border = '1px solid black';
    div.style.borderRadius = '15%';
    div.style.padding = '20px';
    div.style.boxShadow = "5px 5px 8px #FED049";
    div.style.margin = "15px";
    div.style.backgroundColor = "#D8EBE4";
    p.style.fontFamily = 'courier';
    img.style.display = "block";
    img.style.border = '1px solid black';
    img.style.borderRadius = '50%';
    img.style.backgroundColor = "#FED049";
    span.style.fontFamily = 'courier';
    document.body.style.backgroundColor = '#282846'
    

    
    div.appendChild(p);
    div.appendChild(img);
    div.appendChild(span);
    pokemon.appendChild(div)
}

// div.addEventListener("mouseover", function() {
//     div.style.backgroundColor = "red";
// });
// div.addEventListener("mouseout", function() {
//     div.style.backgroundColor = "white";
// });