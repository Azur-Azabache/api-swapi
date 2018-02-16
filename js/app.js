$(document).ready(()=>{
  const name = $('#name');
  const height = $('#height');
  const weight = $('#weight');
  const birth = $('#birth');
  const gender = $('#gender');
  const homeWorld = $('#homeWorld');
  //Variable contador
  let num = 1;
  const maxNum = 88;
  //Añadiendo cada imagen
  while( num < maxNum) {
    let img = `<img class="avatar" data-number="${num}" data-toggle="modal" data-target="#exampleModalCenter" src="https://starwars-visualguide.com/assets/img/characters/${num}.jpg">`;
    $('#container').append(img);
    num++;
  }
  //Evento click
  $('#container img').on('click', startAjax);
  // Función a ser ejecutada
  function startAjax(event) {
    event.preventDefault();
    console.log(event.target);
    let numberCode = $(event.target).attr('data-number');
    $.ajax({
      url: `https://swapi.co/api/people/${numberCode}`
    }).done(addInfo)
    .fail(handleError)
  }

  function handleError() {
    console.log('Error');
  }

  function addInfo(user) {
    console.log(user);
    name.text(`Nombre: ${user.name}`);
    height.text(`Estatura: ${user.height}cm.`);
    weight.text(`Peso: ${user.mass} lbs.`);
    gender.text(`Género: ${user.gender}`);
    birth.text(`Fecha de nacimiento: ${user.birth_year}`);
  }

});
