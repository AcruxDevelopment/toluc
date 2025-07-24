// [a-z] aqui puede ir cualquier letra (excepto enie y mayusculas) 
// [A-Z] aqui puede ir cualquier letra (excepto enie y minusculas) 
// + significa 1 o mas veces, ejemplo [A-Z]+
// * significa 0 o mas veces, ejemplo Z*
// . significa cualquier caracter


// Expresiones
regexMin = RegExp("[a-z]");
regexMay = RegExp("[A-Z]");
regexTodas = RegExp("[A-Z]+.*[a-z]");

// Contrasena
contrasena = "hola soy Ralsei :>";

// VARIABLE_REGEXP.test(STRING) evalua si se encuentra al menos una coincidencia
// de la expresion dentro del string.

message = ""
message += "regexMin: " + regexMin.test(contrasena) + "<br>";
message += "regexMay: " + regexMay.test(contrasena) + "<br>";
message += "regexTodas: " + regexTodas.test(contrasena) + "<br>";


// Update header text
document.querySelector('#header').innerHTML = message;