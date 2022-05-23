//obtengo el id con el html
const div = $('#root');
let principal = $("#principal").val();
let plazoMeses;
let tasaInteresMensual ;
//input usuario
//tasa efectiva anual 
//Numero de meses que durara el prestamo
//monto total del vehiculo
//monto inicial de compra que pagara el cliente (la inicial)

//datos internos del banco
//seguro de desgravamen 0.5%
//monto minimo de la inicial:
let tea  =   0.05;
let tem = Math.pow((1 + tea), 1/12) - 1;
let I = tem * 100;
console.log(I);
console.log(tem);
let couta = 45000.00 *  Math.pow((1 + I),12) * I / Math.pow((1 + I) , 12) - 1; 
console.log(couta);
//las coutas se calcularan utilizando tasa efectica mensual(tem)
// tem = ((1 + tea)1/12) - 1

//La cuota se hallará utilizando la fórmula del método francés de financiamiento, la
//que se utiliza en los bancos latinoamericanos principalmente.


jQuery(function(){
    $("#btn1").click(function(){
        principal = $("#principal").val(); 
        plazoMeses = $("#meses").val();
        $("#123").text(principal);

        for(let i = 0; i < plazoMeses; i++){
            const th3 = $('<th ></th>');
            const td1 = $('<td id="123"></td>');
            const td2 = $('<td id="123"></td>');
            const td3 = $('<td></td>');
            const td4 = $('<td></td>');
            const tr2 = $('<tr></tr>');
        
            table.append(tr2);
            tr2.append(th3);
            tr2.append(td1);
            tr2.append(td2);
            tr2.append(td3);
            tr2.append(td4);
            th3.text(i);
            td1.text(principal);  
            td2.text("vbvbb");
            td3.text("dsfsdf");
            td4.append("ffdggfdg");
                 
        }
        
    })
});




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
              </p>`
);

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
                              <label for="colFormLabelSm" class="col-sm-3 col-form-label                  col-form-label-sm">Plazo en meses:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number" class="form-control form-control-sm" id="meses" value =  ${plazoMeses}  " placeholder="">
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
                                 <button id="btn1" class="btn btn-outline-secondary  col-sm-12" type="button">Calcular</button>
                               </div> 
                               <div class="ms-5">
                                 <button  class="btn btn-outline-secondary ms-5 col-sm-10" type="button">Reset</button>
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
                       </form>`
);     
    
                       
                        
div.append(principalForm);


const table = $(`
           <table class="table">
                <thead>
                    <tr>
                         <th scope="col">Parc</th>
                         <th scope="col">Amort</th>
                         <th scope="col">Interés</th>
                         <th scope="col">Pago</th>
                         <th scope="col">saldo</th>
                    </tr>
                </thead>
            </table>`
);


const tbody = $('<tbody></tbody>');
div.append(table);
table.append(tbody);












