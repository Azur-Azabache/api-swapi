$(document).ready(()=>{
  let name = $('#name');
  let height = $('#height');
  let weight = $('#weight');
  let birth = $('#birth');

  //Variable contador
  let num = 1;
  //Añadiendo cada imagen
  while( num <= 88 ) {
    let img = `<img class="avatar" data-toggle="modal" data-target="#exampleModalCenter" src="https://starwars-visualguide.com/assets/img/characters/${num}.jpg">`;
    $('#container').append(img);
    num++;
  }
//Probando
  function info(){
    //Probando con Luke Skywalker
    let apiUrl = 'https://swapi.co/api/people/1';
    axios.get(apiUrl).then(function(response){
    getInfo(response.data);
  })
  }
    function getInfo(data){
    name.innerText = `Nombre: ${data.name}`
    height.innerText = `Estatura: ${data.height}`
    weight.innerText = `Peso: ${data.weight}`
    birth.innerText = `Año de nacimiento: ${data.birth_year}`
    }
info()
});
