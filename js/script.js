


document.addEventListener("DOMContentLoaded", function(){
    itemMenu = document.querySelectorAll('.secao');
 });

 function scrollMenu (itemMenu) {
    itemMenu.scrollIntoView({block: "center"});
    funcaoMenus();
}


document.addEventListener("scroll", changeMenuCSS);

/*
// Função para colocar um objeto se movimentando no fundo. criar objeto com id objeto e css
document.addEventListener("scroll", Movendo);
function Movendo() {
    var posicaoTela = window.pageYOffset;
    var Objeto = document.getElementById("objeto");
    //var style = window.getComputedStyle(Objeto);
    //var posicaoObjeto = style.getPropertyValue('right');

    Objeto.style.right = (-1200) + posicaoTela * 1.2 + "px";

    console.log(posicaoObjeto + " - " + posicaoTela)
}
*/
function changeMenuCSS(){
    var itensMenu = document.querySelectorAll('.menu-superior li a');
    var menuSuperior = document.querySelectorAll('.menu-superior');
    var menu = document.querySelectorAll('.logo-site')[0];
    var links_borda = document.querySelectorAll(".link-menu-superior");
    var posicao = window.pageYOffset;
    var tituloH3 = document.querySelectorAll("h3");
    var links = document.querySelectorAll(".link-menu-superior a");
    var links_borda = document.querySelectorAll(".link-menu-superior");

    if (posicao < 60) { 
        itensMenu.forEach(menu => menu.classList.remove('link_menu_scroll'));
        menuSuperior.forEach(menu => menu.classList.remove('menu_superior_fixo'));
        menu.classList.remove('small-logo');
       // console.log("removeu")
        links_borda[0].classList.remove("borda-menu");
    }

    else {
        itensMenu.forEach(menu => menu.classList.add('link_menu_scroll'));
        menuSuperior.forEach(menu => menu.classList.add('menu_superior_fixo'));
        menu.classList.add('small-logo');
      //  console.log("adicionou")
       
    
        for (var i = 0; i < tituloH3.length; i++){
        // i máximo é 3 neste caso
            if (i+1 < tituloH3.length && posicao >= (tituloH3[i].offsetTop -60) && posicao < (tituloH3[i+1].offsetTop -60)) {
                links[i].classList.add("link-ativo");
                links_borda[i].classList.add("borda-menu");
              //  console.log('Adiciona classe link ativo condição 1');
            }
        
            else if(i+1 == tituloH3.length && posicao >= (tituloH3[tituloH3.length - 1].offsetTop)-60){
                links[tituloH3.length - 1].classList.add("link-ativo");
                links_borda[tituloH3.length - 1].classList.add("borda-menu");
             //   console.log('Adiciona classe link ativo  condição 2');
            }
        
            else {
                links[i].classList.remove("link-ativo");
                links_borda[i].classList.remove("borda-menu");
              //  console.log('Remove classe link ativo');
            }
        }
    }
}

function setMarginHeight () {
    var compensateHeight = document.querySelectorAll('nav')[0].offsetHeight;
    document.querySelectorAll('article')[0].style.marginTop = compensateHeight + "px";
}


function exibirMenu (){
    var displayMenu = document.getElementById("menu-ul");
    displayMenu.classList.remove('ocultar');
}

function clicarMenu (){
    var cliqueMenu = document.getElementById("botao-menu-responsivo");
    var overlay = document.getElementById("overlay");
    cliqueMenu.addEventListener("click", funcaoMenus);
    overlay.addEventListener("click", funcaoMenus);

}

function funcaoMenus(){
    var displayMenu = document.getElementById("menu-ul");
    var overlay = document.getElementById("overlay");
   // var compensateHeight = document.querySelectorAll('nav')[0].offsetHeight;
    var cliqueMenu = document.getElementById("botao-menu-responsivo");
    displayMenu.classList.toggle("exibir-menu");
    overlay.classList.toggle("exibir-overlay");
    cliqueMenu.classList.toggle("rotacionar");

    if (typeof(displayMenu) != 'undefined' ){
    //document.querySelectorAll('.exibir-menu')[0].style.top = compensateHeight + "px";
    }
  // console.log("clicou");
    };

    

document.addEventListener("scroll", setMarginHeight);
document.addEventListener("DOMContentLoaded", setMarginHeight);
document.addEventListener("DOMContentLoaded", clicarMenu);

// Inserir estados no select

