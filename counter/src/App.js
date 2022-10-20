import './index.scss';
import React from 'react' //чтобы отображались изменения вызываем хук у реакта

function App() {
 const [count, setCount] = React.useState(0); // в круглых скобках записываем число, которое будет изначально. 
 //В квадратных скобках записываем что нам нужно будет вытащить переменную count и функцию setCount (название можно придумать любое), которая будет менять эту переменную 

  // создаем функцию, при нажатии на которую, будет увеличиваться счетчик => вешаем эту функцию на книпку button plus
  const onClickPlus = () => {
    setCount(count + 1) // говорю setCount, ты берешь count  и увеличиваешь его на 1
  }

  const onClickMinus = () => {
    setCount(count - 1) // говорю setCount, ты берешь count  и уменьшить его на 1
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1> {/* передали переменную */}
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button> {/*При клике на эту кнопку, надо вызвать функцию onClickPlus*/}
      </div>
    </div>
  );
}

export default App;

