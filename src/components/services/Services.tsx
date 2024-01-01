

function Services() {
  return (
    <>
        <div className='text-2xl md:text-5xl font-bold text-[#374151] ml-32 mt-4 '>Services</div>
        <div className='text-sm md:text-2xl text-[#6B7280]  ml-20 md:ml-32 md:mt-2'>Little text about services </div>
        <div className='md:flex gap-4 md:ml-10 px-8'>
        <div className="relative">
            <img className="w-auto rounded-[25px] p-2 " src="./public/images/travelandaccomadaion.jpeg" alt="dummy-image"/>
            <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'>TRANSPORT SERVICES</a>
            <button className="absolute bottom-2 left-3 border border-neutral-50 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Button</button>
        </div>

        <div className="relative">
            <img className="w-auto rounded-[25px] p-2" src="./public/images/travelandaccomadaion.jpeg" alt="dummy-image"/>
            <a href="" className='absolute top-1 ml-2 text-2xl font-semibold uppercase text-neutral-50 pt-6 pl-4'>ACCOMMODATION Services</a>
         <button className="absolute bottom-2 left-3 border border-neutral-50 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Button</button>
        </div>

        <div className="relative">
            <img className="w-auto rounded-[25px] p-2" src="./public/images/travelandaccomadaion.jpeg" alt="dummy-image"/>
            <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'>TRANSPORT + ACCOMMODATION SERVICES</a>
            <button className="absolute bottom-2 left-3 border border-neutral-50 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Button</button>
        </div>
        

        </div>
    </>
  )
}

export default Services