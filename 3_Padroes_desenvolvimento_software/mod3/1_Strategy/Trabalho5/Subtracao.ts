import { CalculadoraStrategy } from "./Calculadora-Strategy";

export class Subtracao implements CalculadoraStrategy {
  execute(num1: number, num2: number): number {
    return num1 - num2;
  }
}