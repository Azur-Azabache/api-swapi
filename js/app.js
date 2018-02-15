$(document).ready(()=>{
  let name = $('#name');
  let height = $('#height');
  let weight = $('#weight');
  let birth = $('#birth');

  //Variable contador
  let num = 1;
  //Añadiendo cada imagen
  while( num < 87 ) {
    let img = `<img class="avatar" data-number="${num}" data-toggle="modal" data-target="#exampleModalCenter" src="https://starwars-visualguide.com/assets/img/characters/${num}.jpg">`;
    $('#container').append(img);
    num++;
  }

  $('#container img').on('click', startAjax);

  function startAjax(event) {  
    event.preventDefault();
    let numberCode = $(event.target).attr('data-number');
      $.ajax({
            url: `https://swapi.co/api/people/${numberCode}`
      }).done(addInfo)
        .fail(handleError)
  }

function handleError() {
  console.log('error');
}

  function addInfo(user) {
    console.log(user);
      name.text(`Nombre: ${user.name}`);
      height.text("Estatura: "+ user.height + " cm.");
      weight.text("Peso: "+ user.weight);
      birth.text("Fecha de Nacimiento: "+ user.birth);
  }

//   function getNews (){
//     const articleRequest = new XMLHttpRequest();
//     articleRequest.open('GET', 'https://swapi.co/api/people/'+ 1);
//
//   }
//
//   $('img').on('click', function setNumber() {
//     if(this.dataset.number === num){
//       name.innerText = `Nombre: ${data.name}`;
//       height.innerText = `Estatura: ${data.height}`;
//       weight.innerText = `Peso: ${data.weight}`;
//       birth.innerText = `Año de nacimiento: ${data.birth_year}`;
//     }
//
// });
// function setNumber() {
//   if(this.dataset.number === num){
//     name.innerText = `Nombre: ${data.name}`;
//     height.innerText = `Estatura: ${data.height}`;
//     weight.innerText = `Peso: ${data.weight}`;
//     birth.innerText = `Año de nacimiento: ${data.birth_year}`;
//   }
//
// }
// //Probando
//   function info(){
//     //Probando con Luke Skywalker
//     let apiUrl = 'https://swapi.co/api/people/1';
//     axios.get(apiUrl).then(function(response){
//     getInfo(response.data);
//   })
//   }
//     function getInfo(data){
//     name.innerText = `Nombre: ${data.name}`;
//     height.innerText = `Estatura: ${data.height}`;
//     weight.innerText = `Peso: ${data.weight}`;
//     birth.innerText = `Año de nacimiento: ${data.birth_year}`;
//     }
//
// info()

});
