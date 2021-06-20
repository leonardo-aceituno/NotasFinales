// Solicitud de datos personales
var nombre = prompt("Ingrese su Nombre", "Leonardo");
var apellido =prompt("Ingrese su Apellido", "Aceituno");
var carrera = prompt("Ingrese su Carrera", "Front End");
var nombre_completo = nombre+" "+apellido;


document.write("<section class='container mt-5'>")
document.write('<div id="cabecera">')
document.write('<h1>NOTAS FINALES</h1>')
document.write('<img src="assets/img/unnamed.gif" alt="logo-desafiolatam" >')
document.write('</div>')

document.write('<table class="table table table-borderless ">') //table-sm
    document.write('<tr>')
        document.write('<th>Nombre:</th>')
        document.write('<td>'+nombre_completo+'</th>')
    document.write('</tr>')

    document.write('<tr>')
        document.write('<th>Carrera:</th>')
        document.write('<td >'+carrera+'</th>')
    document.write('</tr>')

    document.write('<tr>')
        document.write('<td colspan="5">')

            // TABLA NOTAS
            document.write("<table class='table table-striped'>")
                // CABECERA DE LA TABLA
                document.write('<thead class="table-dark">')
                    document.write('<tr>')
                        document.write('<th scope="col">#</th>')
                            document.write('<th scope="col">Asignatura</th>')
                            document.write('<th scope="col">Nota 1</th>')
                            document.write('<th scope="col">Nota 2</th>')
                            document.write('<th scope="col">Nota 3</th>')
                            document.write('<th scope="col">Promedio</th>')
                    document.write('</tr>')
                document.write('</thead>')

                //CUERPO
                document.write('<tbody>')
                    // FILA 1
                    // Solicita datos por pantalla
                    let ramo1 = prompt("Ingrese su Ramo: ","HTML");
                    let ramo1_nota1 = parseFloat(prompt('Ingrese nota 1 ['+ramo1+']'));
                    let ramo1_nota2 = parseFloat(prompt('Ingrese nota 2 ['+ramo1+']'));
                    let ramo1_nota3 = parseFloat(prompt('Ingrese nota 3 ['+ramo1+']'));
                    let ramo1_prom = (ramo1_nota1 + ramo1_nota2 + ramo1_nota3)/3;

                    
                    // Imprime datos en el HTML
                    document.write('<tr>')
                        document.write('<th scope="row">1</th>')
                        document.write('<td>'+ramo1+'</td>')
                        document.write('<td>'+ramo1_nota1+'</td>')
                        document.write('<td>'+ramo1_nota2+'</td>')
                        document.write('<td>'+ramo1_nota3+'</td>')
                        document.write('<td>'+ramo1_prom+'</td>')
                    document.write('</tr>')

                    // FILA 2
                    // Solicita datos por pantalla
                    let ramo2 = prompt("Ingrese su Ramo: ","CSS");
                    let ramo2_nota1 = parseFloat(prompt('Ingrese nota 1 ['+ramo2+']'));
                    let ramo2_nota2 = parseFloat(prompt('Ingrese nota 2 ['+ramo2+']'));
                    let ramo2_nota3 = parseFloat(prompt('Ingrese nota 3 ['+ramo2+']'));
                    let ramo2_prom = (ramo2_nota1 + ramo2_nota2 + ramo2_nota3)/3;
                    
                    // Imprime datos en el HTML
                    document.write('<tr>')
                        document.write('<th scope="row">2</th>')
                        document.write('<td>'+ramo2+'</td>')
                        document.write('<td>'+ramo2_nota1+'</td>')
                        document.write('<td>'+ramo2_nota2+'</td>')
                        document.write('<td>'+ramo2_nota3+'</td>')
                        document.write('<td>'+ramo2_prom+'</td>')
                    document.write('</tr>')            
                
                    // FILA 2
                    // Solicita datos por pantalla
                    let ramo3 = prompt("Ingrese su Ramo: ","JavaScript");
                    let ramo3_nota1 = parseFloat(prompt('Ingrese nota 1 ['+ramo3+']'));
                    let ramo3_nota2 = parseFloat(prompt('Ingrese nota 2 ['+ramo3+']'));
                    // let ramo3_nota3 = parseFloat(prompt('Ingrese nota 1 ['+ramo3+']'));
                    // let ramo3_prom = (ramo3_nota1 + ramo3_nota2 + ramo3_nota3)/3;

                    let nota_aprobar = parseFloat(prompt('Ingrese nota para aprobar ['+ramo3+']'));
                    let suma = ramo3_nota1 + ramo3_nota2 ;
                    let aprobar = (nota_aprobar * 3) - suma ;
                    
                    // Imprime datos en el HTML
                    document.write('<tr>')
                        document.write('<th scope="row">3</th>')
                        document.write('<td>'+ramo3+'</td>')
                        document.write('<td>'+ramo3_nota1+'</td>')
                        document.write('<td>'+ramo3_nota2+'</td>')
                        document.write('<td>---</td>')
                        document.write('<td>---</td>')
                    document.write('</tr>')                    
                                           
                document.write('</tbody>')

                document.write('<tfoot>')
                    document.write('<td colspan="6">Para aprobar '+ramo3+' con nota '+nota_aprobar+' necesitas obtener un '+aprobar+' en la nota 3 </td>')
                document.write('</tfoot>')

            document.write("</table>")
        document.write('</td>')
    document.write('</tr>')
document.write('</table>')
document.write("</section>")