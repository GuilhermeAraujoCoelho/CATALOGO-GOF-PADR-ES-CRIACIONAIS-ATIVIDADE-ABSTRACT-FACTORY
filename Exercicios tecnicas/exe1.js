class Veiculo{
    constructor(nome){
        this.nome = nome
    }

    mostrar(){
        console.log(this.nome)
    }
}

class Carro extends Veiculo{
    constructor(){
        super("Carro")
    }
}

class Onibus extends Veiculo{
    constructor(){
        super("Onibus")
    }
}

class Helicoptero extends Veiculo{
    constructor(){
        super("Helicoptero")
    }
}

class Aviao extends Veiculo{
    constructor(){
        super("Aviao")
    }
}

class FabricaTransporte{
    constructor(){
        this.lista = []
    }

    criarVeiculo(tipo){
        throw new Error("Metodo precisa ser implementado")
    }

    adicionar(tipo){
        const v = this.criarVeiculo(tipo)
        this.lista.push(v)
    }

    mostrar(){
        this.lista.forEach(v=>{
            v.mostrar()
        })
    }
}

class FabricaTerrestre extends FabricaTransporte{
    criarVeiculo(tipo){
        if(tipo === "carro"){
            return new Carro()
        }

        if(tipo === "onibus"){
            return new Onibus()
        }
    }
}

class FabricaAerea extends FabricaTransporte{
    criarVeiculo(tipo){
        if(tipo === "helicoptero"){
            return new Helicoptero()
        }

        if(tipo === "aviao"){
            return new Aviao()
        }
    }
}

const terrestre = new FabricaTerrestre()
const aereo = new FabricaAerea()

terrestre.adicionar("carro")
terrestre.adicionar("onibus")

aereo.adicionar("helicoptero")
aereo.adicionar("aviao")

console.log("Terrestre")
terrestre.mostrar()

console.log("Aereo")
aereo.mostrar()