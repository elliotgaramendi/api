'use strict';

const objetoPersona = {
  nombre: 'Elliot',
  meta: 'Ser programador Frontend'
};

const jsonPersona = '{"nombre":"Elliot","meta":"Ser programador Frontend"}';

// Convertir de objeto a JSON
console.log(JSON.stringify(objetoPersona));
// Convertir de JSON a objeto
console.log(JSON.parse(jsonPersona));

const pokemon1 = document.querySelector('#pokemon1');
const pokemon2 = document.querySelector('#pokemon2');

const renderPokemon = (name, src, elemento) => {
  const pokemon = document.createElement('img');
  pokemon.setAttribute('alt', name);
  pokemon.setAttribute('src', src);
  pokemon.classList.add('container__img');
  elemento.appendChild(pokemon);
}

// fetch('../json/public-api.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     renderPokemon(data.name, data.src, pokemon1);
//   });

fetch('https://pokeapi.co/api/v2/pokemon/25')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderPokemon(data.name, data.sprites.front_default, pokemon2);
  });

const consultarAPI = async () => {
  const api = await fetch('https://elliotxleo.github.io/api-publica/json/public-api.json');
  const data = await api.json();
  renderPokemon(data.name, data.src, pokemon1);
};

consultarAPI();