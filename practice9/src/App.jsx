
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Slice/counterSlice'

function App() {
  const amarSlice=useSelector((State)=>State.SliceStor.value)
  const depath=useDispatch()
  const ay=()=>{
    depath(increment())
  }
  const jah=()=>{
    depath(decrement())
  }
  return (
    <>
      <div className="main w-[300px] h-[250px] border-[1.7px] border-[#4ce2e2]  rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center">
            <div className='text-center font-semibold text-white mt-10 text-4xl '>{amarSlice}</div>
            <div className="s flex justify-center items-center mt-4 ">

            <button onClick={ay} className='font-semibold bg-[#f8a1be77] py-3 px-9 rounded-xl text-white items-center hover:bg-[#3c9afa] duration-700'>Add</button>
            <button onClick={jah} className='font-semibold bg-[#fc146177] py-3 px-5 rounded-xl text-white items-center ml-3 hover:bg-[#3c9afa] duration-700'>Remove</button>
            </div>
      </div>
    </>
  )
}

export default App