var estados = ["", "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]

function inserirEstados (){
 
        for (var i = 0; i < estados.length; i++) {
            var estado = estados[i];
            //var linhaOption = document.createElement('option');
            var selectEstado = document.getElementById('uf');
            
            var linhaEstado = document.createElement('option');
            linhaEstado.value = estado;
            linhaEstado.innerHTML = estado;

            selectEstado.appendChild(linhaEstado);
            }
    
    }
    
    document.addEventListener("DOMContentLoaded", inserirEstados);
    

// Seleção de pessoa física ou jurídica


document.addEventListener("DOMContentLoaded", PessoaFisicaJuridica);


function PessoaFisicaJuridica (){

    var seletorPF = document.getElementById("pf");
    var seletorPJ = document.getElementById("pj");
    seletorPF.addEventListener("change", PessoaFisicaJuridica);
    seletorPJ.addEventListener("change", PessoaFisicaJuridica);
    var campoPF = document.querySelectorAll(".campo-pf");
    var campoPJ = document.querySelectorAll(".campo-pj");

    if(seletorPF.checked) {
        for (var i = 0; i < campoPJ.length; i++){
            campoPJ[i].classList.add("ocultar");
        }

        for (var j = 0; j < campoPF.length; j++){
            campoPF[j].classList.remove("ocultar")
        }
    }
    else {
        for (var i = 0; i < campoPJ.length; i++){
            campoPJ[i].classList.remove("ocultar");
        }

        for (var j = 0; j < campoPF.length; j++){
            campoPF[j].classList.add("ocultar")
        }
    }

}


// Validações de campos

// Chamada para as variáveis, funções e validação final no submit

document.addEventListener("DOMContentLoaded", function(){
    campos = document.querySelectorAll('.requerido');
    camposPJ = document.querySelectorAll('.requeridoPJ');
    camposCEP = document.querySelectorAll('.cep');
    camposEmail = document.querySelectorAll('.email');
    var seletorPF = document.getElementById("pf");
    camposCPF = document.querySelectorAll('.cpf');
    camposCNPJ = document.querySelectorAll('.cnpj');
    camposFones = document.querySelectorAll('.fone');
    document.getElementById('uf').addEventListener("change", validaEstado);
    document.getElementById('uf').addEventListener("focusout", validaEstado);

    for( let campoCEP of camposCEP) {
        campoCEP.addEventListener("focusout", function(){ validaCampoCEP(campoCEP); });
    }

    for( let campoEmail of camposEmail) {
        campoEmail.addEventListener("focusout", function(){ validaCampoEmail(campoEmail); });
    }
    
    if(seletorPF.checked) {
        for( let campoCPF of camposCPF) {
            campoCPF.addEventListener("focusout", function(){ validaCPF(campoCPF)});
    }
    }
    else {
        for( let campoCNPJ of camposCNPJ) {
            campoCNPJ.addEventListener("focusout", function(){ validaCNPJ(campoCNPJ)});
        }
        for ( let campoPJ of camposPJ) {
            campoPJ.addEventListener('focusout', function() { validaCampoPJ(campoPJ); })
        }
    }


    for(let campo of campos){
        campo.addEventListener("focusout", function() {validaCampoPadrao(campo); });

    }

    for(let campoFone of camposFones){
        campoFone.addEventListener("focusout", function() {validaCampoFone(campoFone);});
    }
    
    document.addEventListener("submit", function(evento){
        evento.preventDefault();
        validaTudo();
    })


})


// Validação para todos os campos de texto padrão

function validaCampoPadrao(elemento){
        if(elemento == "" || elemento.value.length < 3) {
            erroValidacaoPadrao(elemento);
            return false;
        }
        else{
            elemento.classList.remove('erro');
            document.querySelector('.mensagem').classList.remove('display');
            document.querySelector('.mensagem').innerHTML = "";
            return true;
        }
}

function validaCampoPJ(elemento){
    if(elemento == "" || elemento.value.length < 3) {
        erroValidacaoPadrao(elemento);
        return false;
    }
    else{
        elemento.classList.remove('erro');
        document.querySelector('.mensagem').classList.remove('display');
        document.querySelector('.mensagem').innerHTML = "";
        return true;
    }
}

function validaCampoEmail(elemento){
    if(elemento.value != "" && elemento.value.match(/^[A-z0-9]+\@[A-z0-9]+\.[a-z]+$/)){
        document.querySelector('.mensagem').innerHTML = "";
        elemento.classList.remove('erro');
        document.querySelector('.mensagem').classList.remove('display');
        document.querySelector('.mensagem').classList.remove('fade');
        return true;
    } 
    else {
        erroValidacaoPadrao(elemento);
        return false
    }
}

function validaCPF(elemento){
    // let numero = this.value.match(/[\d]{5}\-[\d]{3}/) ? this.value.replace(/-/, "") : this.value;
     elemento.value = elemento.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
 
     if(elemento.value != "" && elemento.value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)){
         document.querySelector('.mensagem').innerHTML = "";
         elemento.classList.remove('erro');
         elemento.parentNode.classList.remove('erro');
         return true;
     } else {
         erroValidacaoPadrao(elemento);
         return false;
     }

}

