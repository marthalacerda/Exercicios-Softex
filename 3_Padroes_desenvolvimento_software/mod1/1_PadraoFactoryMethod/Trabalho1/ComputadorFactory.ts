// interface ComputadorFactory - métodos abstratos
interface ComputadorFactory {
    getRam(): number;
    getHdd(): number;
    getCpu(): number;
    getType(): string;
    toString(): string;
}
export {ComputadorFactory};