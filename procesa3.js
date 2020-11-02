function operacion(){
	if (miformulario3.caja3.value !=""){
		var n= parseInt (miformulario3.caja3.value);
		var i=0;
		var j=0;
		for(i=1; i<=n; i++){
                    c=0;
                    for(j=1; j<=i; j++){
                        if(i%j==0)
                         c++;    
                    }
                    if(c==2)
                    alert("los numeros primos son: "+i);
                }
		}
    else{
		alert("DATOS INCORRECTOS");
	}
}