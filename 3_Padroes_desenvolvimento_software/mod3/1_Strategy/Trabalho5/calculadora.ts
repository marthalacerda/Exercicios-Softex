import { CalculadoraStrategy } from "./Calculadora-Strategy";

export class Calculadora {
  private _num1: number;
  private _num2: number;
  private _operacao: CalculadoraStrategy;

  constructor (num1: number, num2: number, operacao: CalculadoraStrategy) {
    this._num1 = num1;
    this._num2 = num2;
    this._operacao = operacao;
  }

  resultado(): number {
    return this.operacao.execute(this.num1, this.num2);
  }

  get num1() {
    return this._num1;
  }
  get num2() {
    return this._num2;
  }
  get operacao() {
    return this._operacao;
  }
  set num1(num: number) {
    this._num1 = num;
  }
  set num2(num: number) {
    this._num1 = num;
  }
  set operacao(op: CalculadoraStrategy) {
    this._operacao = op;
  }
}