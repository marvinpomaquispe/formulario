function operacion(){
	if (miformulario4.caja4.value !=""){
		var n= parseInt (miformulario4.caja4.value);
		        var aux1=1;
		        var aux2=2;
		        var aux3=0;
        while(n<1);     
        alert(""+aux1);
        for(aux3=2;aux3<=n;aux3++){
            alert(""+aux2);
            aux2= aux1+aux2;
            aux1= aux2-aux1;
        }
    }
	else{
		alert("DATOS INCORRECTOS");
	}
}