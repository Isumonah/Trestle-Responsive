import shopify from "../images/shopify.png"
import bestBuy from "../images/bestBuy.png"
import quip from "../images/quip.png"

export default function ApplicationReceivedBusiness(){
    return(
        <div className="application-received-investor bg-white h-screen xl:pt-24 xl:pl-24 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]">
            <a href="/home" className="xl:text-3xl">TRESTLE</a>
            <h2 className="xl:text-3xl xl:mt-32 text-center">Application Received!</h2>
            <p className="text-center w-5/12 mx-auto mt-6 xl:text-lg opacity-80">Thank you for your interest in joining our community , your application has been duly received. Check your mail within the next 48 hours to get a confirmation and two verified investors from our screening team.</p>
            <p className="xl:text-lg xl:mt-40 text-center">Top Investors for you:</p>
            <div className="flex justify-around w-10/12 mx-auto xl:mt-14 text-gray-500 pb-20">
                <div className="flex items-center xl:text-lg">
                  <img src={shopify} />  
                  <p>Shopify</p>
                </div>
                <div className="flex items-center xl:text-lg">
                  <img src={bestBuy} />  
                  <p>Best Buy</p>
                </div>
                <div className="flex items-center xl:text-lg">
                  <img src={quip} />  
                  <p>Quip</p>
                </div>
            </div>

        </div>
    )
}