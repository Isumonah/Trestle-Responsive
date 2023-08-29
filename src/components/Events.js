import Nav from "./Nav";
import EventsData from "./EventsData";
import Footer from "./Footer";


export default function Events(){
    return(
        <div className="events text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]" id="event">
            <div className="events-nav">
                <Nav />
           </div>
           <div className="events-img bg-cover h-64 sm:h-96 md:h-[700px] flex justify-center items-center text-center border-2">
                <div className="events-info py-3 bg-[#FFFFF0] bg-opacity-[0.6] sm:p-6 md:p-12 rounded">
                    <button className="next-event-button mx-auto text-[14px] sm:text-[18px] px-3 md:text-[22px] lg:text-[25px] lg:py-1 rounded">Next Event</button>
                    <h1 className="text-[17px] sm:text-[20px] text-[#0898A0] mt-3 sm:mt-4 lg:text-[23px]">The Trestle Global Investors Summit</h1>
                    <p className="text-[13px]mt-2 sm:mt-4 sm:text-[18px] lg:text-[21px]">Theme: Advancing the world, <span className="text-[#0898A0] font-bold">one startup at a time.</span></p>
                    <button className="get-ticket mx-auto text-[14px] sm:text-[16px] lg:text-[18px] px-2 lg:py-2 mt-3 sm:mt-4 rounded">Get Your Ticket</button>
                </div>
           </div>
           <div className="upcoming-events w-10/12 sm:w-9/12 mx-auto text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] mb-14 sm:mb-18 md:mb-20 lg:mb-22 xl:mb-24">
                <button className="upcoming-events-button mt-6 sm:mt-10 px-2 text-[16px] sm:text-[19px] md:text-[21px] lg:text-[23px] xl:text-[25px]">Upcoming Events</button>
                <div className="upcoming-event mt-3 sm:mt-5  all-upcoming-events lg:grid lg:grid-cols-2 lg:gap-10">
                    {EventsData.map((item, index) => {
                        return (
                            <div className="mt-4 sm:mt-6">
                                <h4>{item.topic}</h4>
                                <p>{item.about} 
                                    <a>{item.link}</a>
                                </p>
                                <div className="events-date-div flex justify-between mt-2">
                                <p className="text-[13px] sm:text-[16px]">{item.date}</p>
                                <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] rounded">{item.ticket}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
    
                {/* <div className="invest-signup flex flex-col justify-center items-center mt-12 space-y-2 sm:mt-14 md:mt-16 xl:mt-20" >
                    <h4 className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] xl:text-[26px]">TRESTLE</h4>
                    <p className="w-7/12 sm:6/12 mx-auto text-center"><span>Investing? </span> Register to invest at our next event</p>
                    <button className="text-[12px] sm:text-[15px] p-1 sm:px-2 rounded">SIGN UP</button>
                </div> */}
           </div>
           <div className="mt-8">
                <Footer />
            </div>
           
        </div>
    )
}