
import AboutTrestle from "./AboutTrestle"
import Filter from "./Filter"
import Footer from "./Footer"
import Nav from "./Nav"
import investData from "./investData"


export default function Invest(){
    return(
        <div className="invest" id="invest">
            <Nav />
            <div className=" w-11/12 lg:w-10/12 mx-auto text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]">
                <div className="invest-heading flex mt-8 xl:mt-12 justify-between text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] xl:text-[25px]">
                    <h1 className="md:mb-16 text-[#31A9B0]">Investment Opportunities</h1>
                    <button className="funded-portfolio text-s px-1 sm:py-1 self-start border-[#0898A0] border">
                        <a href="" className="text-[#0898A0]">Funded Portfolio</a>
                    </button>
                </div>
                <div className="invest-filter mt-6"> <Filter /></div>
                
                <div className=" investment-options sm:grid grid-cols-2 lg:grid-cols-3 gap-x-6 mx-auto mt-4 pb-4 mb-4 md:mb-20">
                    {investData.map((item, index) => {
                        return(
                            <div className="investment-option mt-8 md:mt-16 flex justify-center sm:flex-none sm:mx-0 text-[#0898A0]">
                                <div className="flex flex-col">
                                <img className=" sm:order-first" src={item.img} alt="image of investment option" />
                                
                                    <h4 className="order-first sm:text-start mb-3 sm:mb-0 sm:mt-3
                                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">{item.title}</h4>
                                <p className="max-w-[400px] mt-3 font-[Roboto]">
                                {item.writeup}...<a className="block opacity-[0.8]">Read more</a>
                                </p>
                                <button className=" px-3 py-1 rounded mt-3 self-start">FUND NOW</button>
                                </div>
                                
                            </div>
                        )
                        
                    }
                    )}
                </div>
            </div>
            <AboutTrestle />
            <Footer />
            </div>
    )
}