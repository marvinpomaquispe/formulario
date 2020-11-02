function operacion(){
	if (miformulario7.caja7.value !=""){
		var num1= parseInt (miformulario7.caja7.value);		
		var p =0 ;
		var i=0;
		var c=0;
		let dig;
		while(num1>0){
			dig = num1%10;
            num1 = parseInt(num1/10);
            if(dig%2==1){
            	i++;
                }
            else{
            	if(dig==0){
            		c++;
            	}
            	else{
            		p++;
            	}
            }
        }
		alert ("LOS DIGITOS IMPARES SON: "+i);
		alert ("LOS DIGITOS PARES SON: "+p);
		alert ("LOS DIGITOS CEROS SON: "+c);
	}
	else{
		alert("DATOS INCORRECTOS");
	}
}