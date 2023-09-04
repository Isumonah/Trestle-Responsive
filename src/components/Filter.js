
export default function Filter(){
    return(
        <div className="filter flex text-sm flex-wrap xl:items-start text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]">
                <select name="category" id="category" className="my-3 mr-4 py-2 lg:px-3 w-[110px] sm:w-auto">
                    <option value="Category">Category</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="fresh-finds">Fresh Finds</option>
                    <option value="Paycycle">Paycycle</option>
                </select>
                <select name="sector" id="sector" className="my-3 mr-4 lg:px-3 w-[110px] sm:w-auto">
                    <option value="Sector">Sector</option>
                    <option value="fashion">Fashion</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="recylcling">Recycling</option>
                </select>
                <select name="funding-stage" id="funding-stage" className="my-3 mr-4 py-2 lg:px-3 xl:px-0 w-[110px] sm:w-auto">
                    <option value="Funding Stage">Funding Stage</option>
                    <option value="Initial-Stage">Initial Stage</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select> 
                <div className="relevance-div flex">
                    <p className="my-3 mr-2 sm:text-sm md:text-base lg:text-xl xl:text-2xl xl:mr-4 self-center">Sort By: </p>
                    <select name="relevance" id="relevance" className="py-2 lg:px-3 m-3 w-[110px] sm:w-auto ">    
                        <option value="relevance">Relevance</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
    )
}