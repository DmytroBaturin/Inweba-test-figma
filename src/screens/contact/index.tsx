import { PageLayout } from "@/shared/layouts/page";
import { CenteringLayout } from "@/shared/layouts/centering";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

export const ContactUsScreen = () => {
  return (
    <PageLayout tag={"section"} className="bg-[#003366]">
      <CenteringLayout
        forPage={false}
        className="flex-col w-full gap-[20px] lg:h-[350px] py-[50px] lg:flex-row h-full"
      >
        <div className="flex w-full  flex-col gap-1 ">
          <h1 className="font-poppins text-white uppercase text-[42px] font-medium">
            Companies, universities, directors and presidents
          </h1>
          <p className="font-roboto  text-white max-w-[560px] flex font-light text-[18px]">
            If you'd like to learn more information about our work with large
            organizations, let's schedule a call.
          </p>
        </div>
        <div className="w-full gap-6 flex-col flex text-white">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Button className="py-[14px] px-[30px] w-fit" variant={"secondary"}>
            <p className="font-poppins text-[20px] text-[#003366]">
              Schedule a call
            </p>
          </Button>
        </div>
      </CenteringLayout>
    </PageLayout>
  );
};
