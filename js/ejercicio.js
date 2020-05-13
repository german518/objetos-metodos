//TIPOS DE DATOS


var num = 10  		    //numero		 
var str = "diez"	   // texto		  DATOS
var bol = true || false	//booleano	 PRIMITIVOS
var und = undefined	   // indefinido    	
var nul = null		   // nulo


//OBJETOS

Var persona ={
	edad= 10 ,        
	nombre = "german",		
	ciudad = "palma"
	tel = "34521"	    	
  
	};     // ----> siempre llevan punto y coma al cerrar

console.log (persona.nombre);    
                    
	/*  la anotacion de punto nos permite
	saber el nivel jerarquico, primero va el 
	nombre del objeto y luego el argumento que 
	queremos consultar aqui arroja "german".*/

//FUNCIONES
 
// Declarativas

function primeraFuncion(){
	console.log("hola"),
};  


//Expresivas

function primeraFuncion= miFuncion() {
	console.log("hola"),
};

primeraFuncion();   // -----> de esta manera llamamos a la funcion


//PARAMETROS PARA LAS FUNCIONES

/*typeof --> nos ayuda a identificar que tipo de dato es cada
	     uno. Ejem:*/

typeof true
//boolean

typeof {}
//object

/*Type of coertion -->es el proceso de convertir el valor de un tipo
		      a otro (de string a numero, de objeto a booleano)*/

"hola" + 10 	     
// "hola10"	        

true + 'hola'
//"truehola"

'2' * 20
// 40

'hola' * 10 	 
// NaN         

true + 1 
//2

/*OPERADORES DE ASIGNACION

= Asigna

+= suma 

-= resta

*= multiplica

/= divide  */


/*OPERADORES DE COMPARACION evalua la igualdad entre 2 caracteres*/
 
5 =='5' //--> true

5 ==='5' //--> false

5!= '5' //true , arroja true porque en efecto son diferentes


/*ASIGNACION POR REFERENCIA Y VALOR
     
  valor por referencia , ejemplo con un array*/

  var number1 [1,2,3,4]

  var number2 = number1

  //luego

  number2.push(5)

  number2 = [1,2,3,4,5] // --> agrego el 5 al array number1

