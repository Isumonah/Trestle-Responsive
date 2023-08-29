import businessWomen from "../images/business-women.png"
import groupLadies from "../images/group-ladies.png"
import cynthia from "../images/cynthia-asorock.png"

import AboutTrestle from "./AboutTrestle"
import Nav from "./Nav"
import Footer from "./Footer"


export default function About(){
    return(
        <div className="about text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]">
            <div className="about-nav">
            <Nav /></div>
            <div className="about-img-div shadow">
                <div className="about-img">
                    <img className="w-11/12 lg:w-10/12 mx-auto shadow-2 py-8" src={businessWomen} alt="business-women" />
                </div>
            </div>
            
            
            <div className="bg-[#ADDDDF33] text-[#0898A0] mt-6 lg:pt-8">
                <div className="our-story w-11/12 lg:w-10/12 md:flex mx-auto items-start">
                    <h1 className="md:hidden order-last text-center pt-6 text-[16px] sm:text-[18px] md:text-[20px]">OUR STORY</h1>
                    <img className="mt-8 w-10/12 md:w-6/12 mx-auto xl:h-2/3 xl:w-1/2" src={groupLadies} alt="group of girls" />
                    <div className="story-writeup mt-6 px-6 xl:w-1/2 xl:pl-10 ">
                        <h1 className="hidden md:block text-[22px] xl:text-[24px]">OUR STORY</h1>
                        <p className="mt-3 font-[Roboto]">
                            Trestle is a free investment platform with a supportive online community to learn and grow as a business owner. We help small and medium enterprises advance by connecting them with the right investors.
                        </p>
                        <p className="mt-2 xl:mt-4 font-[Roboto]">
                            Founded by Team Unicorn- a group of twelve ladies, Trestle started as a capstone project on Microsoft Teams in February 2023. These women came together to implement their vision of bridging the financial constraints of small scale enterprises to further contribute to the GDP of Low Medium Countries(LMICs) in Africa.
                            </p>
                        <p className="mt-2 xl:mt-4 font-[Roboto]">
                            Despite the role of SMEs in the economy, the financial constraints they face in their operation are daunting, and this has a negative impact on their development and also limits their potential to drive the economy as expected. This is worrying for a developing economy without the infrastructure and technology to attract big businesses in large numbers.
                        </p>
                        <p className="mt-2 xl:mt-4 font-[Roboto]">
                            It is no longer news that SMEs play a major role in most economies, particularly developing countries, However, access to finance is a key constraint to SMEs growth, it is the second most cited obstacle facing SMEs to grow their business in emerging markets and developing countries. Unfortunately, SMEs are less likely to be able to obtain bank loans than large firms, instead, they rely on internal funds, angel investors, or cash from friends and family to launch and run their enterprise.

                        </p>
                        <p className="mt-2 xl:mt-4 font-[Roboto]">
                            This is particularly a significant concern for African SMEs because this impedes their capacity and ability to develop and grow without sufficient operating capital and this is where Trestle driven by our community and the need to connect SMEs with the right investors.
                        </p>
                    </div>
                </div>
                <div className="get-in-touch flex mt-16 w-11/12 xl:w-full mx-auto xl:mx-0 justify-around items-center xl:items-start lg:mt-20">
                    <div className="get-in-touch-list mr-4 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                        <h2 className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">GET IN TOUCH</h2>
                        <p className=" mt-1 md:mt-4 ">apply@trestle.com</p>
                        <p className="md:mt-3">invest@trestle.com</p>
                        <p className="md:mt-3"> events@trestle.com</p>
                        <p className="md:mt-3">community@trestle.com</p>
                        <p className="md:mt-3">support@trestle.com</p>
                    </div>
                    <div className="get-in-touch-img">
                        <img className="" src={cynthia} alt="picture of Cynthia Asorock" />
                    </div>
                </div>
                <div className="sign-up-div mt-10 lg:mt-16 pb-10 lg:pb-16 text-center">
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">READY TO GET STARTED?</h3>
                    <button className="sign-up py-1 px-3 lg:py-2 lg:px-4 rounded mt-1"><a href="/sign-up">SIGN UP</a></button>
                </div>
            </div>
            <AboutTrestle />
            <Footer />
            
        </div>
    )
}