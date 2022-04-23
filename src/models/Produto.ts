export class Produto {

    public uuid: string;
    public nome: string;
    public descricao: string;
    public preco: number;

    constructor(uuid: string, nome: string, preco: number, descricao: string) {
        this.uuid = uuid;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

}