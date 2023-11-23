export class SistemaSeguranca {

    //atributos
    private static instance: SistemaSeguranca;
    private senhaBaseSecreta: string;

    //construtor
    private constructor(senhaCriada: string) {
        this.senhaBaseSecreta = senhaCriada;
    }

    //singleton
    public static getInstance(senhaCriada: string): SistemaSeguranca {
        if (this.instance == null) {
            this.instance = new SistemaSeguranca(senhaCriada);
        }
        return this.instance;
    }
    public mostrarSenha(): void {
        console.log(`> Mostrar senha da base: ${this.senhaBaseSecreta}`);
    }

    //metodos
    public acessarBaseSecreta(senhaInserida: string): void {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log(`A senha digitada foi ${senhaInserida}. Acesso PERMITIDO.`);
        } else {
            console.log(`A senha digitada foi ${senhaInserida}. Acesso NEGADO. (a senha correta é ${this.senhaBaseSecreta})`);
        }
    }

}