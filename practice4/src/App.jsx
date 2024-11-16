
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Slice/counterSlice'

function App() {
  const countere =useSelector((State)=>State.counter.value)
  const dipathch=useDispatch()
  const addData =()=>{
    dipathch(increment())
  }
  const delateData=()=>{
    dipathch(decrement())
  }

  return (
    <>
      <div className="main w-[300px] h-[250px] border-[1.7px] border-[#642a14]  rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center">
            <div className='text-center font-semibold text-white mt-10 text-4xl '>{countere}</div>
            <div className="s flex justify-center items-center mt-4 ">

            <button onClick={addData}  className='font-semibold bg-[#a40226] py-3 px-9 rounded-xl text-white items-center hover:bg-yellow-500 duration-700'>Add</button>
            <button onClick={delateData} className='font-semibold bg-[#a40226] py-3 px-5 rounded-xl text-white items-center ml-3 hover:bg-yellow-500 duration-700'>Remove</button>
            </div>
      </div>
    </>
  )
}

export default App
