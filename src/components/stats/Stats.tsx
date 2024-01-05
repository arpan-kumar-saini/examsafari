import { FaCity } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";

function Stats() {
  return (
    <>
    <div className="scroll-smooth  text-[10px] flex gap-8 mt-[50px] px-2 md:px-4  md:pt-14 ml-4 md:ml-32">
        <div className="">
            <FaCity style={{color: "#00aff5",}} className='h-8 md:h-20 w-20 md:ml-32' />
            <h2 className="text-[#374151] font-bold md:text-2xl ml-5 md:ml-28">4+ Cities</h2> 
            <h6 className="text-[#6B7280] text-[8px] md:text-sm  ml-2">Book your perfect place from an extensive list of options.</h6>           
        </div>

        <div className="md:ml-48">
            <RiCustomerService2Fill style={{color: "#00aff5",}} className='h-8 md:h-20 w-20 md:ml-32' />
            <h2 className="text-[#374151] font-bold md:text-2xl ml-5 md:ml-28">3+ Services</h2> 
            <h6 className="text-[#6B7280] text-[8px] md:text-sm  ml-2">Book your perfect place from an extensive list of options.</h6>           
        </div>

        <div className="md:ml-48">
            <FaPeopleRoof style={{color: "#00aff5",}} className='h-8 md:h-20 w-20 md:ml-32' />
            <h2 className="text-[#374151] font-bold md:text-2xl ml-5 md:ml-28">250+ Partners</h2> 
            <h6 className="text-[#6B7280] text-[8px] md:text-sm  ml-2">Book your perfect place from an extensive list of options.</h6>           
        </div>        

    </div>
    </>
  )
}

export default Stats