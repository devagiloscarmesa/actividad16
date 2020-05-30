let varQuery = {};
$(document).ready(() => {
	let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var f=new Date();
    let variables = location.search.substring(1, location.search.length);
    let vectorQuery = variables.split("&");
    vectorQuery.forEach((param) => {
        let p = param.split("=");
        varQuery[p[0]] = p[1];
    });
    
    if(varQuery.nombre == "usuario1"){
        $("#img_perifl").attr("src", "imagenes/usuario1.jpg")
    }else{
        $("#img_perifl").attr("src", "imagenes/usuario2.jpg")
    }
    $("#bienvenido_nombre").html(varQuery.nombre);
    $("#fecha_actual").html(`${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()}`);
    

});