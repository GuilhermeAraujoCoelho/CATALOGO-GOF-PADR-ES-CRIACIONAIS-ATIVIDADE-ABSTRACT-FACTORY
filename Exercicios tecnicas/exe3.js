class Elemento{
    constructor(nome){
        this.nome = nome
    }

    mostrar(){
        console.log(this.nome)
    }
}

class BotaoWindows extends Elemento{
    constructor(){
        super("Botao Windows")
    }
}

class JanelaWindows extends Elemento{
    constructor(){
        super("Janela Windows")
    }
}

class BotaoMac extends Elemento{
    constructor(){
        super("Botao Mac")
    }
}

class JanelaMac extends Elemento{
    constructor(){
        super("Janela Mac")
    }
}

class BotaoLinux extends Elemento{
    constructor(){
        super("Botao Linux")
    }
}

class JanelaLinux extends Elemento{
    constructor(){
        super("Janela Linux")
    }
}

class FabricaSistema{
    constructor(){
        this.lista = []
    }

    criarElemento(tipo){
        throw new Error("Metodo precisa ser implementado")
    }

    adicionar(tipo){
        const e = this.criarElemento(tipo)
        this.lista.push(e)
    }

    mostrar(){
        this.lista.forEach(e=>{
            e.mostrar()
        })
    }
}

class WindowsFactory extends FabricaSistema{
    criarElemento(tipo){
        if(tipo === "botao"){
            return new BotaoWindows()
        }

        if(tipo === "janela"){
            return new JanelaWindows()
        }
    }
}

class MacFactory extends FabricaSistema{
    criarElemento(tipo){
        if(tipo === "botao"){
            return new BotaoMac()
        }

        if(tipo === "janela"){
            return new JanelaMac()
        }
    }
}

class LinuxFactory extends FabricaSistema{
    criarElemento(tipo){
        if(tipo === "botao"){
            return new BotaoLinux()
        }

        if(tipo === "janela"){
            return new JanelaLinux()
        }
    }
}

const windows = new WindowsFactory()
const mac = new MacFactory()
const linux = new LinuxFactory()

windows.adicionar("botao")
windows.adicionar("janela")

mac.adicionar("botao")
mac.adicionar("janela")

linux.adicionar("botao")
linux.adicionar("janela")

console.log("Windows")
windows.mostrar()

console.log("Mac")
mac.mostrar()

console.log("Linux")
linux.mostrar()