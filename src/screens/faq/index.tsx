import { PageLayout } from "@/shared/layouts/page";
import { CenteringLayout } from "@/shared/layouts/centering";
import { Accordion } from "@/screens/faq/accordion";
import { Box } from "@/shared/ui/box";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
const accordionItems = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Bibendum proin",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque sed amet.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Bibendum proin",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque sed amet.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Bibendum proin",
    content:
      "Turpis et sit tincidunt eget. Dolor nisl fermentum cras erat nisl facilisis.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Bibendum proin",
    content:
      "Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque sed amet.",
  },
];

export const FAQScreen = () => {
  return (
    <PageLayout>
      <CenteringLayout
        forPage={false}
        className="flex w-full flex-col text-white gap-[20px] py-[50px] h-full"
      >
        <div className="w-full text-black">
          <h2 className="font-poppins uppercase text-[#003366] font-medium text-[42px]">
            FAQ
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-[20px]">
          <div className="lg:w-[57%] w-full justify-between gap-6 flex flex-col">
            <Accordion items={accordionItems} />
          </div>
          <Box className="lg:w-[40%] w-full  items-center justify-center gap-[40px] flex flex-col p-[60px] bg-[#003366] text-white rounded-[14px]">
            <h4 className="font-poppins text-white font-medium text-[24px] text-center">
              ASK YOUR QUESTION
            </h4>
            <div className="w-full h-[1px] bg-[#FBFBFB]" />
            <form className="gap-[20px] w-full flex flex-col">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <textarea
                className="resize-none h-[115px] w-full p-3.5 border  text-black rounded-[4px]"
                placeholder="Enter Your Question Here ....."
              />
            </form>
            <Button variant="secondary" className=" py-[14px] w-fit px-[30px]">
              <p className="text-[#003366] text-[20px]">Send your message</p>
            </Button>
          </Box>
        </div>
      </CenteringLayout>
    </PageLayout>
  );
};
