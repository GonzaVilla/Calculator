


export class Calculator {
    constructor(valorActual, display) {
        this.display = display
        this.valorActual = valorActual
        this.ultimoValor = null
        this.operador = ["+","-","*","/","="]
        this.numero = ["0","1","2","3","4","5","6","7","8","9"]
       
    }

    actulizarDisplay() {
        this.display.value = this.valorActual
    }
    agregar(valor) {
        if(this.operador.includes(valor)) {
            if(this.numero.includes(this.ultimoValor)) {
                this.ultimoValor = valor
                this.valorActual += valor
                this.actulizarDisplay()
            } 
        } else {
            this.ultimoValor = valor;
            this.valorActual += this.ultimoValor
            this.actulizarDisplay()
        }
    }
    borrarAnterior(){
        if(!this.valorActual) {
            return console.log("no hay nada q borrar")
        } else {
            this.valorActual = this.valorActual.split('')
            this.valorActual.pop()
            this.valorActual = this.valorActual.join("")
            this.actulizarDisplay()
             
        }
        
    }
    borrarTodo() {
        if(!this.valorActual) {
            return console.log("no hay nada q borrar")
        } else {
            this.valorActual = ""
            this.actulizarDisplay()
        }
    }
}
