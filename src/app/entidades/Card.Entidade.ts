export class Card{
    Titulo: string;
    SubTitulo: string;
    Imagem: string;
    Descricao: string;
    constructor(titulo: string, Subtitulo: string, urlImagem: string, descricao: string ){
        this.Titulo = titulo;
        this.SubTitulo = Subtitulo;
        this.Imagem = urlImagem;
        this.Descricao = descricao;
    }
}