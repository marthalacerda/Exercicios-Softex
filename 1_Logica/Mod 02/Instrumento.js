class Instrumento {

    // construtor
    constructor (id, tipo, descricao, dataAquisicao, disponibilidadeDeUso, localizacao) {
        this.id = id
        this.tipo = tipo
        this.descricao = descricao
        this.dataAquisicao = dataAquisicao
        this.disponibilidadeDeUso = disponibilidadeDeUso
        this.localizacao = localizacao

    }

    // getters
    get idInstrumento() {
        return this.id
    }
    get tipoInstrumento() {
        return this.tipo
    }
    get descricaoInstrumento() {
        return this.descricao
    }
    get dataAquisicaoInstrumento() {
        return this.dataAquisicao
    }
    get disponibilidadeDeUsoInstrumento() {
        return this.disponibilidadeDeUso
    }
    get localizacaoInstrumento() {
        return this.localizacao
    }

    // setters
    set idInstrumento(id) {
        this.id = id
    }
    set tipoInstrumento(tipo) {
        this.tipo = tipo
    }
    set descricaoInstrumento(descricao) {
        this.descricao = descricao
    }
    set dataAquisicaoInstrumento(dataAquisicao) {
        this.dataAquisicao = dataAquisicao
    }
    set disponibilidadeDeUsoInstrumento(disponibilidadeDeUso) {
        this.disponibilidadeDeUso = disponibilidadeDeUso
    }
    set localizacaoInstrumento(localizacao) {
        this.localizacao = localizacao
    }

}


// CRUD

// criar e add na tabela
function criarInstrumento(id, tipo, descricao, dataAquisicao, disponibilidadeDeUso, localizacao) {
    let criadoComSucesso = false
    // essa função vai criar o objeto com os parametros passados
    let i = new Instrumento(id, tipo, descricao, dataAquisicao, disponibilidadeDeUso, localizacao)

    // e também vai adicionar o objeto na tabela do banco de dados
    try {
        // tenta add na tabela

        // se conseguir:
        criadoComSucesso = true
    } catch (error) {
        
    }
    return criadoComSucesso
}

let i1 = new Instrumento(1, 'Agogo', 'Preto, grande', Date.UTC(2023,1,12), 'pronto para uso', 'na escola')

console.log(i1.tipo)






