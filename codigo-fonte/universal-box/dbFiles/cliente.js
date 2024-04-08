class Cliente {
    constructor(ClienteId, ClienteNome, ClienteCpf, ClienteTelefone, ClienteCep) {
        this.ClienteId = ClienteId;
        this.ClienteNome = ClienteNome;
        this.ClienteCpf = ClienteCpf;
        this.ClienteTelefone = ClienteTelefone;
        this.ClienteCep = ClienteCep;
    }
}

module.exports = Cliente;