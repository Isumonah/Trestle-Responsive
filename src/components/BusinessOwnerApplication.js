import settings from "../images/settings.png"
import kemiAdetiba from "../images/kemi-adetiba.png"
import AboutTrestleHome from "./AboutTrestleHome"
import Footer from "./Footer"


export default function BusinessOwnerApplication (){
    return(
        <div className=" business-owner-application  text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px] text-[#0898A0]">
            <nav className="business-owner-application-nav bg-[#ADDDDF33] shadow-lg">
               <div className="w-11/12 lg:w-10/12 mx-auto pt-4">
                    <p className="text-[#0898A0] hover:text-[#9d8672]">
                        <a className=" border-b-2 lg:border-b-4 border-[#0898A0] text-[15px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[35px]" href="/">TRESTLE</a>
                    </p>
                    <ul className=" w-full flex justify-between items-center mt-2 pb-4">
                        <li className="text-[#0898A0">Application Process</li>
                        <li className="flex space-x-1 items-center">
                            <img src={settings} className="h-4" />
                            <a href="#" className="text-gray-400  transform hover:scale-[1.1] hover:pl-2">Account settings</a>
                        </li>
                        <button className="bg-[#0898A0] px-3 py-1 rounded-lg text-white opacity-90"><a href="#">Log Out</a></button>
                    </ul>
                </div>
                
            </nav>
                <div className="w-11/12 lg:w-10/12 mx-auto">
                    <div className="flex justify-between space-x-8 mt-6  sm:mt-8 lg:mt-10 xl:mt-16">
                    <div className=" flex flex-col justify-center">
                        <h2 className="">Hello Jumoke, Tell Us About Yourself</h2>
                        <p className="opacity-50 mt-3">Your application will be reviewed based on the information provided here. Note that once submitted, this information cannot be edited. </p>
                    </div>
                    <img src={kemiAdetiba} className="h-20 sm:h-24 md:h-26 lg:h-28 xl:h-30 rounded-full" />
                    </div>
                <form className="flex flex-col mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
                    <label className="">Full Name <input className="bg-[#FFFFF0] mt-1 sm:mt-2 lg:mt-4 block border w-full px-2 py-1 sm:px-3 py-2  xl:px-5 xl:py-4 rounded-lg border-[#0898A0] xl:mt-3 placeholder:text-teal-600 opacity-70 "></input></label>
                    <label className="mt-4 "><span className="block xl:mb-3">Location</span>
                        <div className="mt-2 flex justify-between space-x-2">
                        <select name="country" className=" border w-6/12 px-2 py-1 sm:px-3 py-2  xl:mr-12 xl:px-8 xl:py-4 rounded-lg border-[#0898A0] opacity-70 bg-[#FFFFF0]">
                            <option value="Country">Country</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Kenya">Kenya</option>
                        </select>
                        <select name="state" className="border w-6/12 xl:ml-12  xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] opacity-70">
                            <option value="State">State</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Oyo">Oyo</option>
                        </select>
                        </div>
                    </label>
                    <label className="mt-4 xl:mt-10 ">Email Address <input type="email"  className="block border w-full px-2 py-2 mt-1 sm:mt-2 lg:mt-4 xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] xl:mt-3"></input></label>
                    <label className="mt-6 xl:mt-10">Phone Number <input type="number"  className="block border w-full px-2 py-2 xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] xl:mt-3"></input></label>
                    <label className="mt-6 xl:mt-10">Business Name <input  className="block border px-2 py-2 w-full xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] xl:mt-3"></input></label>
                    <label className="mt-6 xl:mt-10">CAC Registration<input  className="block border w-full px-2 py-2 xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] xl:mt-3"></input></label>
                    <label className="mt-6 xl:mt-10 ">Years of Experience <input  className="block border w-full px-2 py-2 xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] xl:mt-3"></input></label>
                    <label className="mt-6 xl:mt-10">Business Industry
                        <select name="Select your industry" className="block border w-full px-2 py-2 xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] xl:mt-3">
                        <option value="Select your industry" className="">Select your industry</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Finance">Finance</option>
                        <option value="Human Resources">Human Resources</option>
                        </select>
                    </label>
                    <label className="mt-6 xl:mt-10">Type of Investor
                        <select name="Select your preference" className="block border w-full px-2 py-2 xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] xl:mt-3">
                        <option value="Select your preference" className="">Select your preference</option>
                        <option value="angel-investor">Angel Investor</option>
                        <option value="peer-to-peer-lender">Peer-to-Peer Lender</option>
                        <option value="Venture-Capitalists">Human Resources</option>
                        </select>
                    </label>
                    <label className="mt-6 xl:mt-10">Preferred Investment Rate in US Dollars
                        <select name="Preferred Investment rate in US Dollars" className="block border w-full px-2 py-2 xl:px-5 xl:py-4 rounded-lg border-[#0898A0] bg-[#FFFFF0] xl:mt-3">
                        <option value="Select your investment rate" className="">Select your investment rate</option>
                        <option value="0-10%">0-10%</option>
                        <option value="10-20%">10-20%</option>
                        <option value="20-30%">20-30%</option>
                        <option value="15-20%">40-50%</option>
                        <option value="50-60%">50-60%</option>
                        <option value="60-70%">60-70%</option>
                        <option value="70-80%">70-80%</option>
                        <option value="80-90%">80-90%</option>
                        <option value="90-1000%">90-100%</option>
                        </select>
                    </label>
                    <label>
                        <span className="block mt-6 xl:mt-10">Brief Description of Your Business</span>
                        <textarea className="w-full border border-teal-600 mt-3 rounded-lg py-20 px-3 border-[#0898A0] bg-[#FFFFF0]"></textarea>
                    </label>
                    <button className="rounded-lg  w-32 text-white mx-auto mt-8 xl:mt-28 py-2 bg-[#0898A0] mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-18">Submit</button>
                </form>
                </div>
            <div className="mt-2">
                    <Footer />
            </div>
        </div>
    )
}