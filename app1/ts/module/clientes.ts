class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const c1 = new Cliente('Angelo', '05633987633', '2563250');
        const c2 = new Cliente('Adrielle', '58963312055', '2563298');
        const c3 = new Cliente('Renato', '05633987099', '2563136');
        this.clientes.push(c1, c2, c3);
    }
    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const contaARemover = this.pesquisar(cpf);
        if (contaARemover) {
            const indiceConta = this.clientes.indexOf(contaARemover);
            if (indiceConta > -1) {
                this.clientes.splice(indiceConta, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}