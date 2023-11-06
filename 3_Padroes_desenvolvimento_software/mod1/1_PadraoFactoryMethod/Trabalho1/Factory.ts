import { PcFactory } from "./PcFactory";
import { ServerFactory } from "./ServerFactory";

// Factory Method
class Factory {
    static criarComputador(ram: number, hdd: number, cpu: number, type: string) {
        try {
            if (type === "pc") {
                return new PcFactory(ram, hdd, cpu, type);
            } else if (type === "server") {
                return new ServerFactory(ram, hdd, cpu, type);
            } else {
                throw new Error('Tipo de computador invalido!')
            }
        } catch (e) {
            console.log('ERRO:', e.message);
            return null;
        }
    }
}
export {Factory};