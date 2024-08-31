import React from 'react'

function ResizeHOC({children,color}:{
    children: React.ReactNode,
    color?: string
}) {
  return (
    <div className='flex flex-col justify-center items-center' style={{
      backgroundColor: color ? color: '#540910'
    }}>

        <div className='max-w-[1200px] w-full '>

{children}
        </div>
    </div>
  )
}

export default ResizeHOC