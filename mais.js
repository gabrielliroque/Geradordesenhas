</section>
<script src=”main.js”></script>
document.querySelector(‘.parametro-senha__botao’);

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

console.log(botoes);
// código omitido
const campoSenha = document.querySelector(‘#campo-senha’);
const letrasMaiusculas = ‘ABCDEFGHIJKLMNOPQRSTUVXYWZ’;
const letrasMinusculas = ‘abcdefghijklmnopqrstuvxywz’;
const numeros = ‘0123456789’;
const simbolos = ‘!@%*?’;

geraSenha()
function geraSenha(){
    let alfabeto = ‘’;
if (checkbox[0].checked){
alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked){
alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
alfabeto = alfabeto + simbolos;
}
console.log(alfabeto);
let senha = ‘’;
for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio]; 
    console.log(letrasMaiusculas[numeroAleatorio]);
}
campoSenha.value = senha;
classificaSenha (classificacao); {
}
function classificaSenha (tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(alfabeto.length);
    if (entropia > 57){
        forcaSenha.classList.remove(‘fraca’,’media’,’forte’);
    if (tamanhoSenha > 11){
           forcaSenha.classList.add(‘forte’)
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12){
           forcaSenha.classList.add(‘media’);
    } else if (entropia <= 5){
           forcaSenha.classList.add(‘fraca’);

}
valorEntropia.textContent = “Um computador pode levar até “ +
Math.floor(2**entropia/(100e6*60*60*24)) + “ dias para descobrir
essa senha.”;

    }
    console.log(entropia);
}

campoSenha.value = letrasMaiusculas;
const checkbox = document.querySelectorAll(‘.checkbox’);
console.log(checkbox);
console.log(checkbox[0].checked);
}


function diminuiTamanho(){
    if (tamanhoSenha > 1){
      //  tamanhoSenha = tamanhoSenha - 1;
      tamanhoSenha--;
    }

numeroSenha.textContent = tamanhoSenha;
geraSenha();
    }
function aumentaTamanho(){
    if (tamanhoSenha < 20){
      // tamanhoSenha = tamanhoSenha+1;
      tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
let numeroAleatorio = Math.random()*letrasMaiusculas length;

numeroAleatorio = Math.floor(numeroAleatorio);
senha = senha + letrasMaiusculas[numeroAleatorio];
console.log(letrasMaiusculas[numeroAleatorio]);
 }
}
campoSenha.value = letrasMaiusculas;
}



</body>
</html>
