import React from 'react'

function Dashboard() {
  return (
    <div id="loadingScreen"
        className="fixed w-full h-screen z-1000 bg-transparent backdrop-blur-sm  justify-center items-center top-0 flex flex-col"
    >
      <img src="assets/images/work-in-progress.gif" className='w-[400px] h-[200px]'/>
      <h2 className='my-14'>Thanks for visiting... Site will be up soon !!!</h2>
    </div>
  )
}

export default Dashboard;