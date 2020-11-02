function operation(){
if (miformulario1.caja1.value !=""){
		var n= parseInt (miformulario1.caja1.value);
		var i=0;
		for(i=0;i<=n;i++){
			n--;
		}
		alert(""+n);
		}
    else{
		alert("DATOS INCORRECTOS");
	}
}