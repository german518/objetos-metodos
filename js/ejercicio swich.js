ejercicio resuelto switch

}
var player1 = Number(prompt('hola jugador 1\npara jugar introduce\n 1 para piedra\n2 para papel\n3 para tijera'));
var player2 = Number(prompt('hola jugador 2\npara jugar introduce\n 1 para piedra\n2 para papel\n3 para tijera'));

var chose1=function() {
  if (player1==1) {
    console.log('elegiste piedra');
  }else if (player1==2) {
    console.log('elegiste papel');
  }else if (player1==3) {
    console.log('elegiste tijera');
  }
}
var chose2=function() {
  if (player2==1) {
    console.log('elegiste piedra');
  }else if (player2==2) {
    console.log('elegiste papel');
  }else if (player2==3) {
    console.log('elegiste tijera');
  }
}

var eleccion=function() {
  console.log(chose1());
  console.log(chose2());
}


switch (true) {
  case player1 ==1 && player2==1:
  console.log('empate')
    break;
  case player1 ==1 && player2==2:
  console.log('gana jugador 2,piedra pierde a papel');
    break;
  case player1 ==1 && player2==3:
  console.log('gana jugador 1, piedra gana a tijera');
    break;
  case player1 ==2 && player2==2:
  console.log('empate')
    break;
  case player1 ==2 && player2==1:
  console.log('gana jugador 1,papel gana a piedra');
    break;
  case player1 ==2 && player2==3:
  console.log('gana jugador 2, papel pierde a tijera');
    break;
  case player1 ==3 && player2==3:
    console.log('empate')
      break;
    case player1 ==3 && player2==2:
    console.log('gana jugador 1,tijera gana a papel');
      break;
    case player1 ==3 && player2==1:
    console.log('gana jugador 2, tijera pierde a piedra  ');
      break;
}

var juego=eleccion();