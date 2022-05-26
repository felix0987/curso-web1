//obtengo el id con el html
const div = $('#root');
let principal ;
let plazoMeses ;
let tasaInteresMensual ;

let prueba;

let tea  ;
let tem ;
let coutaMensual ;
let interes ;
let amort ;



jQuery(function(){
    $("#calcular").click(function(){
        
        principal = $("#principal").val()
        plazoMeses = $("#meses").val() ;
        tasaInteresMensual = $("#interesMensual").val();
        
        tea  = Math.pow(1 + tasaInteresMensual / 100,12) - 1;
        tem = Math.pow(1 + tea, 1/12) - 1;
        coutaMensual = ( principal  * (( Math.pow((1 + tem),12) * tem) / (Math.pow((1 + tem) , 12) - 1))).toFixed(2);

        interes = principal * tasaInteresMensual / 100;

        amort = (coutaMensual - interes).toFixed(2);

        $("#pagoMensual").change (function () {

            
        
        });

        $("#pagoMensual").val(coutaMensual);

        for(let i = 0; i < plazoMeses ; i++){

            
            const th3 = $('<th ></th>');
            const td1 = $('<td id="123"></td>');
            const td2 = $('<td id="123"></td>');
            const td3 = $('<td></td>');
            const td4 = $('<td></td>');
            const tr2 = $('<tr></tr>');
            const td5 = $('<td></td>');
            const td6 = $('<td></td>');
            
        
            table.append(tr2);
            tr2.append(th3);
            tr2.append(td1);
            tr2.append(td2);
            tr2.append(td3);
            tr2.append(td4);
            tr2.append(td5);
            tr2.append(td6);


            if(i == 0){
                th3.text(0);
                td4.text(principal);
                principal = (principal - amort);

                anteriorPirncipal = principal;
                anteriorInteres = interes;

            }
            if(i >= 1){
                    
                th3.text(i);
                td1.text(amort);  
                td2.text(interes );
                td3.text(coutaMensual);
                td4.text(principal);
                td5.text("seguro");
                td6.text("ddddd");
                    
                interes = (anteriorPirncipal * tasaInteresMensual / 100).toFixed(2);
                amort = (coutaMensual - interes).toFixed(2);
                principal = (principal - amort).toFixed(2);

                console.log(interes);
                

                var anteriorAmor = amort;

                var anteriorInteres = interes;

                var anteriorPirncipal = principal;

                var totalinteres ;

                totalinteres+=interes;

                console.log("total" + totalinteres);
                    
                    
                }
                 
        
        }
       
        
    })
});


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
                                 <input type="number" class="form-control form-control-sm" id="meses" value =  'dsd'  " placeholder=''>
                              </div>
                            </div>
                           <div class="row mb-3 mx-0">
                              <label for="colFormLabelSm" class="col-sm-3 col-form-label                      col-form-label-sm">Tasa de interés mensual:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number" class="form-control form-control-sm" id="interesMensual" placeholder="col-form-label-sm">
                              </div>
                           </div>
                           <div class="d-flex flex-row flex-nowrap mb-0 mb-4 mt-4 ">
                               <div class="row mx-3">   
                                 <button id="calcular" class="btn btn-outline-secondary  col-sm-12" type="button">Calcular</button>
                               </div> 
                               <div class="ms-5">
                                 <button  class="btn btn-outline-secondary ms-5 col-sm-10" type="button">Reset</button>
                               </div>
                           </div>
                           <div class="row mb-3 mx-0">
                              <label for="pagoMensual" class="col-sm-3 col-form-label                  col-form-label-sm">Pago mensual:
                              </label>
                              <div class="col-sm-3">
                                 <input type="number"  class="form-control form-control-sm" id="pagoMensual">
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
           <table class="table table-hover">
                <thead>
                    <tr>
                         <th scope="col">Parc</th>
                         <th scope="col">Amort</th>
                         <th scope="col">Interés</th>
                         <th scope="col">Pago</th>
                         <th scope="col">saldo</th>
                         <th scope="col">seguro desgravamen</th>
                         <th scope="col">Pago total</th>
                    </tr>
                </thead>
            </table>`
);


const tbody = $('<tbody></tbody>');
div.append(table);
table.append(tbody);












