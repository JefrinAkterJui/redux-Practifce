
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Slice/counterSlice'

function App() {
  const SliceCounter=useSelector((State)=>State.Counter.value)
  const despatch =useDispatch()
 const adding=()=>{
  despatch(increment())
 }
 const delate=()=>{
  despatch(decrement())
}
  return (
    <>
      <div className="main w-[300px] h-[250px] border-[1.7px] border-[#fff]  rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center">
            <div className='text-center font-semibold text-white mt-10 text-4xl '>{SliceCounter}</div>
            <div className="s flex justify-center items-center mt-4 ">

            <button  onClick={adding}  className='font-semibold bg-[#fc146177] py-3 px-9 rounded-xl text-white items-center hover:bg-[#482c92] duration-700'>Add</button>
            <button onClick={delate} className='font-semibold bg-[#fc146177] py-3 px-5 rounded-xl text-white items-center ml-3 hover:bg-[#482c92] duration-700'>Remove</button>
            </div>
      </div>
    </>
  )
}

export default App
