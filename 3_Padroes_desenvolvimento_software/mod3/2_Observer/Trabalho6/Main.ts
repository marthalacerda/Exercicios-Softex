import readline from 'readline-sync';

// interface Observable
export interface Editor { // interface observable?
  insertLine(lineNumber: number, text: string): void;
  removeLine(lineNumber: number): void;
}

// Observable
export class TextEditor implements Editor {
  private linhasDeTexto: string[] = [];    // na questão não temos o suficiente para montar as classes Observable e Observers. Não temos a notificação definida.
  
  insertLine(lineNumber: number, text: string): void {
    this.linhasDeTexto.splice(lineNumber-1, 0, text);
  }

  removeLine(lineNumber: number): void {
    this.linhasDeTexto.splice(lineNumber-1, 1);
  } 

  open() {
    // receber linhas de texto
    do {
      let linha = readline.question('Digite texto (EOF para sair): ');
      if (linha !== 'EOF') {
        let numeroLinha = readline.questionInt('Digite numero da linha: ');
        this.insertLine(numeroLinha, linha);
      } else {
        break;
      }
    } while (true);
  }

  save() {
    // conteúdo 'salvo' e imprimir na tela
    const arquivoConfigurado: ArquivoConfigurado = new ArquivoConfigurado(this.linhasDeTexto);
    console.log('\n___Arquivo Configurado___\n');
    arquivoConfigurado.linhasDoTexto.forEach(linha => console.log(linha));
    
  }
}

// Classe auxiliar
export class ArquivoConfigurado {
  private _linhasDoTexto: string[] =[];
  constructor(texto: string[]) {
    this._linhasDoTexto = texto;
  }
  get linhasDoTexto() {
    return this._linhasDoTexto;
  }
}

// Programa
const textEditor: TextEditor = new TextEditor();
textEditor.open();
textEditor.save();

