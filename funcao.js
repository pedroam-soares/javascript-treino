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
console.log('eu sou o melhor')

// função anonima (2º forma)

const saudacao = function(nome, idade){
   console.log(`olá tudo bem? Meu nome é ${nome} e tenho ${idade} anos`);
   return 100;
};
saudacao('Pedro', 20);

// arrow functions (3º forma)
const mensagemTenis = (marca) =>{
   console.log(`comprei um tenis da ${marca}`)
};
mensagemTenis('adidas')