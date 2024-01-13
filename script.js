// let name = prompt("Digite seu nome: ")

// let peso = prompt("Digite seu peso em quilos: ")

// let altura = prompt ("Digite sua altura em metros: ")

// let IMC = +peso / Number(altura**2)

// console.log(`Bem-vindo, ${name}. O cálculo do seu IMC é: ${IMC}. `);




let Por_Hora = prompt("Digite o valor da sua hora trabalhada: ")
let Horas_Trabalhadas = prompt("Digite as horas trabalhadas no mês: ")

let valor_bruto = +Por_Hora * +Horas_Trabalhadas

console.log(`Valor bruto doseu salário é: ${+valor_bruto}. `);

let INSS = valor_bruto * 0.08

console.log(`O valor pago ao INSS foi de: ${INSS}`);
