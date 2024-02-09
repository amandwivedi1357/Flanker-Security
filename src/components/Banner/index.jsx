import React from 'react'
import { Img,Button,Text } from 'components';
const Banner = ()=> {
  return (
    <div className="font-poppins h-[748px] md:h-[857px] mt-[109px] md:px-5 relative w-full">
          <Img
            className="h-[748px] m-auto object-cover w-full"
            src="images/img_rectangle22077.png"
            alt="rectangle22077"
          />
          <div className="absolute bg-white-A700 flex flex-col gap-[52px] h-max inset-y-[0] items-start justify-center my-auto p-[60px] md:px-10 sm:px-5 right-[7%] rounded w-[43%]">
            <div className="flex flex-col items-center justify-start mt-[3px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <a
                  href="javascript:"
                  className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                >
                  <Text size="txtRedHatDisplayRomanMedium14">contact us</Text>
                </a>
                <Text
                  className="mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
                  size="txtPoppinsRegular36"
                >
                  Have Questions?
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
                  size="txtPoppinsSemiBold36"
                >
                  Get in Touch!
                </Text>
                <div className="font-lato sm:gap-5 gap-[26px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[37px] w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <input
  type="text"
  className="border-b border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
  placeholder="Full name"
/>


                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <input
  type="text"
  className="border-b border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
  placeholder="Company name"
/>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <input
  type="email"
  className="border-b border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
  placeholder="Email Id"
/>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <input
  type="tel"
  className="border-b border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
  placeholder="Phone Number"
/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-3 items-center justify-start mb-[3px] w-[32%] md:w-full">
              <Button className="border hover:bg-transparent  border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
                get in touch
              </Button>
            </div>
          </div>
        </div>
  )
}
export {Banner}