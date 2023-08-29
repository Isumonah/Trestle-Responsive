import groupLadies from "../images/group-ladies.png"

export default function AboutTrestle(){
    return(
        <div className="about-trestle py-6 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] w-11/12 lg:w-10/12 mx-auto md:flex md:space-x-5">
            <div className="about-trestle-writeup text-center w-10/12 md:w-6/12 mx-auto">
                <h3 className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[24px] xl:text-[28px]">What is Trestle?</h3>
                <p className="mt-3">
                    Trestle is an online platform that allows small and medium business owners get funded in their various business by investors , providing them with the necessary funding and resources they need for their services.
                </p>
                <button className="learn-more-button py-1 px-3 rounded mt-5 xl:py-2 px-4">
                    <a>Learn more about us
                    </a>
                </button>
            </div>
            <div className="about-trestle-img mt-8 md:w-6/12">
                <img  className="w-8/12 mx-auto" src={groupLadies} alt="a group of ladies" />
            </div>
        </div>
    )
}