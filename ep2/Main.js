//obtengo el id con el html
const div = $('#root');
var principal ;

//input usuario
//tasa efectiva anual 
//Numero de meses que durara el prestamo
//monto total del vehiculo
//monto inicial de compra que pagara el cliente (la inicial)

//datos internos del banco
//seguro de desgravamen 0.5%
//monto minimo de la inicial:
let tea  = 12;
let tem = Math.pow(1 + tea,(1/12)) - 1;
console.log(tem);
//las coutas se calcularan utilizando tasa efectica mensual(tem)
// tem = ((1 + tea)1/12) - 1

//La cuota se hallará utilizando la fórmula del método francés de financiamiento, la
//que se utiliza en los bancos latinoamericanos principalmente.







/*
la cuota
c = v * ((1 + i) n * 1 / (1 + i)n - 1)

C: cuota mensual
V: valor del préstamo. Entiéndase por valor del préstamo (V) el monto total del vehículo
restado de la inicial.
i: tasa efectiva mensual (TEM)
n: cantidad de meses del préstamo
*/


//obtiene el elemento
// #'root >'


div.append(`<h1 class="text-center mb-3 mt-3  ">Armortización Sistema Francés</h1>`)

div.append(`<p class="title_body mx-2 ">
              La amortización francés, se caracteriza por cuotas iguales, valores de amortización del <br> principal e interés crecientes. <br>Para calcular los pagos mensuales introduzca: El principal, el plazo en meses y la tasa de interes<br> mensual. Utilice el punto como separador decimal. Por ejemplo: 25.152,47; se escribe 25152.47; Los <br> resultados aparecerán de forma automática, despues de pinchar en <b>"Calcular."</b>' 
              </p>`);

const principalForm = $(`
                     <form>
                           <div class="">
                             <legend class="h6">Amortización Sistema Francés</legend>
                           </div>  
                             
                           <div class="  row mb-3  ">
                              <label for="principal" class="col-sm-3 col-form-label                  col-form-label-sm">Principal:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number" class="form-control form-control-sm" id="principal"  value= ${principal} " placeholder="">
                              </div>
                            </div>
                            <div class="row mb-3 mx-0">
                              <label for="colFormLabelSm" class="col-sm-3 col-form-label                  col-form-label-sm">Plazo en mese:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
                              </div>
                            </div>
                           <div class="row mb-3 mx-0">
                              <label for="colFormLabelSm" class="col-sm-3 col-form-label                      col-form-label-sm">Tasa de interés mensual:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
                              </div>
                           </div>
                           <div class="d-flex flex-row flex-nowrap mb-0 mb-4 mt-4 ">
                               <div class="row mx-3">   
                                 <button class="btn btn-outline-secondary  col-sm-12" type="button">Calcular</button>
                               </div> 
                               <div class="ms-5">
                                 <button id="btn1" class="btn btn-outline-secondary ms-5 col-sm-10" type="button">Reset</button>
                               </div>
                           </div>
                           <div class="row mb-3 mx-0">
                              <label for="colFormLabelSm" class="col-sm-3 col-form-label                  col-form-label-sm">Pago mensual:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
                              </div>
                            </div>
                           <div class="row mb-3 mx-0">
                              <label for="colFormLabelSm" class="col-sm-3 col-form-label                  col-form-label-sm">Total interés:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
                              </div>
                           </div>
                           <div class="row mb-3 mx-0">
                              <label for="colFormLabelSm" class="col-sm-3 col-form-label                      col-form-label-sm">total de pagos:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
                              </div>
                           </div>
                       </form>`);     
    
                       
/*                       
const table2 = $(`
              <table class="">
                   <thead>
                        <tr>
                          <th scope="col">Parc</th>
                          <th scope="col">Amort</th>
                          <th scope="col">Interés</th>
                          <th scope="col">Pago</th>
                          <th scope="col">saldo</th>
                        </tr>
                   </thead>
                   <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td id="123" > 244</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                          <td>@fat</td>
                          </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td >Larry the Bird</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td >Larry the Bird</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                          <td>@fat</td>
                        </tr>
                 </tbody>
               </table>`);     


/*
$(document).ready(function(){
    $("#btn1").click(function(){
      alert("Value: " + $("#principal").val());
    });
  });
  $(document).ready(function(){
    $("#btn1").click(function(){
      alert("Value: " + $("#principal").val());
    });
  });
  */


var principal ;
const table = $('<table class="table"></table>');
const tableHead = $('<thead"></thead>');
const tBody = $('<tbody></tbody>')
const tr = $('<tr></<tr')
table.append(tableHead);
tableHead.append(tr);
table.append(tBody); 


const header = ['Parc ', 'Amort  ' , ' Interés  ','Pago  ', 'saldo  ']

jQuery(function(){
    $("#btn1").click(function(){
        principal = $("#principal").val(); ;
        $("#123").text(principal);
    })
});

div.append(principalForm);


console.log("fun2" + principal);
let total = 12;
header.forEach(header =>{
    const th = $('<th scope="col"></th>');    
    tr.append(th);  
    th.text(header);
})

for(let i = 0; i < total; i++){
    const th3 = $('<th scope="row"></th>');
    const td1 = $('<td id="123"></td>');
    const td2 = $('<td id="123"></td>');
    const td3 = $('<td></td>');
    const td4 = $('<td></td>');
    const tr2 = $('<tr></tr>');

    table.append(tr2);
    tr2.append(th3);
    tr2.append(td1);
    tr2.append(td2);
    th3.text(i);
    td1.text("dsfsdf");  
    td2.text("vbvbb");
   
   
    

}

div.append(table);









