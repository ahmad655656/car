"use client";
import React from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//icons
import { FaQuoteLeft } from "react-icons/fa";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../../variants";
import Image from "next/image";

//data
const testimonialData = [
  {
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "John Doe",
    job: "Software Engineer",
  },
  {
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "/assets/images/testimonial/avatar.png",
    name: "John Doe",
    job: "Software Engineer",
  },
];
const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((item, index) => {
          const { message, avatar, name, job } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium ">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  className="mb-4"
                  alt=""
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlider;
