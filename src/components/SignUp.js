
export default function SignUp() {
    return (
      <div className="min-h-screen h-auto
       w-11/12 flex items-stretch lg:w-full mx-auto  text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]" id="sign-up">
        <div className=" hidden lg:block lg:[35%] bg-[#0898A0] text-[#FFFFF0] lg:flex lg:flex-col lg:items-center lg:justify-center h-auto">
          <div className="opacity-[0.9] lg:text-[26px] xl:text-[35px]">Welcome Back!</div>
          <div className="opacity-[0.9] lg:w-8/12 lg:text-[22px] xl:text-[28px] mt-6">To stay connected with us, kindly login to your personal account.</div>
          <button className="lg:text-[22px] xl:text-[25px] mt-6  text-[#0898A0] bg-[#FFFFF0] rounded px-8 py-1"><a href="/sign-in">Log in</a></button>
        </div>
        <div className="lg:w-[65%] pt-6 w-full  mb-10">
        <h4 className="pl-6">
            <a href="/" className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[35px] text-[#0898A0] hover:text-[#9d8672] border-b-2 lg:border-b-4 border-[#0898A0]">TRESTLE</a>
        </h4>
        <div className="mt-10 text-[#0898A0] ">
          <h4 className=" text-[16px] sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[30px] text-center">Create Account</h4>
           <p className="text-center w-8/12 mx-auto mt-4 font-[Roboto]">Enter your details to begin your journey with us.</p>
           <form className="mt-10  text-center font-[Roboto] w-11/12 md:w-10/12 mx-auto">
              <div className="flex flex-col w-10/12 mx-auto text-left ">
                <span className="font-semi-bold">Full Name</span>
                <input className="mt-1 border-[1.5px] border-[#0898A0] rounded px-3 py-1 placeholder:opacity-[0.8]" type="text" placeholder="Enter Full name" required></input>
              </div>
              <div className="flex flex-col w-10/12 mx-auto text-left mt-3">
                <span>Email Address</span> 
                <input className="t-1 border-[1.5px] border-[#0898A0] rounded px-3 py-1 placeholder:opacity-[0.8]" type="email" placeholder="Enter Email Address" required></input>
              </div>
              <div className="flex flex-col w-10/12 mx-auto text-left mt-3">
                <span>Password</span>
                <input className="t-1 border-[1.5px] border-[#0898A0] rounded px-3 py-1 placeholder:opacity-[0.8]" type="password" placeholder="Enter Password" required></input>
              </div>
              <div className="flex flex-col w-10/12 mx-auto text-left mt-3">
                <span>Confirm Password</span>
                <input className="t-1 border-[1.5px] border-[#0898A0] rounded px-3 py-1 placeholder:opacity-[0.8]" type="password" placeholder="Re-Enter Password" required></input>
              </div>
              <button className="mt-6 bg-[#0898A0] text-[#FFFFF0] px-4 py-1 sm:px-5 md:px-6 rounded">Sign Up</button>   
           </form>
          </div>
        </div>
      </div>
    )
  }
  