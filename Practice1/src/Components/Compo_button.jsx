import React from 'react'

const Compo_button = ({CommonContent,Count_number , HoverEffect}) => {
  return (
    <>
    <button onClick={Count_number}>

    <div className={`text-white text-3xl ${HoverEffect}  duration-700 font-medium font-serif bg-slate-600 px-3 py-2 rounded-lg mt-7 ml-5`}>{CommonContent}</div>
    </button>
    </>
  )
}

export default Compo_button