//Metodo que recibe como parametros un arreglo de numeros enteros y un valor entero M; devuelve arreglo de los 2 numeros que sumados devuelven M
obtainSubSet(array: number[], val:number){
     for(let i=0;i<array.length;i++){
	     for(let a=0;a<array.length;a++){
		  if(i!=a){
		  let sum = array[i]+array[a];
		    if(sum==val)
			return [array[i],array[a]];
		  }
		}
	 }
	return [0];
}