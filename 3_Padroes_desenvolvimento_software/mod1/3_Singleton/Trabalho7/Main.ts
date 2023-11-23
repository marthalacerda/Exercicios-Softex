import { SistemaSeguranca } from "./SistemaSeguranca";

// programa principal
console.clear();
//construir a base principal
const base = SistemaSeguranca.getInstance("senha_base");

//agente secreto acessando base secreta:
console.log('\nEntrando na BASE com a senha correta:');
base.acessarBaseSecreta("senha_base");
console.log('\nEntrando na BASE com a senha errada:');
base.acessarBaseSecreta("senha_errada");

//tentar construir outra base
const outraBasePrincipal = SistemaSeguranca.getInstance("senha_outra_base");

//agente tentando acessar a outra base:
console.log('\nEntrando na OUTRA BASE com a senha passada na criação:');
outraBasePrincipal.acessarBaseSecreta("senha_outra_base");
console.log('\nEntrando na OUTRA BASE com a senha da primeira base criada:');
outraBasePrincipal.acessarBaseSecreta("senha_base");


console.log('\nOUTRA BASE permite acesso com a senha da primeira base criada.');
console.log('Então a base implementou o padrão singleton.');