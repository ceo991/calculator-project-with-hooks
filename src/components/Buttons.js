import React from 'react'

function Buttons({clear, handleEntry, evaluate}) {
  return (
    <div id="buttons">
    <button id="clear" value="AC" onClick={clear}>AC</button>
    <button id="divide" value="/"  onClick={handleEntry} >/</button>
    <button id="multiply" value="*"  onClick={handleEntry}>X</button>
    <button id="subtract" value="-"  onClick={handleEntry}>-</button>
    <button id="add" value="+"  onClick={handleEntry}>+</button>
    <button id="zero" value="0"  onClick={handleEntry}>0</button>
    <button id="one" value="1"  onClick={handleEntry}>1</button>
    <button id="two" value="2"  onClick={handleEntry}>2</button>
    <button id="three" value="3"  onClick={handleEntry}>3</button>
    <button id="four" value="4"  onClick={handleEntry}>4</button>
    <button id="five" value="5"  onClick={handleEntry}>5</button>
    <button id="six" value="6"  onClick={handleEntry}>6</button>
    <button id="seven" value="7"  onClick={handleEntry}>7</button>
    <button id="eight" value="8"  onClick={handleEntry}>8</button>
    <button id="nine" value="9"  onClick={handleEntry}>9</button>
    <button id="equals" value="="  onClick={evaluate}>=</button>
    <button id="decimal" value="."  onClick={handleEntry}>.</button>
  </div>
  )
}

export default Buttons