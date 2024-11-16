import React, { useState } from 'react'
import Compo_button from './Compo_button'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Slice/counterSlice'
import { decrement } from '../Slice/counterSlice'

const Main_compo = () => {
  const Slicedata =useSelector((State)=>State.storedata.value)
  const dipatch = useDispatch()

  const hendelAdd =()=>{
    dipatch(increment())
  }
  const hendelremove=()=>{
    dipatch(decrement())
  }

  return (
    <>
    <div className="main w-[500px] h-[400px] border-[2px] border-blue-300 rounded-lg">

        <div className='text-white text-4xl font-bold mt-[137px]'>{Slicedata}</div>
      

        <button onClick={hendelAdd} className='text-4xl  text-white ml-5 font-medium font-serif bg-slate-600 rounded-lg px-6 py-2 mt-5'>+</button>
        <button onClick={hendelremove} className='text-4xl text-white ml-5 font-medium font-serif bg-slate-600 rounded-lg px-6 py-2 mt-5'>-</button>
    </div>
      
    </>
  )
}

export default Main_compo