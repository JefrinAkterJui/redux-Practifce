
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Slice/counterSlice'

function App() {
  const Slicedata =useSelector((State)=>State.myStore.value)
  const depatch =useDispatch()
  const add=()=>{
    depatch(increment())
  }
  const removee=()=>{
    depatch(decrement())
  }

  return (
    <>
      <div className="main w-[300px] h-[250px] border-[1.7px] border-[#fff]  rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center">
            <div className='text-center font-semibold text-white mt-10 text-4xl '>{Slicedata}</div>
            <div className="s flex justify-center items-center mt-4 ">

            <button onClick={add}   className='font-semibold bg-[#fc146177] py-3 px-9 rounded-xl text-white items-center hover:bg-pink-500 duration-700'>Add</button>
            <button onClick={removee} className='font-semibold bg-[#6347] py-3 px-5 rounded-xl text-white items-center ml-3 hover:bg-pink-500 duration-700'>Remove</button>
            </div>
      </div>
    </>
  )
}

export default App
