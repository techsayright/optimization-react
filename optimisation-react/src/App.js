import './App.css';
import HeaderTitle from './components/HeaderTitle';
import FooterTitle from './components/FooterTitle';
import { useCallback, useMemo, useReducer, useState } from 'react';
import Show from './components/Show';

const initVal ={
  inVal: 0,
  dcVal :1000
}

const valReducer = (state , action)=>{
  switch(action.type){
    case "INCREMENT":
      return {...state ,inVal: state.inVal+1};
    case "DECREMENT":
      return {...state , dcVal: state.dcVal-1};
    default:
      return initVal;
      
  }
}

function App() {
  console.log("App");

  const [val , dispatchVal] = useReducer(valReducer , initVal)

  const [isShow ,setIsShow] = useState(true)

  const toggle =useCallback(()=>{
      setIsShow((preVal)=> !preVal)
  },[])

  return (
    <div className="App">
      <HeaderTitle/> <br />
      <div>
            <h3>{val.inVal}</h3>
            <button onClick={()=>{dispatchVal({type: "INCREMENT"})}}>Increment</button> <br /><br />

            <h3>{val.dcVal}</h3>
            <button onClick={()=>{dispatchVal({type: "DECREMENT"})}}>Decrement</button>
      </div> <br />
      <Show toggle={toggle} isShow={isShow}/>
      <FooterTitle array ={useMemo(()=>[2,4,5],[])}/>
    </div>
  );
}

export default App;
