function operacion(){
	if (miformulario6.caja6.value !=""){
		var num6= parseInt (miformulario6.caja6.value);		
		var s =0 ;
		while(num6>0.99){
			s=s+num6%10;
            num6=parseInt(num6/10);

		}
		alert ("LA SUMA ES: "+s);
		}
	else{
		alert("DATOS INCORRECTOS");
	}
}