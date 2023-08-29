
import { NavLink } from "react-router-dom"


export default function Nav(){
    document.querySelectorAll(".nav-pages-link").forEach(link => {
        if(link.href === window.location.href){
            link.setAttribute("aria-current", "page")
            console.log("anna")
        }
    })

    return (
      <nav className="nav">
            <div className="w-11/12 lg:w-10/12 mx-auto pt-4 lg:pt-6">
                <div className="flex justify-between text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[35px]">
                    <h4 className="trestle-link">
                    <a href="/" className="logo border-b-2 lg:border-b-4 border-[#0898A0]">TRESTLE</a>
                    </h4>
                    <div  className="login-signup text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] xl:text-[24px]"><button className="nav-login rounded py-[2px] p-1"><a href="sign-in">LOG IN</a></button>
                    <button className="nav-signup py-[2px] rounded ml-2 lg:ml-4 p-1"><a href="sign-up">SIGN UP</a></button>
                    </div>
                </div>
                <div className="nav-pages mt-3 sm:mt-4"> 
                    <ul className=" w-full flex text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[27px] justify-between text-[#908989]">
                        <li>
                            <a href="/about" className="about-us nav-pages-link">About Us</a>
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
                </div>
            </div>
      </nav>
    );
}