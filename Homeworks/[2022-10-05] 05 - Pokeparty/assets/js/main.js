//Declaracion de variables logica
let pokemons = [];

//Declaracion de variables visuales
let pokeForm = null;
let pokeParty = null;

//Declare color array
let color = {
  normal: "#c7c2b9",
  fighting: "#d3425f",
  ghost: "#5f6dbc",
  bug: "#a8b820",
  dark: "#705848",
  dragon: "#7038f8",
  electric: "#f8d030",
  fairy: "#ee99ac",
  fire: "#f08030",
  flying: "#a890f0",
  grass: "#78c850",
  ground: "#e0c068",
  ice: "#98d8d8",
  poison: "#a040a0",
  psychic: "#f85888",
  rock: "#b8a038",
  steel: "#b8b8d0",
  water: "#6890f0"
};

//bind views
const bindElements = () => {
  pokeForm = document.querySelector("#pokemon-form");
  pokeParty = document.querySelector("#pokemon-party-section");
}

const setFormListener = () => {
  pokeForm.addEventListener("submit", e => {
    e.preventDefault();

    const data = new FormData(pokeForm);
    const _pokemon = {};
    let hasErrors = false;

    data.forEach((value,key) => {
      if(!value) {
        hasErrors = true;
      }
      _pokemon[key] = value;
      if(key === "type-1") {
        _pokemon.color = color[value];
      }
    })

    if(hasErrors) {
      alert("Se encontraron errores");
      return;
    }

    pokemons.unshift(_pokemon);
    renderPokemons();
    pokeForm.reset();
  });
}

const createPokemonCard = (poke) => {
  const content =  `
    <figure>
      <img src=${poke.sprite} alt="Pokemon Sprite">
    </figure>

    <div class="info">
      <h4> ${poke.name} </h4>
      <p> # ${poke.index} </p>
      <p> Altura: ${poke.height} </p>
      <p> Peso: ${poke.weight} </p>
    </div>
    
    <div class="stats">
      <div class="stat">
        <p> HP: </p>
        <div class="bar">
          <div style="width: ${(poke.hp/255)*100}%;"></div>
        </div>
      </div>
      
      <div class="stat">
        <p> ATK: </p>
        <div class="bar">
          <div style="width: ${(poke.atk/255)*100}%;"></div>
        </div>
      </div>

      <div class="stat">
        <p> DEF: </p>
        <div class="bar">
          <div style="width: ${(poke.def/255)*100}%;"></div>
        </div>
      </div>

      <div class="stat">
        <p> SPA: </p>
        <div class="bar">
          <div style="width: ${(poke.spa/255)*100}%;"></div>
        </div>
      </div>

      <div class="stat">
        <p>SPD: </p>
        <div class="bar">
          <div style="width: ${(poke.spd/255)*100}%;"></div>
        </div>
      </div>
      
    </div>
    <button class="delete-pokemon">Delete</button>
  `;

  const _article = document.createElement("article");
  _article.innerHTML = content;
  _article.dataset.index = poke.index;
  _article.style.background = poke.color;
  
  //Delete selected pokemon from party
  _article.querySelector(".delete-pokemon")
  .addEventListener("click", () => {
    pokemons = pokemons.filter(poke => poke.index !== _article.dataset.index);
    renderPokemons();
  });
  return _article;
}

const renderPokemons = () => {
  pokeParty.innerHTML = "<h3> Pokemon Party </h3>";
  pokemons.forEach(poke => {
    pokeParty.appendChild(createPokemonCard(poke));
  });
}

//Main function
const Main = () => {
  bindElements();
  setFormListener();
}

window.onload = Main;