//Metodo que recibe como parametros un arreglo de numeros enteros y un valor entero M; devuelve arreglo de los 2 numeros que sumados devuelven M
 obtainSubSet(newArray: number[], val:number){
     newArray.sort(function(a, b){return a - b}); //A la cadena se le realiza un ordenamiento ascendente.
	   for(let i=0;i<newArray.length;i++){ //Se realiza un for ascendente al arreglo
		  if(newArray[i]!=val){ // Se valida que el valor del arreglo no sea igual a val
			  let missing = (newArray[i]-val)*-1; // se aplica la descomposicion de a+b=c en donde quedaria a-c=-b
		      if(newArray[i]+missing == val && newArray[i]!= missing){ //Validamos que a+b=c y que a<>b
			    let elementFound = newArray.includes(missing); //Usamos el metodo includes() para validar si b existe en el arreglo
			    if(elementFound) // Si b se encuentra entonces culmina el flujo
					return [newArray[i],missing];
		      }
			  
		  }
	   } 
	   return [0];
    }
