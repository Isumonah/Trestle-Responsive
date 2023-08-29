import adeolaSagoe from "../images/adeola-sagoe.png"
import tolase from "../images/tolase.png"
import smallCircle from "../images/small-circle.png"
import smallCircleGreen from "../images/small-circle-green.png"

import Footer from "./Footer"
import Nav from "./Nav"
import AboutTrestle from './AboutTrestle'

export default function Home(){
    return(
        <div className="home text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]" id="home">
            <div className="home-nav">
            <Nav /></div>
            <div className="connect-people h-72 md:h-96 flex flex-col items-center justify-center space-y-4 xl:h-[700px] m-[20px] sm:m-[30px] xl:m-[60px]">
                <h1 className="text-[20px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[35px]">TRESTLE</h1>
                <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] mt-2 text-center lg:max-w-lg lg:mr-10 xl:mr-[250px] xl:leading-10">Connecting Business Owners with Potential Investors
                </h2>
                <button className="join-community-button rounded-lg px-2 lg:px-3 xl:px-4 xl:py-2 py-1 mt-2 md:text-xl lg:text-2xl xl:mr-40 xl:px-3 bg-[#0898A0] text-[#FFFFF0]">Join Our Community!</button>
            </div>
            <div className="home-owner-investor bg-[#ADDDDF]">
                <div className="lg:flex lg:justify-center lg:py-12 w-11/12 mx-auto">
                    <div className="home-owner flex flex-col items-center lg:h-[300px] justify-center py-10 md:py-12 lg:py-14 xl:h-[400px] xl:w-[700px] z-10" >
                    <h4 className="text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[32px]">Are you a Business Owner?</h4>  
                    <p className="mt-1 w-3/4 md:mt-4">We connect you to over a thousand investors with verified portfolios around Africa</p>
                    <button className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[26px] px-3 lg:px-4 py-1 lg:py-2 mt-2 md:mt-4 xl:mt-16 xl:ml-64"><a href="owner-application">Apply Now!</a></button>
                    </div>
                    <div className="home-investor flex flex-col py-10 md:py-12 lg:py-14 xl:mt-[65px] lg:h-[300px] xl:h-[400px] xl:w-[700px] xl:ml-[-80px] items-center lg:ml-[-50px] lg:mt-[40px]">
                    <h4 className="text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[32px]">Are you an Investor?</h4>  
                    <p className="mt-1 w-3/4 md:mt-4 xl:ml-20">Our platform reaches over 300,000 small and medium verified enterprises in Africa. Let's chat.</p>
                    <button className="px-3 py-1 lg:px-4 lg:py-2 mt-2 md:mt-4 xl:mt-16  xl:ml-96 text-[15px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[26px]"><a href="/investor-application">Invest Now!</a></button>
                    </div>
                </div>
            </div>
            <div className="trestle-vision py-10 md:py-12 lg:py-14 text-[#0898A0] ">
                <h3 className="text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[32px] text-center md:mt-4">THE TRESTLE VISION</h3>
                <p className="w-10/12 mx-auto mt-3 xl:w-9/12 xl:py-6 font-[Roboto]">To be  a reputable and foremost  platform that  connect  SMEs in Africa to their potential investors from various sector(s) ranging from Agriculture, Finance, Education, Technology by providing them with the necessary funding and resources they need to increase there visibility within amd across Africa. We hope to raise not less than 10,000 African(s) in the space of five years to stardom through their businesses.</p>
            </div>
            <div className="trestle-corner py-10 md:py-12 px-6 sm:px-8 lg:px-12 xl:px-0 bg-[#ADDDDF33] text-[#0898A0]">
                <div className="xl:w-11/12 xl:mx-auto">
                    <h3 className="trestle-corner-title text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[32px] text-center w-full ">TRESTLE CORNER</h3>
                    <div className="business-mogul adeola flex flex-col lg:flex-row lg:space-x-8 pb-6">
                        <img className="w-3/4 mx-auto mt-8 order-last xl:order-first" src={adeolaSagoe} alt="picture of Adeola Sagoe" />
                        <div className="business-mogul-writeup lg:mr-6">
                            <h3 className="adeola-name text-[17px] sm:text-[19px] md:text-[22px] lg:text-[25px] xl:text-[30px] text-center mt-10">ADEOLA SAGOE</h3>
                            <p className="adeola-writeup  mt-2 font-[Roboto]">Ms Deola Ade-Ojo is a Nigerian born fashion designer who is popularly known by her design name, Deola Sagoe. she began designing in 1988 when she join her mothers business with a view of expanding the labels repertoire to encompass more contemporary designs for ever-developing cosmopolitan high-brow society. Using Africa hand-woven materials in which she brought out life a range of distinct cultures; and contemporizing almost-lost traditional African techniques, Deola is well known for her uncanny attention to detail, her expert handling of diverse range of fabrics as well as her exemplary grasp of a wide range of female body types. She is celebrated back home for patriotism and zeal in Nigerian culture at large. </p>
                        </div>
                    </div>
                    <div className="business-mogul tolase business-mogul adeola flex flex-col lg:flex-row lg:space-x-8">
                        <div className="business-mogul-writeup">
                            <h3 className="tolase-name text-[17px] sm:text-[19px] md:text-[22px] lg:text-[25px] xl:text-[30px] text-center mt-16">TOLASE OLULEYE (NIG)</h3>
                            <p className="tolase-writeup mt-4 font-[Roboto]">Meet Tolase our super biz of the month. Tolase is a graduate of economics from University of Ibadan, she holds a masters degree in Business Administration from Lagos Business school. After graduation Tolase wanted more for her life and she decided to start selling fabric but due to lack of fund Tolase could not expand as much as she wanted, she came across trestle and she pitched her idea and fortunately she finally found an investor and that is the beginning of her turn about within few months Tolase has sold more than 1million fabric across Africa. Tolase is our super star and we are proud of her success.
                            </p>
                        </div>
                            <img className="w-3/4 mx-auto mt-8 order-last " src={tolase} alt="picture of Tolase Oluleye" />
                    </div>
                    <div className="carousel">   <div className="carousel-btns flex mt-12 space-x-3">
                            <img src={smallCircleGreen} />
                            <img src={smallCircle} />
                            <img src={smallCircle} />
                    </div>
                    <p className="mt-3">Read more featured stories  > </p>
                    </div>
                </div>
            </div>
            <div className="home-about-trestle-div flex justify-center"> <AboutTrestle /></div>
            <div className="w-full">
                <Footer />
            </div>
            
        </div>
    )
}