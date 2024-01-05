

function Services() {
  return (
    <>  
        <div className='text-2xl md:text-3xl font-bold text-[#374151] ml-32 mt-[50px] md:mt-[100px] md:ml-44  '>Services</div>
        <div className='text-sm md:text-xl text-[#6B7280]  ml-28 md:ml-[170px] md:mt-2'>Little text about services </div>
        <div className='md:flex gap-4 md:ml-32 px-8'>
        <div className="relative">
            <img className=" h-[300px] w-auto rounded-[25px] p-2 " src="./public/images/service1.png" alt="dummy-image"/>
            <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
            <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">View More..</button>
        </div>

        <div className="relative">
            <img className=" h-[300px] w-auto rounded-[25px] p-2" src="./public/images/service2.png" alt="dummy-image"/>
            <a href="" className='absolute top-1 ml-2 text-2xl font-semibold uppercase text-neutral-50 pt-6 pl-4'></a>
         <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">View More..</button>
        </div>

        <div className="relative">
            <img className="h-[300px] w-auto rounded-[25px] p-2" src="./public/images/service3.png" alt="dummy-image"/>
            <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
            <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">View More..</button>
        </div>
        

        </div>
    </>
  )
}

export default Services