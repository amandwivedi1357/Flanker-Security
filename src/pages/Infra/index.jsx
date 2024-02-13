import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Infra = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="md:h-[848px] h-[875px] md:px-5 relative w-full">
          <div className="absolute h-[848px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[848px] m-auto object-cover w-full"
              src="images/img_rectangle21985_1.png"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto">
              <Text
                className="capitalize leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[70%]"
                size="txtPoppinsBold60"
              >
                Security service for your personal safety
              </Text>
              <Text
                className="text-[15px] text-center text-white-A700 tracking-[0.50px]"
                size="txtLatoRegular15"
              >
                Trust the experts with your safety
              </Text>
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-start p-[82px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start max-w-[1239px] mb-[172px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[13px] w-[67%] md:w-full">
              <Img
                className="h-[488px] sm:h-auto object-cover w-full"
                src="images/img_rectangle22116.png"
                alt="rectangle22116"
              />
              <Text
                className="mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
                Security Infrastructure{" "}
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[15px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
                Drones, or Unmanned Aerial Vehicles (UAVs), have rapidly evolved
                from recreational gadgets to transformative tools across various
                industries. These unmanned aircraft are equipped with cameras,
                sensors, and other technologies, offering unprecedented
                capabilities in areas such as surveillance, mapping,
                agriculture, and emergency response.
              </Text>
              <Text
                className="mt-[30px] text-black-900_cc text-xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Applications of Drones:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-base font-bold"> Surveillance and Security:</span>
                  <br />
                  Drones provide a bird&#39;s-eye view, enhancing surveillance
                  capabilities for law enforcement, border control, and private
                  security firms.
                  <br />
                  
                  Monitoring large events, critical infrastructure, and
                  expansive areas becomes more efficient and cost-effective.
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-base font-bold">
                  <>
                    Mapping and Surveying:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]">
                  <>
                    Drones equipped with advanced mapping technologies
                    contribute to accurate and rapid surveying of terrains,
                    construction sites, and geographical features.
                    <br />
                    This aids in disaster response, and infrastructure
                    development.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-base font-bold">
                  <>
                  Agriculture:
                    <br />
                  </>
                </span>
                <span className="leading-[23.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Precision agriculture employs drones for crop monitoring, assessing field health, and optimising resource utilization.
                    <br />
                    Drones equipped with sensors can gather valuable data on soil conditions and crop health.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-base font-bold">
                  <>
                    Mapping and Surveying:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]">
                  <>
                    Drones equipped with advanced mapping technologies
                    contribute to accurate and rapid surveying of terrains,
                    construction sites, and geographical features.
                    <br />
                    This aids in disaster response, and infrastructure
                    development.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-base font-bold">
                  <>
                    Mapping and Surveying:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]">
                  <>
                    Drones equipped with advanced mapping technologies
                    contribute to accurate and rapid surveying of terrains,
                    construction sites, and geographical features.
                    <br />
                    This aids in disaster response, and infrastructure
                    development.
                  </>
                </span>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[49px] md:px-10 sm:px-5 rounded w-full">
                <div className="flex flex-col items-start justify-start mb-2 w-[89%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_e5 sm:text-xl tracking-[0.24px]"
                      size="txtPoppinsSemiBold24"
                    >
                      Get in Touch!
                    </Text>
                    <div className="flex flex-col font-lato items-center justify-start mt-7 w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        <span className="text-gray-600_a0 font-lato text-left font-normal">
                          Full name{" "}
                        </span>
                        <span className="text-red-900_a0 font-lato text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        <span className="text-gray-600_a0 font-lato text-left font-normal">
                          Email Id{" "}
                        </span>
                        <span className="text-red-900_a0_01 font-lato text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Company Name
                      </Text>
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Phone Number
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[50px] w-[66%] md:w-full">
                    <Button className="border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
                      get in touch
                    </Button>
                  </div>
                  <Text
                    className="mt-[87px] text-2xl md:text-[22px] text-gray-900_e5 sm:text-xl tracking-[0.24px]"
                    size="txtPoppinsSemiBold24"
                  >
                    Contact Info
                  </Text>
                  <div className="flex flex-row font-opensans gap-[13px] items-start justify-start mt-[38px] w-[91%] md:w-full">
                    <Img
                      className="h-[30px] mt-[3px] w-[30px]"
                      src="images/img_location.svg"
                      alt="location"
                    />
                    <Text
                      className="leading-[24.00px] text-base text-black-900_b2 tracking-[0.25px] w-4/5 sm:w-full"
                      size="txtOpenSansRomanRegular16"
                    >
                      High-quality coal that comes from.
                    </Text>
                  </div>
                  <div className="flex flex-row font-opensans gap-3 items-center justify-start mt-[30px] w-[67%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_phone.svg"
                      alt="phone"
                    />
                    <Text
                      className="text-base text-black-900_b2 tracking-[0.25px]"
                      size="txtOpenSansRomanRegular16"
                    >
                      +84445 67892
                    </Text>
                  </div>
                  <div className="flex flex-row font-opensans gap-[17px] items-start justify-start ml-1.5 md:ml-[0] mt-[33px] w-[87%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-base text-black-900_b2 tracking-[0.25px]"
                      size="txtOpenSansRomanRegular16"
                    >
                      @flankersecurity.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[29px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Infra;