// Validação personalizada para o campo estado

function validaEstado(){
    if (document.getElementById('uf').value == "") {

        var alerta = "Selecione um Estado";
        var linhaAlerta = document.createElement('span');
        var conteudoAlerta = document.createTextNode(alerta);
        var completoAlerta = linhaAlerta.appendChild(conteudoAlerta);

        document.querySelector('.mensagem').appendChild(completoAlerta);
        document.querySelector('.mensagem').classList.add('display');
        document.getElementById('uf').classList.add('erro');

        var tempo =  3000;

        setTimeout(function() {
          document.querySelector('.mensagem').classList.add('fade');
        }, tempo);

        var tempo2 =  3500; 

        setTimeout(function() {
          document.querySelector('.mensagem').classList.remove('display');
          document.querySelector('.mensagem').classList.remove('fade');
          document.querySelector('.mensagem').innerHTML = "";
        }, tempo2);

        return false;
    }

    else{
        document.getElementById('uf').classList.remove('erro');
        document.querySelector('.mensagem').classList.remove('display');
        document.querySelector('.mensagem').innerHTML = "";
        return true;
    }
}

// Validação personalizada para o campo CEP, removendo o traço, conforme solicitado na aula

function validaCampoCEP(elemento){

    elemento.value = elemento.value.match(/[\d]{5}\-[\d]{3}/) ? elemento.value.replace(/-/, "") : elemento.value;

    if(elemento.value != "" && elemento.value.match(/[0-9]*/) && elemento.value >= 0 && elemento.value <= 99999999){
        document.querySelector('.mensagem').innerHTML = "";
        elemento.classList.remove('erro');
        elemento.parentNode.classList.remove('erro');
        return true;
    } else {
        erroValidacaoPadrao(elemento);
        return false;
    }
}

// Validação personalizada para o campo Fone, com ajuste da máscara para telefone fixo e celular

function validaCampoFone(elemento){

        if (elemento.value.length == 13) {
            elemento.value = elemento.value.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
            return true;
        }
        else if (elemento.value.length == 12) {
            elemento.value = elemento.value.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, '+$1 ($2) $3-$4');
            return true;
        }

        else if (elemento.value.length < 12) {
        var alerta = "Preencha o código de DDI e DDD";
        var conteudoAlerta = document.createTextNode(alerta);
        var linhaAlerta = document.createElement('span');
        linhaAlerta.appendChild(conteudoAlerta);
        document.querySelector('.mensagem').appendChild(linhaAlerta);
        document.querySelector('.mensagem').classList.add('display');
        elemento.classList.add('erro');

        var tempo =  3000; //3 segundos

        setTimeout(function() {
          document.querySelector('.mensagem').classList.add('fade');
        }, tempo);

        var tempo2 =  3500; //tempo de 500ms a mais do que o anterior para dar tempo de fazer o fade out e depois remover as classes

        setTimeout(function() {
          document.querySelector('.mensagem').classList.remove('display');
          document.querySelector('.mensagem').classList.remove('fade');
          document.querySelector('.mensagem').innerHTML = "";
        }, tempo2);
        return false;
    }

    else {

        if(elemento.value != "" && elemento.value.match(/^\+\d{2} \(\d{2}\) \d{5}\-\d{4}$/) || elemento.value.match(/^\+\d{2} \(\d{2}\) \d{4}\-\d{4}$/)){
            document.querySelector('.mensagem').innerHTML = "";
            elemento.classList.remove('erro');
            document.querySelector('.mensagem').classList.remove('display');
            document.querySelector('.mensagem').classList.remove('fade');
            return true;
        } 
        else {
            erroValidacaoPadrao(elemento);
            return false
        }
    }

}

// Validação personalizada para o campo CPF, com ajuste da máscara

function validaCPF(elemento){
       // let numero = this.value.match(/[\d]{5}\-[\d]{3}/) ? this.value.replace(/-/, "") : this.value;
        elemento.value = elemento.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
        if(elemento.value != "" && elemento.value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)){
            document.querySelector('.mensagem').innerHTML = "";
            elemento.classList.remove('erro');
            elemento.parentNode.classList.remove('erro');
            return true;
        } else {
            erroValidacaoPadrao(elemento);
            return false;
        }

}

