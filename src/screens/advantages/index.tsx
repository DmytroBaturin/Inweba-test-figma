import { PageLayout } from "@/shared/layouts/page";
import { CenteringLayout } from "@/shared/layouts/centering";
import { Box } from "@/shared/ui/box";
import Image from "next/image";
import magazine from "@/shared/assets/Magazine.svg";
import light from "@/shared/assets/Light.svg";
import rocket from "@/shared/assets/Rocket.svg";

export const AdvantagesScreen = () => {
  return (
    <PageLayout className=" bg-[#E0E7EF]">
      <CenteringLayout
        forPage={false}
        className="flex flex-col w-full gap-[20px] lg:h-[520px] py-[50px] h-full"
      >
        <Box className="bg-white px-[50px] font-medium text-[42px] text-[#003366]  rounded-[16px] h-[125px] flex items-center w-full">
          <h2 className="uppercase regular-text-color font-poppins">
            advantages
          </h2>
        </Box>
        <div className="flex gap-[20px] flex-col lg:flex-row justify-between w-full lg:h-[275px]">
          <Box className="h-full p-[30px] gap-[12px] w-full flex flex-col items-center justify-center rounded-[14px] bg-white">
            <Image src={rocket} alt={"item1"} className={"h-[64px] w-[64px]"} />
            <span className="flex flex-col gap-[12px] items-center text-center justify-center">
              <h4 className="uppercase  text-[#003366] text-center text-[24px] font-medium">
                Launch Your Coaching Career
              </h4>
              <p className="text-[18px] text-[#343434] font-roboto font-normal">
                A comprehensive course track to ICF credentialing
              </p>
            </span>
          </Box>
          <Box className="h-full p-[30px] gap-[12px] w-full flex flex-col items-center justify-center rounded-[14px] bg-white">
            <Image src={light} alt={"item1"} className={"h-[64px] w-[64px]"} />
            <span className="flex flex-col gap-[12px] items-center text-center justify-center">
              <h4 className="uppercase  text-[#003366] text-center text-[24px] font-medium">
                Coaching in the workplace
              </h4>
              <p className="text-[18px] text-[#343434] font-roboto font-normal">
                Serve as a thought leader within your organization
              </p>
            </span>
          </Box>
          <Box className="h-full p-[30px] gap-[12px] w-full flex flex-col items-center justify-center rounded-[14px] bg-white">
            <Image
              src={magazine}
              alt={"item1"}
              className={"h-[64px] w-[64px]"}
            />
            <span className="flex flex-col gap-[12px] items-center text-center justify-center">
              <h4 className="uppercase  text-[#003366] text-center text-[24px] font-medium">
                Continuing Coaching Education
              </h4>
              <p className="text-[18px] text-[#343434] font-roboto font-normal">
                Beginner or a seasoned pro, you'll find a course right for you
              </p>
            </span>
          </Box>
        </div>
      </CenteringLayout>
    </PageLayout>
  );
};
