"use client";
import React from "react";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

//next image
import Image from "next/image";

//icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../../variants";

//car date
const cars = [
  {
    type: "Hatchback",
    name: "Toyota Corolla",
    price: 29,
    stars: 3.5,
    image: "/assets/images/carSlider/car01.svg",
    info: [
      {
        icon: "assets/icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "assets/icons/carSlider/engine.svg",
        text: "1600 Hp",
      },
      {
        icon: "assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 25,
    stars: 5,
    image: "/assets/images/carSlider/car02.svg",
    info: [
      {
        icon: "assets/icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "assets/icons/carSlider/engine.svg",
        text: "1600 Hp",
      },
      {
        icon: "assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "/assets/images/carSlider/car03.svg",
    info: [
      {
        icon: "assets/icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "assets/icons/carSlider/engine.svg",
        text: "1600 Hp",
      },
      {
        icon: "assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "/assets/images/carSlider/car02.svg",
    info: [
      {
        icon: "assets/icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "assets/icons/carSlider/engine.svg",
        text: "1600 Hp",
      },
      {
        icon: "assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Hatchback",
    name: "Toyota Corolla",
    price: 29,
    stars: 3.5,
    image: "/assets/images/carSlider/car01.svg",
    info: [
      {
        icon: "assets/icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "assets/icons/carSlider/engine.svg",
        text: "1600 Hp",
      },
      {
        icon: "assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Hatchback",
    name: "Toyota Corolla",
    price: 29,
    stars: 3.5,
    image: "/assets/images/carSlider/car01.svg",
    info: [
      {
        icon: "assets/icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "assets/icons/carSlider/engine.svg",
        text: "1600 Hp",
      },
      {
        icon: "assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];
const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto container"
    >
      <Swiper
        breakpoints={{
          328: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0 ">
                <Image src={car.image} alt="" width={388} height={284} />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase ">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      {car.price}/day
                    </h3>
                  </div>
                  {/* stars */}
                  <div className="flex gap-x-2 text-accent h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                {/* car info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div className="flex flex-col items-center" key={index}>
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center mb-2 items-center">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase ">
                          {item.text}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