function validaCNPJ(elemento){
     elemento.value = elemento.value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
 
     if(elemento.value != "" && elemento.value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)){
         document.querySelector('.mensagem').innerHTML = "";
         elemento.classList.remove('erro');
         elemento.parentNode.classList.remove('erro');
         return true;
     } else {
         erroValidacaoPadrao(elemento);
         return false;
     }

}

function validaOpcoesCheck(){
    var checkServicos = document.querySelectorAll('.check-servicos:checked');

    if(checkServicos.length >= 1){
        document.querySelector('.mensagem').innerHTML = "";
        return true;
    }

    else {
        var alerta = "Selecione ao menos um serviço para solicitar informações";
        var conteudoAlerta = document.createTextNode(alerta);
        var linhaAlerta = document.createElement('span');
        linhaAlerta.appendChild(conteudoAlerta);
        document.querySelector('.mensagem').appendChild(linhaAlerta);
        document.querySelector('.mensagem').classList.add('display');

        var tempo =  3000; //1 second

        setTimeout(function() {
          //your code to be executed after 1 second
          document.querySelector('.mensagem').classList.add('fade');
        }, tempo);

        var tempo2 =  3500; //1 second

        setTimeout(function() {
          //your code to be executed after 1 second
          document.querySelector('.mensagem').classList.remove('display');
          document.querySelector('.mensagem').classList.remove('fade');
          document.querySelector('.mensagem').innerHTML = "";
        }, tempo2);
        return false;
    }
}

// Resultado padrão de erro para os campos, com efeito de fade out após tempo determinado

function erroValidacaoPadrao(elemento){
    var elementoNome = elemento.name
        var alerta = "Verifique o preenchimento do campo " + elementoNome;
        var conteudoAlerta = document.createTextNode(alerta);
        var linhaAlerta = document.createElement('span');
        linhaAlerta.appendChild(conteudoAlerta);
        document.querySelector('.mensagem').appendChild(linhaAlerta);
        document.querySelector('.mensagem').classList.add('display');
        elemento.classList.add('erro');

        var tempo =  3000; //1 second

        setTimeout(function() {
          //your code to be executed after 1 second
          document.querySelector('.mensagem').classList.add('fade');
        }, tempo);

        var tempo2 =  3500; //1 second

        setTimeout(function() {
          //your code to be executed after 1 second
          document.querySelector('.mensagem').classList.remove('display');
          document.querySelector('.mensagem').classList.remove('fade');
          document.querySelector('.mensagem').innerHTML = "";
        }, tempo2);
}

function validaTudo(){
    campos = document.querySelectorAll('.requerido');
    camposCEP = document.querySelectorAll('.cep');
    camposEmail = document.querySelectorAll('.email');
    var seletorPF = document.getElementById("pf");
    camposCPF = document.querySelectorAll('.cpf');
    camposCNPJ = document.querySelectorAll('.cnpj');
    camposPJ = document.querySelectorAll('.requeridoPJ');
    camposFones = document.querySelectorAll('.fone');
    document.getElementById('uf').addEventListener("change", validaEstado);
    document.getElementById('uf').addEventListener("focusout", validaEstado);

    
    for(let campo of campos) {
        camposPadraoValidos = validaCampoPadrao(campo);
    }

    for( let campoCEP of camposCEP) {
        camposCEPValidos = validaCampoCEP(campoCEP);
    }
    if(seletorPF.checked) {
        for( let campoCPF of camposCPF) {
            camposCPFValidos =  validaCPF(campoCPF);
        }
    }
    else{
        for( let campoCNPJ of camposCNPJ) {
            camposCNPJValidos =  validaCNPJ(campoCNPJ);
        }

        for ( let campoPJ of camposPJ) {
            camposPJValidos = validaCampoPJ(campoPJ);
        }
    }
    for(let campoFone of camposFones){
        camposFoneValidos =  validaCampoFone(campoFone);
    }

    for(let campoEmail of camposEmail){
        camposEmailValidos =  validaCampoEmail(campoEmail);
    }

    camposCheckValido = validaOpcoesCheck();

    campoEstadoValido = validaEstado();
 
     if(camposPadraoValidos && camposCEPValidos && camposCPFValidos && camposFoneValidos && camposEmailValidos && campoEstadoValido && camposCheckValido == true){
            document.querySelector('.resultado').innerHTML = "Formulário pronto para ser enviado!";
            document.querySelector('.resultado').classList.add('ok');
            document.querySelector('.resultado').classList.remove('problema');
        }
        else{
            document.querySelector('.resultado').innerHTML = "Revise os campos com problema.";
            document.querySelector('.resultado').classList.add('problema');
            document.querySelector('.resultado').classList.remove('ok');
        }
    }