function operacion(){
	if (miformulario5.caja5.value !=""){
		var num= parseInt (miformulario5.caja5.value);
		var i = 0;
		var r = 0;		
		while(num>0.99){
			r= num %10;
            i=(i*(10))+r;
            num=parseInt(num/10);
		}
		alert ("EL INVERSO ES: "+i.toFixed(0));
		}
	else{
		alert("DATOS INCORRECTOS");
	}
}