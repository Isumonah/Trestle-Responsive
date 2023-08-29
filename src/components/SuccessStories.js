import Nav from "./Nav";
import Footer from "./Footer";
import SuccessStoriesData from "./SuccessStoriesData";

export default function SuccessStories(){
    return(
        <div id="success-stories">
            <div className="">
            <Nav /></div>
            <div className="w-11/12 lg:w-10/12 mx-auto my-10 sm:my-14 md:my-16 xl:my-20 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px] leading-[18px] md:leading-[22px] xl:leading-[33.6px]">
                <div>
                    <h3 className="md:mt-14 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[30px] xl:text-[40px] text-[#5ABAC0]">NEW</h3> 
                    <div className="w-[100%] text-[#FFFFF0] font-[Roboto]">
                        {SuccessStoriesData.slice(0, 3).map((item, index) => {
                            return (
                                <div className="mt-3 md:mt-4 lg:mt-5 bg-[#83CBCF] p-2 md:p-4 lg:p-6 xl:p-8">
                                    <div className="md:flex items-start justify-between">
                                        <p className="w-[80%]">
                                            {item.text} </p>
                                        <button className="mt-2 md:mt-4 text-[#0898A0] bg-[#FFFFF0] p-1 md:p-2 xl:p-3 rounded text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px]">READ</button>
                                    </div>
                                     <h6 className="mt-2 md:mt-4">30 mins ago</h6>
                                </div>
                            )
                        })}  
                    </div>
                </div>
                <div>
                    <h3 className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[30px] xl:text-[40px] text-[#5ABAC0]">LAST WEEK</h3> 
                    <div className="w-[100%] text-[#FFFFF0] font-[Roboto]">
                        {SuccessStoriesData.map((item, index) => {
                            return (
                                <div className="mt-3 md:mt-4 lg:mt-5 bg-[#83CBCF] p-2 md:p-4 lg:p-6 xl:p-8">
                                    <div className="md:flex items-start justify-between">
                                        <p className="w-[80%]">{item.text}</p>
                                        <button className="mt-2 md:mt-4 text-[#0898A0] bg-[#FFFFF0] p-1 md:p-2 xl:p-3 rounded text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px]">READ</button>
                                    </div>
                                     <h6 className="mt-2 md:mt-4">30 mins ago</h6>
                                </div>
                            )
                        })}  
                    </div>
                </div>
                <div>
                    <h3 className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[30px] xl:text-[40px] text-[#5ABAC0]">LAST MONTH</h3> 
                    <div className="w-[100%] text-[#FFFFF0] font-[Roboto]">
                        {SuccessStoriesData.slice(0, 4).map((item, index) => {
                            return (
                                <div className="mt-3 md:mt-4 lg:mt-5 bg-[#83CBCF] p-2 md:p-4 lg:p-6 xl:p-8">
                                    <div className="md:flex items-start justify-between">
                                        <p className="w-[80%]">{item.text}</p>
                                        <button className="mt-2 md:mt-4 text-[#0898A0] bg-[#FFFFF0] p-1 md:p-2 xl:p-3 rounded text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px]">READ</button>
                                    </div>
                                     <h6 className="mt-2 md:mt-4">30 mins ago</h6>
                                </div>
                            )
                        })}  
                </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}