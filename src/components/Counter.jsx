import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
         
    <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
    
      <div className="gap-12 py-3 bg-white flex justify-center rounded-sm text-[25px] text-[#344151]">
      
        <button onClick={() => dispatch(decrement())} className='text-5xl w-20 text-center border-r-2 border-[#bfbfbf]'> - </button>

        <div className='text-5xl gap-12 font-bold'> {count} </div>

        <button onClick={() => dispatch(increment())} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'> + </button>

      </div>  
   
   <button onClick={() => dispatch(reset())} className='bg-[#0398d4] text-[white] rounded-sm px-5 py-2 text-lg'>Reset</button>

  </div>
  )
}

export default Counter;


// <div>
// <button >Increment</button>
// <br/>
// <br/>

// <div>{count}</div>
// <br/>
// <br/>

// <button >Decrement</button>
// </div>