import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Preview from './components/Preview';

function App() {

  const[calculation,setCalculation] = useState("")
  const[prevCalc,setPrevCalc] = useState("")

  const entryHandler = (e) => {
    let element = e.target.value
    let tempCalc = calculation.toString()
    let tempPrev = prevCalc.toString()
    
    if(element === "/" || element === "*" || element === "+" || element === "-" ){

      if(tempPrev.slice(-1)==="."){
        tempCalc= calculation
      }
      tempPrev = element
    }else{

      if(calculation === ""){
         
       if(element==="."&&!prevCalc.toString().split("").includes(".")){
         tempPrev+="0"
       }
      }else{
        if(element==="." && (prevCalc==="/"||prevCalc==="*"|| prevCalc==="-" || prevCalc==="+" ||prevCalc==="")){
          tempPrev+="0" 
        }
      }
       
      if(element==="."&& prevCalc.toString().split("").includes(".")) return
      if(tempPrev === "/" || tempPrev === "*" || tempPrev === "+" || tempPrev === "-"||tempPrev.split("").includes("/")||tempPrev.split("").includes("*")||tempPrev.split("").includes("-")||tempPrev.split("").includes("+")){
       if(element==="."&&!prevCalc.toString().split("").includes(".")){
         tempPrev="0"+element
       }else{
         tempPrev=element
       }
        
      }else{
         tempPrev += element
      }
    }
    
    if(calculation === ""){
      if(element==="/" || element==="*" || element==="0" || element==="+" ) return
      if(element==="."){

          tempCalc+="0."
      }else{
          tempCalc = element
      }
    }else{

      if(element==="." && (prevCalc==="/"||prevCalc==="*"||prevCalc==="-" || prevCalc==="+" ||prevCalc==="")){
          tempCalc+="0" 
      }

     if(tempPrev.slice(-1)==="0" && (tempCalc.slice(-1)==="/" || tempCalc.slice(-1)==="*" || tempCalc.slice(-1)==="-" || tempCalc.slice(-1)==="+")) return
      
      if((element==="/" || element==="*" || element==="+")&&(tempCalc.slice(-1)==="/" || tempCalc.slice(-1)==="*" || tempCalc.slice(-1)==="-" || tempCalc.slice(-1)==="+")){

        let tempArr = [...tempCalc];
        let checkArr = tempArr.slice(-2)
        if(checkArr.length>1&&checkArr.includes("-")){
          tempArr.splice(tempArr.indexOf(checkArr[0]),2,element)
          tempCalc=tempArr
          setCalculation(tempCalc)
          return
        }
        tempArr.toString().split("")
        tempArr.pop()
        tempArr.push(element)
        tempArr.join("")
        tempCalc=tempArr
        setCalculation(tempCalc)
        setPrevCalc(tempPrev)
        return
      }
      if(element==="-" && tempCalc.slice(-1)==="-")return
      tempCalc += element
    }   

    if(tempCalc[0] ==="/"||tempCalc[0] ==="*"||tempCalc[0] ==="+"){
      let arr = [...tempCalc]
      arr.toString().split("")
      arr.shift()
      arr.join("")
      tempCalc=arr.toString()
    }
    setCalculation(tempCalc)
    setPrevCalc(tempPrev)
  }

  const initialize = () => {
    setCalculation("")
    setPrevCalc("")
  }

  const evaluateExpression = (fn) => {
    return new Function('return ' + fn)();
  }

  const evaluate = () => {
    let result = evaluateExpression(calculation)
    // this.setState({calculation:result.toString(),prevCalc: result})
    setCalculation(result.toString())
    setPrevCalc(result)
  }

  return (
    <div id="container">
      <div id="calculator">
        <Display prevCalc={prevCalc} />
        <Preview calculation={calculation}/>
        <Buttons handleEntry={entryHandler} clear={initialize} evaluate={evaluate} />
      </div>
    </div>
  );
}

export default App;
