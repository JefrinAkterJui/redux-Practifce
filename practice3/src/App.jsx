
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/counterSlice'

function App() {
  const Slicedata=useSelector((State)=>State.storData.value)
  const dispatch = useDispatch()
  const handleAdd=()=>{
    dispatch(increment())
  }
  const handelDelate =()=>{
    dispatch(decrement())
  }


  return (
    <>
    <div className="main w-[300px] h-[250px] border-[1.5px] border-[#45cf58] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center">
            <div className='text-center font-semibold text-gray-800 mt-10 text-4xl '>{Slicedata}</div>
            <div className="s flex justify-center items-center mt-4 ">

            <button onClick={handleAdd}  className='font-semibold bg-pink-400 py-3 px-9 rounded-xl text-white items-center hover:bg-yellow-500 duration-700'>Add</button>
            <button onClick={handelDelate} className='font-semibold bg-pink-400 py-3 px-5 rounded-xl text-white items-center ml-3 hover:bg-yellow-500 duration-700'>Remove</button>
            </div>
      </div>
    </>
  )
}

export default App
