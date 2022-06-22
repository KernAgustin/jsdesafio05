const formulario = document.getElementById("form");
const boton = document.getElementById("boton");
const seleccionar = document.querySelector('select');
const radio = document.querySelector('macetaRadio');
let cantMacetas = document.getElementById("cantMacetas"); 
const macetas = document.getElementById("macetas");

let maceta01 = document.getElementById('maceta01');
let maceta02 = document.getElementById('maceta02');
let maceta03 = document.getElementById('maceta03');
let alertaMaceta = document.getElementById('alertaMaceta');
let alertaMacetas = document.getElementById('alertaMacetas');

seleccionar.addEventListener('change', elegirMaceta);

function sumaMacetas(){
    listaMacetas1.push ()
}

function elegirMaceta() {
  let eleccion = seleccionar.value;

  if (eleccion === 'maceta01__Value') {

    maceta01.classList.remove("oculto");
    maceta02.classList.add("oculto"); 
    maceta03.classList.add("oculto");

  } else if (eleccion === 'maceta02__Value') {

    maceta01.classList.add("oculto");
    maceta02.classList.remove("oculto"); 
    maceta03.classList.add("oculto");
    


  } else if (eleccion === 'maceta03__Value') {

    maceta01.classList.add("oculto");
    maceta02.classList.add("oculto"); 
    maceta03.classList.remove("oculto");

  }
}

boton.addEventListener("click", calcularMacetas);

function calcularMacetas(){

    const listaMacetas = [];

    if( cantMacetas.value <= 0 ){
        alertaMacetas.classList.remove("oculto");
    }
    else{
        const maceta = document.querySelector('input[name="macetaRadio"]:checked') || 'maceta02Radio' || 'maceta03Radio';
        if(maceta.value == 'maceta01Radio') {
            for (i=1;i <=cantMacetas.value ;i++ ){
                const div = document.createElement("div");
                div.textContent = "Usted a comprado la maceta tipo 01 Valor: 10000$";
                div.classList.add("cartas");
                div.classList.add("card");  
                document.body.appendChild(div);

            }
            const div = document.createElement("div");
            div.textContent = "El pago total es: " + (cantMacetas.value * 10000) + "$" ;
            listaMacetas.push("Maceta 01", cantMacetas.value, 10000 );
            document.body.appendChild(div);
        }
        else if (maceta.value == 'maceta02Radio')
        {
            for (i=1;i <=cantMacetas.value ;i++ ){
                const div = document.createElement("div");
                div.textContent = "Usted a comprado la maceta tipo 02 Valor: 9000$";
                div.classList.add("card");
                div.classList.add("cartas"); 
                document.body.appendChild(div);
            }
            const div = document.createElement("div");
            div.textContent = "El pago total es: " + (9000 * cantMacetas.value) + "$" ;
            listaMacetas.push("Maceta 02", cantMacetas.value, 9000 );
            document.body.appendChild(div);
        }
        else if (maceta.value == 'maceta03Radio')
        {
            for (i=1;i <=cantMacetas.value ;i++ ){
                const div = document.createElement("div");
                div.textContent = "Usted a comprado la amceta tipo 03 Valor: 8500$";
                div.classList.add("card");
                div.classList.add("cartas"); 
                document.body.appendChild(div);
            }
            const div = document.createElement("div");
            div.textContent = "El pago total es: " + (8500 * cantMacetas.value) + "$" ;
            document.body.appendChild(div);
            listaMacetas.push("Maceta 03", cantMacetas.value, 8500 );
            document.body.appendChild(div);
        }
        else{
            alertaMaceta.classList.remove("oculto");
        }
    }
    boton.remove();
    console.log(listaMacetas);
}

