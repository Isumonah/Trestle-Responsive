import searchIcon from "../images/search-icon.png"
import Filter from "./Filter"
import kemiAdetiba from "../images/kemi-adetiba.png"
import cynthiaAsorock from "../images/cynthia-asorock.png"
import felixAndrade from "../images/felix-andrade.png"
import adesuaTomid from "../images/adesua-tomid.png"
import locationIcon from "../images/location-icon.png"

import Nav from "./Nav"
import Footer from "./Footer"

const investors = [
    {
        img: kemiAdetiba,
        name: "Kemi Adetiba",
        job: "Venture Capitalist",
        location: "Lagos, Nigeria",
        status: "Active",
        salary:"$45,000 - $60,000"
    },
    {
        img: cynthiaAsorock,
        name: "Cynthia Asorock",
        job: "Angel Investor",
        location: "Nairobi, Kenya",
        status: "Active",
        salary:"$30,000 - $80,000"
    },
    {
        img: felixAndrade,
        name: "Felix Andrade",
        job: "Venture Capitalist",
        location: "New York",
        status: "Active",
        salary:"$100,000 - $200,000"
    },
    {
        img: adesuaTomid,
        name: "Adesua Tomid",
        job: "Angel Investor",
        location: "Abuja, Nigeria",
        status: "Active",
        salary:"$500,000 - $800,000"
    }
]


export default function FindInvestor(){
    return(
        <div className="find-investor text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]" id="find-investor">
            <div className="find-investor-nav">
            <Nav /></div>
            <div className="flex h-10 md:h-12 search-investor mt-8 text-center border-2 xl:h-16 w-11/12 lg:w-10/12 mx-auto">
                <input placeholder="Search"  className="search-investor-input w-9/12 border-2 border-teal-600 rounded py-1 px-2 md:px-3 md:py-2 lg:py-3 lg:px-5 xl:h-16 xl:text-lg placeholder:text-gray-400"  />
                <div className="search-div bg-teal-600 -mx-3 w-1/12 rounded-lg  xl:h-16 flex justify-center items-center">
                    <img  className="h-6 xl:h-8" src={searchIcon} alt="search-icon" />
                </div>
            </div>
            <div className="filter-investors w-11/12 lg:w-10/12 mx-auto">
                <h3 className="filter-investors-title mt-10 md:mt-14 mb-2 md:mb-6 sm:text-xl 
                lg:text-2xl font-[Roboto] text-[#0898A0]">Filter Investors:</h3>
                <Filter />
            </div>
            <div className="featured-investors mt-8">
                <div className="w-11/12 lg:w-10/12 mx-auto">
                    <button className=" px-2 rounded py-1 md:px-3 md:py-2 md:mt-12 xl:text-[24px] font-[Roboto] text-[#FFFFF0] bg-[#0898A0]">Featured Investors</button>
                </div>
                <div className="investors bg-[#ADDDDF33]">
                    {investors.map((item, index) => {
                        return (
                            <div className="sm:flex sm:items-center sm:space-x-6 lg:space-x-10  mt-6 py-8 shadow-[0px 4px 4px  rgba(0, 0, 0, 0.25)] w-11/12 lg:w-10/12 mx-auto">
                            <img src={item.img} alt="image of Kemi Adetiba" className="w-10/12 mx-auto sm:w-5/12 lg:w-11/12" />
                            <div className="about-investor w-10/12 mx-auto">
                                <h4 className="name-of-investor mt-4 text-lg sm:text-xl xl:text-[35px]text-[#0898A0]">{item.name}</h4>
                                <ul className="investor-details flex flex-wrap space-x-5 mt-1 sm:mt-3 sm:space-x-0md:space-x-8 xl:text-[24px] font-[Roboto] list-none">
                                    <li className="investor-job sm:mr-4 ">{item.job}</li>
                                    <li className="investor-location flex">
                                        <img src={locationIcon} alt="location-icon" className="h-6 mr-1"  />
                                        <p className="sm:mr-4">{item.location}</p>
                                    </li>
                                    <li className="investor-status">{item.status}</li>
                                </ul>
                                <p className="salary-of-investor sm:mt-3 xl:text-[24px]">{item.salary}</p>
                            </div>
                        </div>
                        )
                    }
                    )}
                </div>

                <div className="see-more mt-8 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[22px]">
                        <h3 className="text-lg text-center text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] mt-10">Do you want to see more?</h3>
                        <p className="text-center">Join Trestle and be the first to connect with investors</p>
                        <form className="find-investor-form mt-6 flex flex-col items-center placeholder:text-[50px]">
                            <label className="flex flex-col w-1/2">
                                Full Name:
                                <input placeholder="Enter full name"  className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-teal-600 placeholder:opacity-70 placeholder:text-gray-500 bg-[#FFFFF0]"/>
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Email Address:
                                <input placeholder="Enter email address" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-teal-600 placeholder:opacity-70 placeholder:text-gray-500  bg-[#FFFFF0]" />
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Password:
                                <input placeholder="Enter password" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-teal-600 placeholder:opacity-70 placeholder:text-gray-500  bg-[#FFFFF0]" />
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Confirm Password:
                                <input placeholder="Re-enter password" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-teal-600 placeholder:opacity-70 placeholder:text-gray-500  bg-[#FFFFF0]" />
                            </label>
                            <button className="my-8 py-1 px-3 rounded xl:px-8 xl:py-2">SIGN UP</button>
                        </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}