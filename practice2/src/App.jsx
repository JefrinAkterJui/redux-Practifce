
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './Slice/counterSlice'
import { decrement } from './Slice/counterSlice'

function App() {
  const SliceData = useSelector((State)=>State.stordata.value)
  const dipatch =useDispatch()
  const handelAdd=()=>{
    dipatch(increment())
  }
  const handelRemove=()=>{
    dipatch(decrement())
  }

  return (
    <>
      <div className="main w-[300px] h-[250px] border-[1.5px] border-[#c19cd9] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center">
            <div className='text-center font-semibold text-[#8b5cf6] mt-10 text-4xl '>{SliceData}</div>
            <div className="s flex justify-center items-center mt-4 ">

            <button onClick={handelAdd} className='font-semibold bg-rose-400 py-3 px-9 rounded-xl text-white items-center hover:bg-[#8b5cf6] duration-700'>Add</button>
            <button onClick={handelRemove} className='font-semibold bg-rose-400 py-3 px-5 rounded-xl text-white items-center ml-3 hover:bg-[#8b5cf6] duration-700'>Remove</button>
            </div>
      </div>
    </>
  )
}

export default App
