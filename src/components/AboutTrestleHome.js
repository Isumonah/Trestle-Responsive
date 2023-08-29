import groupLadies from "../images/group-ladies.png"

export default function AboutTrestle(){
    return(
        <div className="about-trestle about-trestle-home shadow-[0 0 4px rgba(0, 0, 0, 0.25)] py-6 xl:py-12 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[22px] ">
            <div className="about-trestle-writeup about-trestle-home-writeup text-center">
                <h3 className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] xl:text-[26px]">What is Trestle?</h3>
                <p className="w-10/12 xl:w-8/12 mx-auto mt-3">
                    Trestle is an online platform that allows small and medium business owners get funded in their various business by investors , providing them with the necessary funding and resources they need for their services.
                </p>
                <button className="learn-more-button px-3 py-2 rounded-lg mt-5">
                    <a className="opacity-90">Learn more about us
                    </a>
                </button>
            </div>
            <div className="about-trestle-img about-trestle-home-img mt-8">
                <img  className="w-4/6 h-3/4 xl:w-3/5 mx-auto" src={groupLadies} alt="a group of ladies" />
            </div>
        </div>
    )
}