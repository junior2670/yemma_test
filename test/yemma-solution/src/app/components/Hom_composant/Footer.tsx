import Image from "next/image"

export default function Footer(){
  return(
   <>{/**haut du footer */}
    
    <hr className="text-slate-100 my-[30px]"/>
      <div className="flex justify-between">
            <div className="space-y-[15px] ml-[20px] md:ml-[100px] px-4 md:px-0 ">
              <a href="" className="flex items-center text-lg text-black font-normal space-x-[7px]" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" className="text-3xl max-sm:text-2xl ">
                  <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35M11 6c2.7614 0 5 2.2386
                  5 5m3 0c0 4.4183-3.5817
                  8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8">
                  </path>
                </svg>
                <p className="max-sm:text-[15px] ">Yemma-solution</p>
              </a>
              <p className="text-[15px] max-sm:text-[12px]">
                Des talents qui comptent. Une solution qui <br  /> 
                <span className="md:hidden"> </span>comprend.
              </p>
              <div className="flex space-x-[10px]">
                <a href="" className="">
                  <Image
                    src="/icone/fb.png"
                    alt="image vitrine"
                    width={25}
                    height={25}
                    className=""
                  />
                </a>
                <a href="" className="">
                  <Image
                    src="/icone/lk.png"
                    alt="image vitrine"
                    width={25}
                    height={25}
                    className=""
                  />
                </a>
              </div>
        </div>
        <div>
            <a href="" className="mr-[100px] max-sm:mr-[30px] max-md:mr-[30px] max-lg:mr-[60px] max-sm:mr-[30px] max-sm:p-2 items-center  p-3 bg-orange-700/70 text-white rounded-md max-sm:text-[12px]">Constact us</a>
        </div>
    </div>
      <div className="flex justify-center px-4">
        <hr className="text-slate-100  my-[30px] w-full max-w-[1200px]"/>
      </div>
      {/**bas du footer  */}
      <div className="flex flex-col lg:flex-row justify-between mb-[20px] space-y-4 md:space-y-0 px-4 md:px-0 max-lg:space-y-[15px] ">
        <div className="text-[15px] ml-[20px] md:ml-[100px] max-sm:text-[13px] ">
          <p>
            Copyright © 2025 Your company. All rights reserved.
          </p>
        </div>
        <div className="text-[15px] md:ml-[100px]  space-x-[10px] ml-[20px] md:ml-0 mr-0 md:mr-[120px]  max-sm:text-[13px]">
          <a href="" className="hover:underline"> About us</a>
          <a href="" className="hover:underline">Terms and conditions</a>
          <a href="" className="hover:underline">Privacy</a>
        </div>
      </div>
    </>
  )
}