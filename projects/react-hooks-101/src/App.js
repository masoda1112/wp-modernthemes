import React,{useEffect,useState} from 'react'

const App = props => {
  const [state,setState] = useState(props)
  const { name,price } = state


  useEffect(()=>{
    console.log('useEffect')
  })

  useEffect(()=>{
    console.log('useEffect　2')
  },[])

  useEffect(()=>{
    console.log('useEffect　3')
  },[name])

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
