class Robo{
    constructor(nome){
        this.nome = nome
    }

    mostrar(){
        console.log(this.nome)
    }
}

class MontadorAuto extends Robo{
    constructor(){
        super("Montador de carros")
    }
}

class InspetorAuto extends Robo{
    constructor(){
        super("Inspetor de pecas automotivas")
    }
}

class MontadorEletronico extends Robo{
    constructor(){
        super("Montador de circuitos")
    }
}

class InspetorEletronico extends Robo{
    constructor(){
        super("Inspetor de chips")
    }
}

class FabricaRobos{
    constructor(){
        this.lista = []
    }

    criarRobo(tipo){
        throw new Error("Metodo precisa ser implementado")
    }

    adicionar(tipo){
        const r = this.criarRobo(tipo)
        this.lista.push(r)
    }

    mostrar(){
        this.lista.forEach(r=>{
            r.mostrar()
        })
    }
}

class FabricaAutomotiva extends FabricaRobos{
    criarRobo(tipo){
        if(tipo === "montador"){
            return new MontadorAuto()
        }

        if(tipo === "inspetor"){
            return new InspetorAuto()
        }
    }
}

class FabricaEletronicos extends FabricaRobos{
    criarRobo(tipo){
        if(tipo === "montador"){
            return new MontadorEletronico()
        }

        if(tipo === "inspetor"){
            return new InspetorEletronico()
        }
    }
}

const automotiva = new FabricaAutomotiva()
const eletronicos = new FabricaEletronicos()

automotiva.adicionar("montador")
automotiva.adicionar("inspetor")

eletronicos.adicionar("montador")
eletronicos.adicionar("inspetor")

console.log("Linha Automotiva")
automotiva.mostrar()

console.log("Linha Eletronicos")
eletronicos.mostrar()