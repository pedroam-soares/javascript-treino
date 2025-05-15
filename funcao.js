// criando a função - função nomeada (1º forma)
function nomeDaFuncao(){
    // o código da função
}
function apresentacao(nome) {
 console.log(`olá meu nome é ${nome}`)
    
}
// a partir dos paramtreos consigo criar váriaveis

apresentacao("pedro");
apresentacao("roberto");
apresentacao("rodrigo");
apresentacao("soares");
apresentacao("matheus");
 let nomes=["pedro", 'paulo', 'marta']
 function apresentacao2(){
    console.log(nomes[2])
 }
console.log("pedro");
apresentacao("thais")
console.error()
console.info()

function somar(numero1, numero2){
    const resultado = numero1 + numero2;
 return resultado;
}
const resultFuncaoSomar= somar(100, 100)
console.log(resultFuncaoSomar)
   somar(24, 37);
   somar(362, 763);
   const minhaCompra= somar(499.99, 478.79)

   function subtrair(numero1, numero2){
    const resultadoSub = numero1 - numero2;
    return resultadoSub
   };
   const resultadoFuncaoSubtrair = subtrair(435, 253);
   console.log(resultadoFuncaoSubtrair);

   function dividir(numero1, numero2){
    const resultadoDivisao = numero1 / numero2;
    return resultadoDivisao
   };
   const resultadoFuncaoDivisao = dividir(150, 3)
   console.log(resultadoFuncaoDivisao)

   function multiplicar(numero1, numero2){
    const resultadoMultiplicacao = numero1 * numero2;
   return resultadoMultiplicacao
   }
   const resultadoFuncaoMultiplicacao = multiplicar(47,582)
   console.log(resultadoFuncaoMultiplicacao)
