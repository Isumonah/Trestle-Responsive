
import { useState } from "react"
import { NavLink } from "react-router-dom"
import {RxHamburgerMenu} from "react-icons/rx"
import {FaTimes} from "react-icons/fa"


export default function Nav(){
    document.querySelectorAll(".nav-pages-link").forEach(link => {
        if(link.href === window.location.href){
            link.setAttribute("aria-current", "page")
        }
    })
    
    const [navState, setNavState] = useState(false)


    return (
      <header className="nav sticky top-0 left-0 bg-[#FFFFF0] z-[99]">
            <div className="w-11/12 lg:w-10/12 mx-auto py-1 sm:py-2 lg:py-4">
                <div className="flex justify-between items-center ">
                    <h4 className="trestle-link">
                    <a href="/" className="logo border-b-2 lg:border-b-4 border-[#0898A0] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[35px]">TRESTLE</a>
                    </h4>
                    <div  className="login-signup text-[13px] sm:text-[17px] md:text-[19px] lg:text-[22px] xl:text-[24px]"><button className="nav-login rounded py-[2px] p-1"><a href="sign-in">LOG IN</a></button>
                    <button className="nav-signup py-[2px] rounded ml-2 lg:ml-4 p-1"><a href="sign-up">SIGN UP</a></button>
                    </div>
                    <RxHamburgerMenu className={`text-[#0898A0] w-10 h-10 px-2 py-1 sm:hidden rounded`} onClick={() => {
                        setNavState(!navState)
                    }} />
                </div>
                <nav className={`nav-pages ${navState ? "h-[100vh] right-0 w-1/2 bg-[#D9D9D9] mt-1" : "h-0 right-[-100%]"} sm:w-full sm:bg-[#FFFFF0] absolute sm:relative transition-all overflow-hidden sm:mt-2 md:mt-4 sm:h-auto sm:left-0 sm:pb-2`}>
                    <div className="flex justify-end mr-4 mt-2">
                        <FaTimes className="h-4 sm:hidden" onClick={() => {
                            setNavState(false)
                        }}/>
                    </div>
                    <ul className={`flex flex-col space-y-4 sm:space-y-0 pl-4 pr-2 sm:pl-0 sm:pr-0 sm:pt-0 h-1/2 sm:h-auto sm:flex-row sm:justify-between sm:relative w-full text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[27px] text-gray-700 font-bold sm:font-light sm:text-[#908989] uppercase sm:normal-case`}>
                        <li>
                            <a href="/about" className="about-us nav-pages-link ">About Us</a>
                        </li>
                        <li>
                            <a className="nav-pages-link" href="/invest">Invest</a>
                        </li>
                         <li>
                            <a className="nav-pages-link" href="/find-investor">Find An Investor</a>
                        </li>
                        <li>
                            <a className="nav-pages-link" href="/events">Events</a>
                        </li>
                        <li>
                            <a className="nav-pages-link" href="/success-stories">Success Stories</a>
                        </li>
                    </ul>
                </nav>
            </div>
      </header>
    );
}