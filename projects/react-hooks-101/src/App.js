import React,{useEffect,useState,useReducer} from 'react'

// reducerをimport
import reducer from '../src/reducers'

const App = props => {
  // const [state,setState] = useState(props)
  // const { name,price } = state
  const [state , dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // useEffect(()=>{
  //   console.log('useEffect')
  // })

  // useEffect(()=>{
  //   console.log('useEffect　2')
  // },[])

  // useEffect(()=>{
  //   console.log('useEffect　3')
  // },[name])

  const addEvent = e =>{
    e.preventDefault()
    dispatch({
        type:'CREATE_EVENT',
        title,
        body
      })
    setTitle('')
    setBody('')
  }

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div>
          <label>タイトル</label>
          <input value={title} onChange={e => setTitle(e.target.value)}/>
          <label>ボディー</label>
          <input value={body} onChange={e => setBody(e.target.value)}></input>
        </div>
      </form>
      <button onClick={addEvent}>イベントを作成する</button>
      <div>
        <h4>イベント一覧</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              state.map((event,index) => {
                const handleClickDeleteButon = () =>{
                  dispatch({type: 'DELETE_EVENT', id: event.id})
                }
              return (
                <tr key={index}>
                  <td>{event.id}</td>
                  <td>{event.title}</td>
                  <td>{event.body}</td>
                  <td><button type="button" className="btn-danger" onClick={handleClickDeleteButon}>削除</button></td>
              </tr>
              )}
              )
            }
          </tbody>
          
        </table>
      </div>
      {/* <p>
        現在の{name}は{state.price}です。
      </p> */}
      {/* <button onClick={()=>setState({...state,price:price + 100})}>+100</button>
      <button onClick={()=>setState({...state,price:price - 100})}>-100</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name}　onChange={e => setState({...state,name: e.target.value})}/> */}
    </>
  );
}

// App.defaultProps = {
//   name:'サンプル',
//   price:100
// }

export default App;
