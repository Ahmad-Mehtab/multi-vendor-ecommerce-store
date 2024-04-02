import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white'>
      <div className='bg-[#342ac8] p-5 flex justify-between'>
        <div>
          <h1><span className="text-[#56d879]">Subscribe</span> us for get news <br/> events and offers</h1>
        </div>
        <div>
          <input type="text" placeholder='enter your email' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Footer