console.log("hello world!");
console.log(45);
console.log("hoje eu tenho 20 anos");
console.log(293092000220272);
console.log(true);
console.log(undefined);
console.log(null);
console.log(23.33);
console.log(false);

// tipos de dados primitivos

// texto- strings (aspas duplas, aspas simples e crase)
// string com aspas duplas
"isto é um texto , porque está dentro de aspas.";
// string com aspas simples
'isso também é um texto pois está em aspas simples.'
 // string com crase
 

// tipo números- numbers
// int (obs:não existe int ou float no js)
10;
234;
// float (obs:não existe int ou float no js)
1.45;
0.76;

// tipo boolean
true;
false;

// tipo undefined
undefined;

// tipo null
null;

// criando variáveis
// duas maneiras (let e const)
// boas práticas para variáveis -> escolha bons nomes, descritivos. se tiver apenas uma palavra que seja tudo minúsculo, pórem caso tenha mais de uma palavraa, o restante inicia com letra maiúscula (camel case)

let primeiroNome = "Pedro";
let segundoNome = "Soares";

const minhaIdade = 20;
console.log(primeiroNome)
console.log(minhaIdade)
primeiroNome= "Paulo",
console.log(primeiroNome)
let endereço= "Av. Leite Barbosa, 941 - Altos"
console.log(endereço)
const altura=87
console.log(altura)
console.log(primeiroNome)
primeiroNome= "rafaela"
console.log(primeiroNome)
console.log(minhaIdade)

// usando typeof ( mostra o tipo da linguagem)
console.log(typeof minhaIdade )
console.log(typeof primeiroNome)

// estrutura de dados

// array - listas []

let frutas= ['maçã', 'uva', 'banana', 'tangerina', 'melancia'];
let primeiraFruta= frutas[0]
let numeros= [2,3,45,67,87,35,13,0]
let primeiroNumero= numeros[0]
console.log(frutas[1], primeiroNome);
console.log(frutas[1],primeiroNome,  primeiroNumero,primeiraFruta, numeros[4])
let qualquerCoisa=[24, 'olá', undefined, false]
// objetos

let lapiseira ={
ponta: 0.7,
temBorracha: true,
marca: "compactor",
valor: 7.99,
cor:"azul"
}
console.log(lapiseira.marca)

let tenis = {
marca:"nike",
preco: 499.99,
cor: "branco",
tamanho: [
 {
 tamanho:36,
estoque1:10,
},
{tamanho: 37,
estoque:8
}
,38,39,40,41,42,43,44],
estoque: 10,
modelo: "Run 2025"
}
let tenisList = {
marca: {
    nike: {
        modelo: {
            jordan:{
                cor: {
                    preto:{ 
                        tamanho:{
                            38:{
                                estoque:35
                            },
                            39:{
                                estoque:24
                            }
                        }
                    },

                    branco: {
                        tamanho: {
                            numero:{
                                37:{
                                    estoques1: 10
                                },
                                38: {
                                    estoques2:8
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
}
console.log(tenisList.marca.nike.modelo.jordan.cor.preto.tamanho[39].estoque)