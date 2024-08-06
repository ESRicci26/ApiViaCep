let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

//cep.value = '01001000';

cep.addEventListener('blur', function(e) {
let cep = e.target.value;
let script = document.createElement('script');
script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
document.body.appendChild(script);
});

function popularForm(resposta) {

if("erro" in resposta) {
alert('CEP Não Encontrado!!!');
return;
}

console.log(resposta);
rua.value = resposta.logradouro;
bairro.value = resposta.bairro;
cidade.value = resposta.localidade;
estado.value = resposta.uf;

}

function SomenteNumero(e){
    document.getElementById("idh2cep").style.backgroundColor = "red";
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
      if (tecla==8 || tecla==0) return true;
  else  
  alert ( "Caralho! Você já viu CEP que aceita letras? Jumento!! Este campo aceita apenas números, no caso do Brasil, 08 caracteres.");
  return false;
    }
  }
  