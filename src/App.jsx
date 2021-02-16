//importacion
import React from 'react'
import Button from './Components/Button'
import MathOperations from './Components/MathOperations'
import Result from './Components/Result'

import './App.css'

// generacion de la funcion
//funcion flecha o arrow function
// como buena practica el nombre de la funcion se define como el nombre del archivo
const App = () => {

        const clickHandlerFunction = text => {
                console.log ("Button.clickHandler", text)
        }
        //lo que ejecuta la funcion
        console.log ("Renderizacion de la App Calc")
        return  (
                <main className='react-calculator'>
                <Result value={"1"} />
                <div className="numbers">
                    <Button type="-" text={"1"} clickHandler={clickHandlerFunction}/>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                </div>
                <div className="functions">
                    <button>
                        clear
                    </button>
                    <button>
                        r
                    </button>
                </div>
                <MathOperations 
                   onClickOperation={operation => 
                      console.log("Operation:", operation)
                  } 
                   onClickEqual={equal => 
                       console.log("Equal:", equal)
                  }
                />
                </main>)
}

// exportacion
export default App