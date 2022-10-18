import { Calculator } from "./Calculator.js";

const form = document.getElementById("Calculator"),
    display1 = document.getElementById("display"),
    btns = document.querySelectorAll(".btn");






const calculator1 = new Calculator("", display1)
console.log(calculator1.display)

btns.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        let key = btn.value
        switch(key){
            case "C":
                calculator1.borrarTodo()
                break;
            case "←":
                calculator1.borrarAnterior()
                break;
                            
            default:
                calculator1.agregar(key)
        }
                            
    })
});
                    
                    
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let resultado = eval(calculator1.valorActual)
    calculator1.borrarTodo()
    calculator1.agregar(resultado)
                        
    });           
                    
                    