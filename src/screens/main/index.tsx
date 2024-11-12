import { PageLayout } from "@/shared/layouts/page";
import { CenteringLayout } from "@/shared/layouts/centering";
import { Box } from "@/shared/ui/box";
import { Button } from "@/shared/ui/button";
import Image from "next/image";

export const MainScreen = () => {
  return (
    <PageLayout>
      <CenteringLayout
        forPage={false}
        className="h-dvh w-full lg:gap-0 flex-col-reverse gap-4 my-[50px] lg:flex-row justify-between
         lg:h-[520px]"
      >
        <Box className="bg-[#003366]  justify-between md:px-[80px] py-[100px] px-[20px] h-full flex flex-col w-full lg:w-[66%] rounded-[20px]">
          <div className="flex  flex-col gap-y-4">
            <h1 className="text-[48px] font-poppins font-semibold uppercase text-white leading-[57px]">
              Welcome to <br />
              Dickens Executive <br />
              Coaching Academy
            </h1>
            <h3 className="text-white font-roboto text-[18px] font-normal">
              Your resource of choice for coaching education
            </h3>
          </div>
          <Button
            variant={"secondary"}
            className="font-roboto w-fit px-[20px] py-[14px]"
          >
            <p className="text-[#003366] text-[20px]">Explore Courses</p>
          </Button>
        </Box>
        <Box className="bg-[#003366] h-full lg:max-w-[420px] object-cover object-center w-full lg:w-[32.2%] overflow-hidden  rounded-[20px]">
          <Image
            width={420}
            height={700}
            className={"h-full w-full object-center object-cover bg-black"}
            src={
              "https://s3-alpha-sig.figma.com/img/3161/5c4e/70dd47e1cd702602a41331452e958378?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGdyPvubBXi8iiK7funGVmE3qBzIHLkJ~ijwBc1r0K6HqmAFCHC3HzFq2q1-q-GHRCqCIXyEcmRAQd4V7IrhDptQtR-7BQ3L8lH3o4jdWYnmVkymFF92zIWais3Ufn2UMNepWFebjJrxjk5tG5TOo5wNHmn45hZIFx1S5bH68PfewSnLteAmhVDeI-rFqUKHgHq0~wNxZ5gL48KTnU41KiTy-KKZDdngIHLfDoYIDmsWA8msh0IjtRWRT6PufUqtVdx~28aXfOE1txYbB5Cun~8eC9GeV4sw4KJKIUohCPmKSbwg9YVqhmPgbz9gwDBrbBQaN5ToncBXTBt8g5fAZQ__"
            }
            alt={"dsa"}
          />
        </Box>
      </CenteringLayout>
    </PageLayout>
  );
};
