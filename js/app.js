$(document).ready(()=>{

//variable contador
let num = 1;
//Añadiendo cada imagen
while( num <= 88 ) {
let img = `<img class="avatar" data-toggle="modal" data-target="#exampleModalCenter" src="https://starwars-visualguide.com/assets/img/characters/${num}.jpg">`;
$('#container').append(img);
  num++;
}



});
