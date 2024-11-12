import { PageLayout } from "@/shared/layouts/page";
import { CenteringLayout } from "@/shared/layouts/centering";
import { Box } from "@/shared/ui/box";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import logo from "@/shared/assets/logo/logo.svg";
import up from "@/shared/assets/Lineup.svg";

export const AboutUsScreen = () => {
  return (
    <PageLayout>
      <CenteringLayout forPage={false}>
        <div className="gap-[20px] flex flex-col py-[50px]">
          <div className="flex flex-wrap justify-between items-center w-full">
            <h2 className="text-[42px] regular-text-color uppercase font-poppins font-medium">
              About Us
            </h2>
            <div className="flex cursor-pointer items-center gap-[10px]">
              <div className="bg-[#003366] w-[40px] h-[40px] justify-center flex items-center rounded-full">
                <Image src={up} alt={"up"} />
              </div>
              <span className="uppercase text-[20px] font-medium font-roboto">
                Learn More
              </span>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex rounded-[14px] overflow-hidden items-center justify-center">
              <Image
                width={420}
                height={700}
                className={"h-full w-full object-center object-cover"}
                src={
                  "https://s3-alpha-sig.figma.com/img/816c/ef7a/1e5c69326c24ef3a0671a2fcb12c6476?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EN-9agecRTJr5zn9HIKeDIdOnN9mBe6b3W3lu7Kce9Rv7z3TyD-IiJFQIWgbAE4MLNaloVONzCZaQnY-IqnGlSWi7cug-4H~WuaVnTxXfonrA-0NK06wrVsBkCIJtqg5wdhg~gPmoK9rEMd5gAN~w~ObEcT8A7Rujx5jCKC8Kgdmt6RRkpxEoVDmxd4r54UFnAUYVC~SH4nNjfK62yu-LS17ZSEch-5W3Hn7XsAHctN34raartKVgYBgtKgiKD912NVWI1Oyc2wGo7wHwVYWL50Dosu5XNwBNPU6dXPj-VeZWyR1GfaAOaF037PZ~lzxzwu0cIE4lQHU2edp9t924w__"
                }
                alt={"dsa"}
              />
            </div>
            <Box className="space-y-6">
              <Box className="bg-[#003366] gap-[21px] flex flex-col rounded-[14px] p-[30px]">
                <h3 className="text-white font-medium uppercase text-[36px]">
                  Hi, we’re Dickens Executive Coaching Academy
                </h3>
                <p className="text-white font-roboto font-light text-[18px]">
                  Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor
                  id proin rhoncus elit. Orci lacus pellentesque ultrices ut
                  aliquet non fusce faucibus dictumst. Massa sit aliquam quam
                  urna nam. Maecenas massa varius scelerisque pellentesque.
                  Vestibulum ut rhoncus iaculis eleifend. Euismod cras et tortor
                  at pellentesque duis cursus donec.
                </p>
              </Box>
              <div className="grid h-[210px] grid-cols-2 gap-4">
                <Box className="bg-[#003366] items-center flex-col flex justify-center text-white p-6 rounded-[14px] text-center">
                  <h2 className="text-[42px] text-white font-poppins font-medium">
                    5+
                  </h2>
                  <p className="text-white  max-w-[140px]">
                    years on the educational market
                  </p>
                </Box>
                <Box className="bg-[#003366]  items-center flex  flex-col justify-center h-[210px] text-white p-6 rounded-[14px] text-center">
                  <h2 className="text-[42px] text-white font-poppins font-medium">
                    1000+
                  </h2>
                  <p className="text-white max-w-[54px]">
                    successful graduates
                  </p>
                </Box>
              </div>
            </Box>
          </div>
        </div>
      </CenteringLayout>
    </PageLayout>
  );
};
