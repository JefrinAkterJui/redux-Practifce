
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Slice/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const add=()=>{
    dispatch(increment())
  }
  const jah=()=>{
    dispatch(decrement())
  }

  return (
    <>
      <div className="main w-[300px] h-[250px] border-[1.7px] border-[#FFBF13]  rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center">
            <div className='text-center font-semibold text-black mt-10 text-4xl '>{count}</div>
            <div className="s flex justify-center items-center mt-4 ">

            <button onClick={add} className='font-semibold bg-[#fdfaf3] py-3 px-9 rounded-xl text-[#bc6b4d] items-center hover:bg-[#a55e6277] duration-700'>Add</button>
            <button onClick={jah} className='font-semibold bg-[#fdfaf3] py-3 px-5 rounded-xl text-[#bc6b4d] items-center ml-3 hover:bg-[#a55e6277] duration-700'>Remove</button>
            </div>
      </div>
    </>
  )
}

export default App
