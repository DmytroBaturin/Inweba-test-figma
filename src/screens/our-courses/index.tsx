import { CenteringLayout } from "@/shared/layouts/centering";
import { PageLayout } from "@/shared/layouts/page";
import { Box } from "@/shared/ui/box";
import info from "./info.json";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import star from "@/shared/assets/StarOnStick.svg";
import up from "@/shared/assets/Lineup.svg";
import check from "@/shared/assets/Icon.svg";

export const OurCoursesScreen = () => {
  return (
    <PageLayout>
      <CenteringLayout forPage={false}>
        <div className="gap-[20px] w-full flex flex-col py-[50px]">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-[42px] regular-text-color font-poppins uppercase font-medium">
              Our courses
            </h2>
          </div>
          {info.map((item, i) => (
            <Box
              key={i}
              className="border-[2px] gap-[40px] flex flex-col  p-[40px] rounded-[20px] border-[#003366] w-full"
            >
              <div className="flex justify-between items-center">
                <div className="w-full gap-[14px] flex-wrap flex items-center">
                  <div className="bg-[#003366] w-[60px] h-[60px] justify-center flex items-center rounded-[12px]">
                    <Image src={star} alt={"star"} />
                  </div>
                  <h2 className="text-[#003366] uppercase text-[24px] font-medium">
                    {item.title}
                  </h2>
                </div>
                <div className="flex cursor-pointer items-center gap-[10px]">
                  <div className="bg-[#003366] w-[40px] h-[40px] justify-center flex items-center rounded-full">
                    <Image src={up} alt={"up"} />
                  </div>
                  <span className="uppercase  text-[20px] font-medium font-roboto">
                    Details
                  </span>
                </div>
              </div>
              <div className="flex gap-[12px]">
                {item.labels.map((label) => (
                  <label
                    className="py-[10px] px-[16px] bg-[#EFF3F7] rounded-[45px]"
                    key={label.text}
                  >
                    <p className="text-[18px] font-medium">{label.text}</p>
                  </label>
                ))}
              </div>
              <div className="flex flex-col gap-[24px]">
                <h4 className="text-[#003366] uppercase font-medium text-[20px]">
                  {item.models.description}
                </h4>
                <div className="flex flex-col gap-[16px]">
                  {item.models.lvl.map((lvl) => (
                    <div className="flex flex-col gap-[8px]">
                      <h6 className="font-medium font-roboto text-[18px] text-[#343434]">
                        {lvl.title}
                      </h6>
                      <ul className="flex flex-col gap-[4px]">
                        {lvl.include.map((include) => (
                          <li className="flex items-center gap-4">
                            <Image
                              height={24}
                              width={24}
                              src={check}
                              alt={"star"}
                              className="w-[24px] h-[24px]"
                            />
                            <p className="text-[18px] font-roboto">{include}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <span className="uppercase font-medium flex text-[30px] text-[#003366]">
                  {item.price.title} | {item.price.text}
                </span>
              </div>
              <Button className="w-[209px] py-[14px] px-[30px]">
                <p className="text-white text-[20px] font-roboto">JOIN</p>
              </Button>
            </Box>
          ))}
        </div>
      </CenteringLayout>
    </PageLayout>
  );
};
