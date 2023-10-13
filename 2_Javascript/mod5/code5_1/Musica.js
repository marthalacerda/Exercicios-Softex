class Musica {

    // construtor
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
        this.reproducoes = 0;
        this.avaliacao = null;
    }

    // metodos
    reproduzir() {
        this.reproducoes++;
        console.log('- Reproduzindo a musica...')
    }
    avaliarDe0a5(avaliacao) {
        this.avaliacao = avaliacao;
        console.log('- Avaliando a musica...')
    }
    pausar() {
        console.log('- Musica em pausa...');
    }
}
export {Musica};