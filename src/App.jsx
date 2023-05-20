import { useState } from 'react'
import './App.css'
import { isNumber, isOperator } from './components/isType.jsx'
import {reset} from './components/resetFunction.jsx'
import { negative } from './components/negateResult'
import { sum,dif,div,mult,mod } from './components/operations'
import { deleteLast } from './components/delFunction'
function App() {

  const [Ans, setAns] = useState(0)
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [operator, setOperator] = useState('')
  const [building, setBuilding] = useState('')
  const [canChange, setCanChange] = useState (true)

  function addAns(){
    const input = document.getElementById("inputspan")
    if(operator == ""){
      setNumber1(Ans)
      setAns('')
    }else{
      setNumber2(Ans)
      setAns('')
    }
    if(input.childNodes.length <= 9){
      const anode = document.createTextNode('Ans')
      input.appendChild(anode)
    }
  }
  
  function addChar(char){
    const input = document.getElementById("inputspan")
    if(input != null){
      if(input.childNodes.length <= 9){
        if(isNumber(char)){
          if(operator == ""){
            if(building == "") setNumber1(number1 + char)
            else setBuilding(building + char)
          }
          else{
            if(building == "") setNumber2(number2 + char)
            else setBuilding(building + char)
          }
        }
        else if (char == "."){
          let temp = ''
          if(operator == "" && building == ""){
            temp = number1
          }
          else{
            temp = number2
          }
          temp += building + char
          setBuilding(temp)
          const val = document.createTextNode(char)
          input.appendChild(val)
        }
        else{
          if(building != ''){
            setNumber1(building)
            setBuilding('')
          }
          if(canChange){
            setOperator(char)
            setCanChange(false)
          }
        }
        if(Ans != 0 && isOperator(char) && number1 == ''){
          const reset = document.createTextNode("")
          input.replaceChildren(reset)
          const newans = document.createTextNode(Ans)
          input.appendChild(newans)
        }
        if(((!isNumber(char) && canChange) || (isNumber(char))) && char != "."){
          const val = document.createTextNode(char)
          input.appendChild(val)
        }
      }
    }
  }

  function calculate(){
    const num1 = parseFloat(number1)
    setNumber1('')
    let num2 = 0
    if(building != ''){
      num2 = parseFloat(building)
      setNumber2('')
      setBuilding('')
    }
    else{
      num2 = parseFloat(number2)
      setNumber2('')
    }
    
    let res = 0
    switch(operator){
      case '+':
        if(num1.toString() != 'NaN'){
          res = sum(num1,num2)
        }
        else{
          res = sum(parseFloat(Ans),num2)
        }
      break

      case '-':
        if(num1.toString() != 'NaN'){
          res = dif(num1,num2)
          
        }
        else{
          res = dif(parseFloat(Ans),num2)
        }
      break

      case 'x':
        if(num1.toString() != 'NaN'){
          res = mult(num1,num2)
        }
        else{
          res = mult(parseFloat(Ans),num2)
        }
      break

      case '/':
        if(num1.toString() != 'NaN'){
          res = div(num1,num2)
        }
        else{
          res = div(parseFloat(Ans),num2)
        }
      break

      case '%':
        if(num1.toString() != 'NaN'){
          res = mod(num1,num2)
          console.log(res)
        }
        else{
          res = mod(parseFloat(Ans),num2)
        }
    }
    setOperator('')
    setCanChange(true)
    setAns(res)
    const output = document.getElementById("outputspan")
    output.replaceChildren(res)
  }

  document.onkeydown = (event) =>{
    switch(event.key){
      case '1':
        addChar(1)
        break
      case '2':
        addChar(2)
        break
      case '3':
        addChar(3)
        break
      case '4':
        addChar(4)
        break
      case '5':
        addChar(5)
        break
      case '6':
        addChar(6)
        break
      case '7':
        addChar(7)
        break
      case '8':
        addChar(8)
        break
      case '9':
        addChar(9)
        break
      case '0':
        addChar(0)
        break
      case '+':
        addChar('+')
        break
      case '-':
        addChar('-')
        break
      case '/':
        addChar('/')
        break
      case '*':
        addChar('x')
        break
      case '.':
        addChar('.')
        break
      case 'Enter':
        calculate()
        break
        
    }
  }

  return (
    <>
      <div className='calcu' >
        <div className="pantalla1">
          <span id='inputspan'></span>
        </div>
        <div className="pantalla2">
          <span id='outputspan'>0</span>
        </div>
        <div className="botones">
          <div className="fila1">
            <button className='b7' onClick={() => addChar('7')}>7</button>
            <input className='b8' type='submit' value={8} onClick={() => addChar('8')}></input>
            <input className='b9' type='submit' value={9} onClick={() => addChar('9')}></input>
            <input className='del' type='submit' value={"DEL"} onClick={() =>{
              deleteLast()
              let newnum = ''
              if(operator == ''){
                for(let i = 0; i < number1.length - 1; i++){
                  newnum += number1.charAt(i)
                }
                setNumber1(newnum)
              }
              else{
                for(let i = 0; i < number2.length - 1; i++){
                  newnum += number2.charAt(i)
                }
                setNumber2(newnum)
              }
            }}></input>
            <input className='ac' type='submit' value={"AC"} onClick={() =>{
              setNumber1('') 
              setNumber2('')
              setOperator('')
              setBuilding('')
              setCanChange(true)
              reset()
            }}></input>
          </div>
          <div className="fila2">
            <input className='b4' type='submit' value={4} onClick={() => addChar('4')}></input>
            <input className='b5' type='submit' value={5} onClick={() => addChar('5')}></input>
            <input className='b6' type='submit' value={6} onClick={() => addChar('6')}></input>
            <input className='X' type='submit' value={"X"} onClick={() => addChar("x")}></input>
            <input className='➗' type='submit' value={"➗"} onClick={() => addChar("/")}></input>
          </div>
          <div className="fila3">
            <input className='b1' type='submit' value={1} onClick={() => addChar('1')}></input>
            <input className='b2' type='submit' value={2} onClick={() => addChar('2')}></input>
            <input className='b3' type='submit' value={3} onClick={() => addChar('3')}></input>
            <input className='mas' type='submit' value={"+"} onClick={() => addChar("+")}></input>
            <input className='--' type='submit' value={"-"} onClick={() => addChar("-")}></input>
          </div>
          <div className="fila4">
            <input className='b0' type='submit' value={0} onClick={() => addChar('0')}></input>
            <input className='dot' type='submit' value={"."} onClick={() => addChar(".")}></input>
            <input className='mm' type='submit' value={"+/-"} onClick={() =>{
              negative(Ans)
              setAns(Ans * -1)
            }}></input>
            <input className='ans' type='submit' value={"Ans"} onClick={addAns}></input>
            <input className='mod' type='submit' value={"%"} onClick={() => addChar("%")}></input>
          </div>
          <div className="fila5">
            <input className='eq' type='submit' value={"="} onClick={calculate}></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
