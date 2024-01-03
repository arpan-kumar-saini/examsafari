

function ExamCity() {
  return (
    <>
    <div className='text-3xl md:text-5xl font-bold text-[#054652] ml-32 mt-4 '>Exam Cities</div>
    <div className='text-1xl md:text-2xl text-[#747474] ml-20 md:ml-32 md:mt-2'>Little text about exam Cities </div>
    <div className='md:grid grid-cols-3 gap-4 mx-4 mt-4 '>
        <div className="px-6 ml-4 mt-4 md:ml-20">
            <img src="./public/images/allahabad1.jpeg" className=" md:h-[350px] w-[500px] rounded-[25px] border border-[#00aff5] p-2" alt="" />
            <div className="pl-24 md:pl-40 text-2xl md:text-3xl font-semibold">Allahabad</div>
            <button className="ml-28 md:ml-[200px] border border-[#00aff5] rounded-[5px] px-2 py-1 font-semibold">click me</button>
        </div>
        
        

        <div className="px-6 ml-8 mt-4">
            <img src="./public/images/lucknow1.jpeg" className="md:h-[350px] w-[500px] rounded-[25px] border border-[#00aff5] p-2" alt="" />
            <div className="pl-24 md:pl-44 text-2xl md:text-3xl font-semibold">Lucknow</div>
            <button className="ml-28 md:ml-[200px] border border-[#00aff5] rounded-[5px] px-2 py-1 font-semibold">click me</button>
        </div>

         <div className="px-6 ml-8 mt-4">
            <img src="./public/images/kanpur.jpeg" className="md:h-[350px] w-[500px] rounded-[25px] border border-[#00aff5] p-2" alt="" />
            <div className="pl-24 md:pl-52 text-2xl md:text-3xl font-semibold">Kanpur</div>
            <button className="ml-28 md:ml-[220px] border border-[#00aff5] rounded-[5px] px-2 py-1 font-semibold">click me</button>
        </div>       
        

    </div> 
    
</>
  )
}

export default ExamCity