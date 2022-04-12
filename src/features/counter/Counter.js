import React,{useState} from 'react'
import {useSelector,  useDispatch} from 'react-redux';
import { increment,decrement,reset, incrementbyamount } from './counterSlice';

function Counter() {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();
    const [amount, setAmount] = useState(0)
    const addValue=Number(amount)|| 0;

    const resetAll =()=>{
        setAmount(0)
        dispatch(reset())
    }
    
  return ( <>
    <div>{count}</div>
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <div>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
        <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <button onClick={()=>dispatch(incrementbyamount(addValue))}>Add</button>
        <button onClick={resetAll}>Reset All</button>
       
        
    </div>
    </>
  )
}

export default Counter