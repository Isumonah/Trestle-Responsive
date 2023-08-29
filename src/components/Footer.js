
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linkedin.png"
import youtube from "../images/youtube.png"

export default function Footer(){
    return(
        <div className="footer py-6 justify-between text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]">
            <div className="footer-explore-resources-contact flex justify-evenly">
                <div className="footer-explore text-xs sm:text-base">
                    <h3 className="">EXPLORE</h3>
                    <p className="mt-1">Opportunities</p>
                    <p>For Businesses</p>
                    <p>Portfolio</p>
                </div>
                <div className="footer-resources text-xs sm:text-base">
                    <h3>RESOURCES</h3>
                    <p className="mt-1">FAQs</p>
                    <p>Blog</p>
                    <p>News</p>
                </div>
                <div className="footer-connect text-xs sm:text-base">
                    <h3>CONNECT</h3>
                    <p className="mt-1">Contact Us</p>
                    <div className="footer-social-media mt-2">
                        <ul className="flex space-x-2 items-center">
                            <li className="">
                                <img className="w-6 md:w-8 transform hover:scale-[1.1]" src={twitter} alt="twitter-icon" />
                                <a href="https://twitter.com/home"></a>
                                </li>
                            <li>
                                <img className="w-6 md:w-8 transform hover:scale-[1.1]"  src={instagram} alt="instagram-icon" />
                                <a href="https://www.instagram.com/"></a>
                            </li>
                            <li>
                                <img className="w-6 md:w-8 transform hover:scale-[1.1]"  src={linkedIn} alt="linkedin-icon" />
                                <a href="https://www.linkedin.com/in"></a>
                            </li>
                            <li>
                                <img className="w-6 md:w-8 transform hover:scale-[1.1]"  src={youtube} alt="youtube-icon" />
                                <a href="https://www.youtube.com/"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright-terms flex flex-wrap mt-8 lg:mt-12 justify-between text-xs sm:text-sm md:text-base w-10/12 mx-auto">
                <div className="copyright-div flex space-x-1 sm:space-x-2">
                    <p> &#169; </p>
                    <p> 2023 </p>
                    <p> Trestle </p>
                    <p> All Rights Reserved</p>
                </div>
                <div className="terms-div flex space-x-1 sm:space-x-2">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}