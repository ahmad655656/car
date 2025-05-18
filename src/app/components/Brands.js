"use client";

import React from "react";
//image
import Image from "next/image";

//framer
import { motion } from "framer-motion";

//variant
import { fadeIn } from "../../../variants";
const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center ">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        {/* brand wrapper */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between ">
          <div>
            <Image
              src={"/assets/icons/brands/ford.svg"}
              alt=""
              width={85}
              height={32}
            />
          </div>
          <div>
            <Image
              src={"/assets/icons/brands/mercedes.svg"}
              alt=""
              width={60}
              height={62}
            />
          </div>
          <div>
            <Image
              src={"/assets/icons/brands/audi.svg"}
              alt=""
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"/assets/icons/brands/bmw.svg"}
              alt=""
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"/assets/icons/brands/vw.svg"}
              alt=""
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"/assets/icons/brands/skoda.svg"}
              alt=""
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"/assets/icons/brands/mazda.svg"}
              alt=""
              width={60}
              height={60}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
