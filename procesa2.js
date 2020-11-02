function operacion(){
	if ((miformulario2.caja1.value !="") && (miformulario2.caja2.value !="") && (miformulario2.caja3.value !="")){
		var a= parseInt (miformulario2.caja1.value);
		var b= parseInt (miformulario2.caja2.value);
		var c= parseInt (miformulario2.caja3.value);
				if(a>b){
            if(a>c){
                alert("el mayor es: "+a);
            }
            else{
                alert("el mayor es: "+c);
            }            
        }
        else{
            if(b>c){
                alert("el mayor es: "+b);
            }
            else{
                alert("el mayor es: "+c);
            }
        }
        
        if(a<b){
            if(a<c){
                alert("el menor es: "+a);
            }
            else{
                alert("el menor es: "+c);
            }
        }
        else{
            if(b<c){
                alert("el menor es: "+b);
            }
            else{
                alert("el menor es: "+c);
            } 		
        }
		}

	else{
		alert("DATOS INCORRECTOS");
	}
}