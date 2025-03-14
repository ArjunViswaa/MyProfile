import React from 'react'

function LoadingScreen() {
  return (
    <div id="loadingScreen"
        className="fixed w-full h-screen z-1000 bg-transparent backdrop-blur-sm  justify-center items-center top-0"
        style={{"display": "flex"}}
    >
      <img src="assets/images/loading1.gif" className='w-[200px] h-[200px]'/>
    </div>
  )
}

export default LoadingScreen;