import { Link } from 'react-router-dom'

function ExamCity() {
  return (
    <>
        <div className='text-2xl md:text-3xl font-bold text-[#374151] ml-32 mt-[50px] md:mt-[100px] md:ml-44  '>Exam Cities</div>
        <div className='text-sm md:text-xl text-[#6B7280]  ml-28 md:ml-[170px] md:mt-2'>Little text about Cities </div>
        <div className='md:flex gap-4 md:mx-28 px-8'>
            <Link to="/allahabad">
            <div className="relative">
                <img className=" h-[300px] w-auto rounded-[25px] p-2  " src="./public/images/allahabad.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
                <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Allahabad..</button>
            </div>
            </Link>

            <Link to="/lucknow">
            <div className="relative">
                <img className=" h-[300px] w-auto rounded-[25px] p-2" src="./public/images/lucknow.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold uppercase text-neutral-50 pt-6 pl-4'></a>
            <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Lucknow..</button>
            </div>
            </Link>

            <Link to="/kanpur">
            <div className="relative">
                <img className="h-[300px] w-auto rounded-[25px] p-2" src="./public/images/kanpur.png" alt="dummy-image"/>
                <a href="" className='absolute top-1 ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'></a>
                <button className="absolute bottom-2 left-3 bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Kanpur..</button>
            </div>
            </Link>
        </div>
    
</>
  )
}

export default ExamCity