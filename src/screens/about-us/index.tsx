import { PageLayout } from "@/shared/layouts/page";
import { CenteringLayout } from "@/shared/layouts/centering";
import { Box } from "@/shared/ui/box";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import logo from "@/shared/assets/logo/logo.svg";

export const AdvantagesScreen = () => {
  return (
    <PageLayout className=" bg-[#E0E7EF]">
      <CenteringLayout
        forPage={false}
        className="flex flex-col w-full gap-[20px] h-[520px]"
      >
        <Box className="bg-white px-[30px] font-medium text-[42px] text-[#003366]  rounded-[16px] h-[125px] flex items-center w-full">
          <h2 className="uppercase">advantages</h2>
        </Box>
        <div className="flex gap-[20px]  justify-between w-full h-[275px]">
          <Box className="h-full p-[30px] gap-[12px] w-full flex flex-col items-center justify-center rounded-[14px] bg-white">
            <Image src={logo} alt={"item1"} className={"h-[64px] w-[64px]"} />
            <span className="flex flex-col gap-[12px] items-center text-center justify-center">
              <h4 className="uppercase  text-[#003366] text-center text-[24px] font-medium">
                Launch Your Coaching Career
              </h4>
              <p className="text-[18px] font-normal">
                A comprehensive course track to ICF credentialing
              </p>
            </span>
          </Box>
          <Box className="h-full p-[30px] gap-[12px] w-full flex flex-col items-center justify-center rounded-[14px] bg-white">
            <Image src={logo} alt={"item1"} className={"h-[64px] w-[64px]"} />
            <span className="flex flex-col gap-[12px] items-center text-center justify-center">
              <h4 className="uppercase  text-[#003366] text-center text-[24px] font-medium">
                Launch Your Coaching Career
              </h4>
              <p className="text-[18px] font-normal">
                A comprehensive course track to ICF credentialing
              </p>
            </span>
          </Box>
          <Box className="h-full p-[30px] gap-[12px] w-full flex flex-col items-center justify-center rounded-[14px] bg-white">
            <Image src={logo} alt={"item1"} className={"h-[64px] w-[64px]"} />
            <span className="flex flex-col gap-[12px] items-center text-center justify-center">
              <h4 className="uppercase  text-[#003366] text-center text-[24px] font-medium">
                Launch Your Coaching Career
              </h4>
              <p className="text-[18px] font-normal">
                A comprehensive course track to ICF credentialing
              </p>
            </span>
          </Box>
        </div>
      </CenteringLayout>
    </PageLayout>
  );
};
