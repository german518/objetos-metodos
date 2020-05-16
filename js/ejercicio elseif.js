var jugador1 = prompt ('Jugador uno \nescoge piedra , papel o tijera')
var jugador2 = prompt ('Ahora jugador dos\nescoge piedra , papel o tijera')

if (jugador1 == 'tijera' && jugador2=='papel') {
  console.log('jugador uno gana');
}else if (jugador1 == 'tijera' && jugador2 == 'piedra') {
  console.log('jugador uno pierde');
}else if (jugador1 == 'tijera'&& jugador2=='tijera')
 {console.log('empate');
}else if (jugador1 =='papel'&& jugador2== 'papel') {
  console.log('empate');
}else if (jugador1 == 'papel' && jugador2 == 'piedra') {
  console.log('gana jugador 1')
}else if (jugador1=='papel'&& jugador2=='tijera') {
  console.log('gana jugador 2');
}else if (jugador1=='piedra' && jugador2=='piedra') {
  console.log('empate');
}else if (jugador1=='piedra' && jugador2=='papel') {
  console.log('gana jugador 2');
}else if (jugador1 == 'piedra' && jugador2 == 'tijera') {
  console.log('gana jugador 1');
}

console.log('gracias por jugar');