//Metodo que recibe como parametros un arreglo de numeros enteros y un valor entero M; devuelve arreglo de los 2 numeros que sumados devuelven M
obtainSubSet(newArray: number[], val:number){
     newArray.sort(function(a, b){return a - b}); //A la cadena se le realiza un ordenamiento ascendente.
	 
	   for(let i=0;i<newArray.length;i++){ //Se realiza un for ascendente al arreglo
		    for(let a=newArray.length;a>0;a--){ //Se realiza un for descendente al arreglo
				if(newArray[i]+newArray[a]==val) // Si suma es igual a M finalizo todo el flujo
					return [newArray[i],newArray[a]];
				if(newArray[i]+newArray[a]<val) // Si suma es menor a M rompo el flujo interno y se continua con el flujo externo
					break;
			}
	   } 
	   return [0];
}
