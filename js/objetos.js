//ejercicio Metodos

//objeto Ordenador

var ordenador={
    marca: 'asus',
    peso:'500 gramos',
    pantalla:'samsung',
    teclado:'keyboard asus',
    parlantes:'vieta',
    tamaño:'14 pulgadas',
    caracteristicas:function(){
        console.log("el peso es "+this.peso +  " y el teclado es " + this.teclado);
         
      }

}

ordenador.caracteristicas();

//los metodos tambien pueden ir por fuera
ordenador.color=function(color){
    console.log("tu ordenador es: " + color)
}

document.write("tienes la pantalla: " + ordenador.pantalla +" y el teclado: "+ ordenador.teclado);
//aca llamo a los elementos pantalla y teclado del objeto ordenador

ordenador.color("azul");
//aqui invoque el metodo ordenador.color
 



/*Objeto de una orquesta, usando this para seleccionar
algun elemento del objeto orquesta*/


var orquesta={
    nombre:"Palmaactiva",
    cantante:"German",
    guitarrista:"fran",
    director:"Toni",
    instrum1:"guitarra",
    acciones:function(escenario){
        console.log('esta noche canta '+ this.cantante),
        console.log('hoy nos presentamos en  '+ escenario);
        
         }
}

orquesta.acciones(); 
/*aqui invocamos el metodo acciones con los parentesis
y nos arroja la instruccion que tenemos dentro de esa funcion*/
orquesta.acciones("son moix");
/*aqui invocamos el metodo acciones con los parentesis
y nos arroja la instruccion pero dando un parametro*/


//objeto IPOD 

var ipod = {
    botonPlay:"iniciar",
    botonPausa:'pausar',
    track:'hotel california',
    marca:'apple',
    reproducir:function(){
        console.log("para empezar presiona  "+ this.botonPlay);
        
    }
}
ipod.escuchar=function(id){
    console.log("estoy escuchando la cancion " + id);
    console.log("estoy oyendo  "+ ipod.track);
    
}

ipod.reproducir();
ipod.escuchar(15);

