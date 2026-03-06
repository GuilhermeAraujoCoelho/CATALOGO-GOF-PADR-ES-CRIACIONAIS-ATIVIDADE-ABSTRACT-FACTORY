class Pagamento{
    constructor(nome){
        this.nome = nome
    }

    mostrar(){
        console.log(this.nome)
    }
}

class CartaoA extends Pagamento{
    constructor(){
        super("Cartao Credito Banco A")
    }
}

class BoletoA extends Pagamento{
    constructor(){
        super("Boleto Banco A")
    }
}

class CartaoB extends Pagamento{
    constructor(){
        super("Cartao Credito Banco B")
    }
}

class BoletoB extends Pagamento{
    constructor(){
        super("Boleto Banco B")
    }
}

class FabricaBanco{
    constructor(){
        this.lista = []
    }

    criarPagamento(tipo){
        throw new Error("Metodo precisa ser implementado")
    }

    adicionar(tipo){
        const p = this.criarPagamento(tipo)
        this.lista.push(p)
    }

    mostrar(){
        this.lista.forEach(p=>{
            p.mostrar()
        })
    }
}

class BancoA extends FabricaBanco{
    criarPagamento(tipo){
        if(tipo === "cartao"){
            return new CartaoA()
        }

        if(tipo === "boleto"){
            return new BoletoA()
        }
    }
}

class BancoB extends FabricaBanco{
    criarPagamento(tipo){
        if(tipo === "cartao"){
            return new CartaoB()
        }

        if(tipo === "boleto"){
            return new BoletoB()
        }
    }
}

const bancoA = new BancoA()
const bancoB = new BancoB()

bancoA.adicionar("cartao")
bancoA.adicionar("boleto")

bancoB.adicionar("cartao")
bancoB.adicionar("boleto")

console.log("Banco A")
bancoA.mostrar()

console.log("Banco B")
bancoB.mostrar()