

function HeroSection() {
  return (
    <>
        {/* <div className=" w-auto h-[250px] -ml-32 md:-ml-0 relative md:h-[700px]   overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center bg-[url('/images/bannar3.png')] ">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className=" ml-32 md:ml-0  md:mt-[-400px]">
                <h2 className="md:mb-4 md:text-5xl text-[#142d55] uppercase italic font-semibold">travel your exam city with exam safari</h2>
                
                <button type="button" className="rounded-[15px]   bg-red-500 text-white mt-6  hover:bg-blue-600 px-2 md:px-7 md:pb-[8px] md:pt-[10px]  text-sm font-medium uppercase   " > Book Now
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-[120px]">
            <img className=" h-[700px] w-full  " src="/images/bannar3.png" alt="dummy-image"/>
            <h2 className="absolute bottom-[650px] left-[350px] md:text-5xl text-[#142d55] uppercase italic font-semibold">travel your exam city with exam safari</h2>
            <a href="" className=' ml-2 text-2xl font-semibold text-neutral-50 pt-6 pl-4'>
            <button className=" absolute bottom-[550px] left-[850px] bg-red-500 text-white p-2 rounded-[15px] hover:bg-blue-600 m-2">Book Now</button></a>
        </div>
    </>
   
  )
}

export default HeroSection