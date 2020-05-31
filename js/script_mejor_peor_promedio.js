let varQuery = {};
$(document).ready(() => {
    let variables = location.search.substring(1, location.search.length);
    let vectorQuery = variables.split("&");
    let html = "";
    vectorQuery.forEach((param) => {
        let p = param.split("=");
        varQuery[p[0]] = p[1];
    });
    
    html = `<tr class = "bg-success">
            <td>Mayor</td>
            <td>${varQuery.mayor_desc_estudiante.replace("%",  " ")}</td>
            <td>${varQuery.mayor_edad}</td>
            <td>${varQuery.mayor_nota1}</td>
            <td>${varQuery.mayor_nota2}</td>
            <td>${varQuery.mayor_nota3}</td>
            <td>${varQuery.mayor_promedio}</td>
        </tr>
         <tr class = "bg-danger">
            <td>Menor</td>
            <td>${varQuery.menor_desc_estudiante.replace("%",  " ")}</td>
            <td>${varQuery.menor_edad}</td>
            <td>${varQuery.menor_nota1}</td>
            <td>${varQuery.menor_nota2}</td>
            <td>${varQuery.menor_nota3}</td>
            <td>${varQuery.menor_promedio}</td>
         </tr>` ;
         
        $('#tbl_mp').html(html);
})