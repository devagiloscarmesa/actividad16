let varQuery = {};
let seguimiento = [];
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
    
    $("#adicionar_informe").click((e) => {
        e.preventDefault();
        if(seguimiento.length < 10){
            let id_estudiante = obtenerIdNoRepetido();
            seguimiento.push({id_estudiante: id_estudiante, desc_estudiante:"Estudiante: "+id_estudiante, edad:Math.floor(generarNumeroAleatorio(18, 35)), nota1 : generarNumeroAleatorio(0.0, 5.0).toFixed(2), nota2 : generarNumeroAleatorio(0.0, 5.0).toFixed(2), nota3 : generarNumeroAleatorio(0.0, 5.0).toFixed(2)})
            proyectarSeguimiento();
        }else{
            alert("Se se completaron los 10 estudiantes");
        }
        
    });
    
    function obtenerIdNoRepetido(){
        while(true){
            let id = Math.floor(generarNumeroAleatorio(1, 10));
            let exitste = seguimiento.find((est) => est.id_estudiante == id);
            if(exitste ==  undefined)
                return id
        }
    }
    
    function generarNumeroAleatorio(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
    
    function proyectarSeguimiento(){
        let html = seguimiento.map( (estudiante) => {
            let promedio = (parseFloat(estudiante.nota1 + estudiante.nota2 + estudiante.nota3) / 3).toFixed(2);
            return `<tr>
                    <td>${estudiante.desc_estudiante}</td>
                    <td>${estudiante.edad}</td>
                    <td>${estudiante.nota1}</td>
                    <td>${estudiante.nota2}</td>
                    <td>${estudiante.nota3}</td>
                    <td>${promedio}</td>
                </tr>`
        });
        
        $("#tbl_seguimiento tbody").html(html);
    }
    

});