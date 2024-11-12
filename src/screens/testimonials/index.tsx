"use client";

import { PageLayout } from "@/shared/layouts/page";
import { CenteringLayout } from "@/shared/layouts/centering";
import "./slider.css";

import { Swiper, SwiperProps, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { RefAttributes, useRef, useState } from "react";
import { Box } from "@/shared/ui/box";
import Image from "next/image";
import { Button } from "@/shared/ui/button";

import star from "@/shared/assets/Star.svg";
import line from "@/shared/assets/Line.svg";
import { cn } from "@/shared/lib/utils";

const testimonials = [
  {
    name: "John Doe",
    role: "Web Developer",
    image:
      "https://s3-alpha-sig.figma.com/img/3161/5c4e/70dd47e1cd702602a41331452e958378?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGdyPvubBXi8iiK7funGVmE3qBzIHLkJ~ijwBc1r0K6HqmAFCHC3HzFq2q1-q-GHRCqCIXyEcmRAQd4V7IrhDptQtR-7BQ3L8lH3o4jdWYnmVkymFF92zIWais3Ufn2UMNepWFebjJrxjk5tG5TOo5wNHmn45hZIFx1S5bH68PfewSnLteAmhVDeI-rFqUKHgHq0~wNxZ5gL48KTnU41KiTy-KKZDdngIHLfDoYIDmsWA8msh0IjtRWRT6PufUqtVdx~28aXfOE1txYbB5Cun~8eC9GeV4sw4KJKIUohCPmKSbwg9YVqhmPgbz9gwDBrbBQaN5ToncBXTBt8g5fAZQ__",
    review:
      "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna...",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "Web Developer",
    image:
      "https://s3-alpha-sig.figma.com/img/3161/5c4e/70dd47e1cd702602a41331452e958378?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGdyPvubBXi8iiK7funGVmE3qBzIHLkJ~ijwBc1r0K6HqmAFCHC3HzFq2q1-q-GHRCqCIXyEcmRAQd4V7IrhDptQtR-7BQ3L8lH3o4jdWYnmVkymFF92zIWais3Ufn2UMNepWFebjJrxjk5tG5TOo5wNHmn45hZIFx1S5bH68PfewSnLteAmhVDeI-rFqUKHgHq0~wNxZ5gL48KTnU41KiTy-KKZDdngIHLfDoYIDmsWA8msh0IjtRWRT6PufUqtVdx~28aXfOE1txYbB5Cun~8eC9GeV4sw4KJKIUohCPmKSbwg9YVqhmPgbz9gwDBrbBQaN5ToncBXTBt8g5fAZQ__",
    review:
      "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna...",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image:
      "https://s3-alpha-sig.figma.com/img/3161/5c4e/70dd47e1cd702602a41331452e958378?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGdyPvubBXi8iiK7funGVmE3qBzIHLkJ~ijwBc1r0K6HqmAFCHC3HzFq2q1-q-GHRCqCIXyEcmRAQd4V7IrhDptQtR-7BQ3L8lH3o4jdWYnmVkymFF92zIWais3Ufn2UMNepWFebjJrxjk5tG5TOo5wNHmn45hZIFx1S5bH68PfewSnLteAmhVDeI-rFqUKHgHq0~wNxZ5gL48KTnU41KiTy-KKZDdngIHLfDoYIDmsWA8msh0IjtRWRT6PufUqtVdx~28aXfOE1txYbB5Cun~8eC9GeV4sw4KJKIUohCPmKSbwg9YVqhmPgbz9gwDBrbBQaN5ToncBXTBt8g5fAZQ__",
    review:
      "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image:
      "https://s3-alpha-sig.figma.com/img/3161/5c4e/70dd47e1cd702602a41331452e958378?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGdyPvubBXi8iiK7funGVmE3qBzIHLkJ~ijwBc1r0K6HqmAFCHC3HzFq2q1-q-GHRCqCIXyEcmRAQd4V7IrhDptQtR-7BQ3L8lH3o4jdWYnmVkymFF92zIWais3Ufn2UMNepWFebjJrxjk5tG5TOo5wNHmn45hZIFx1S5bH68PfewSnLteAmhVDeI-rFqUKHgHq0~wNxZ5gL48KTnU41KiTy-KKZDdngIHLfDoYIDmsWA8msh0IjtRWRT6PufUqtVdx~28aXfOE1txYbB5Cun~8eC9GeV4sw4KJKIUohCPmKSbwg9YVqhmPgbz9gwDBrbBQaN5ToncBXTBt8g5fAZQ__",
    review:
      "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna...",
    rating: 5,
  },

  {
    name: "Jane Smith",
    role: "Designer",
    image:
      "https://s3-alpha-sig.figma.com/img/3161/5c4e/70dd47e1cd702602a41331452e958378?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGdyPvubBXi8iiK7funGVmE3qBzIHLkJ~ijwBc1r0K6HqmAFCHC3HzFq2q1-q-GHRCqCIXyEcmRAQd4V7IrhDptQtR-7BQ3L8lH3o4jdWYnmVkymFF92zIWais3Ufn2UMNepWFebjJrxjk5tG5TOo5wNHmn45hZIFx1S5bH68PfewSnLteAmhVDeI-rFqUKHgHq0~wNxZ5gL48KTnU41KiTy-KKZDdngIHLfDoYIDmsWA8msh0IjtRWRT6PufUqtVdx~28aXfOE1txYbB5Cun~8eC9GeV4sw4KJKIUohCPmKSbwg9YVqhmPgbz9gwDBrbBQaN5ToncBXTBt8g5fAZQ__",
    review:
      "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna...",
    rating: 5,
  },
];

export const TestimonialsScreen = () => {
  const swiperRef = useRef<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length - 1);
  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <PageLayout tag={"section"}>
      <CenteringLayout
        forPage={false}
        className="flex w-full flex-col text-white gap-[20px] py-[50px] h-full"
      >
        <article className="w-full text-black">
          <h2 className="font-poppins uppercase text-[#003366] font-medium text-[42px]">
            Testimonials
          </h2>
        </article>
        <div className="w-full justify-center items-center flex flex-col gap-[50px]">
          <Swiper
            modules={[Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
            }}
            freeMode
            grabCursor
            centeredSlidesBounds
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-[265px]">
                <div className="border  border-[#003366] text-black max-w-[655px] h-full lg:h-[265px] rounded-lg p-[20px]">
                  <div className="flex h-full flex-wrap lg:flex-nowrap gap-[20px] justify-center lg:justify-start items-center">
                    <Box className="lg:w-[200px] w-full h-[225px] min-w-[225px] overflow-hidden rounded-[12px]">
                      <Image
                        width={200}
                        height={225}
                        className="h-full w-full object-center object-cover "
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    </Box>
                    <div className="w-full flex-col gap-[16px] flex">
                      <div>
                        <h3 className="text-[20px] font-medium font-poppins">
                          {testimonial.name}
                        </h3>
                        <p className="text-[16px] font-roboto text-gray-500">
                          {testimonial.role}
                        </p>
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Image
                                key={i}
                                height={22}
                                width={22}
                                src={star}
                                alt={"star"}
                              />
                            ),
                          )}
                        </div>
                      </div>
                      <p className="text-[#343434] font-roboto text-[16px]  font-normal">
                        {testimonial.review}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box className="flex items-center justify-between rounded-full border w-[220px] py-[12px] px-[14px]">
            <Button
              className={cn(
                activeIndex === 0 && "hover:bg-[#C2D1E0] bg-[#C2D1E0]",
                "rounded-full flex justify-center items-center py-0 px-0 h-[32px] w-[32px]",
              )}
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <Image
                height={22}
                width={22}
                src={line}
                alt={"star"}
                className="rotate-180"
              />
            </Button>
            <div className="w-[70px] flex items-center gap-[2px]">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Button
                  key={index}
                  className={`rounded-full transition-all duration-200 flex justify-center items-center py-0 px-0 h-[4px] ${
                    index === Math.floor(activeIndex)
                      ? "w-[24px]"
                      : "w-[13px] bg-[#C2D1E0]"
                  }`}
                  onClick={() => swiperRef.current?.slideTo(index)}
                />
              ))}
            </div>
            <Button
              className={cn(
                activeIndex === totalSlides - 1 &&
                  "hover:bg-[#C2D1E0] bg-[#C2D1E0]",
                "rounded-full flex justify-center items-center py-0 px-0 h-[32px] w-[32px]",
              )}
              onClick={handleNext}
              disabled={activeIndex === totalSlides}
            >
              <Image height={22} width={22} src={line} alt={"star"} />
            </Button>
          </Box>
        </div>
      </CenteringLayout>
    </PageLayout>
  );
};
