import React,{useState} from 'react'

const App = props => {
  const [state,setState] = useState(props)
  const { name,price } = state
  return (
    <>
      <p>
        現在の{name}は{state.price}です。
      </p>
      <button onClick={()=>setState({...state,price:price + 100})}>+100</button>
      <button onClick={()=>setState({...state,price:price - 100})}>-100</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name}　onChange={e => setState({...state,name: e.target.value})}/>

    </>
  );
}

App.defaultProps = {
  name:'サンプル',
  price:100
}

export default App;
