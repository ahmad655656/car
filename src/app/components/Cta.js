"use client";

//next image
import Image from "next/image";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../../variants";

import React from "react";

const Cta = () => {
  return (
    <section className="flex pt-24 xl:pt-48 items-end pb-0 bg-[#b2b7c2]/10 overflow-hidden" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center ">
          {/* text */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0 ">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none ">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit road with ease
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-12"
              >
                Our app is available on both iOS and Android devices. Our app is
                available on both iOS and Android devices.
              </motion.p>
              {/* btns */}
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start "
              >
                <button className="btn-cta">
                  <Image
                    src={"/assets/icons/buttons/google-play.svg"}
                    width={132}
                    alt=""
                    height={36}
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    src={"/assets/icons/buttons/app-store.svg"}
                    width={132}
                    alt=""
                    height={36}
                  />
                </button>
              </motion.div>
            </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image
              src={"/assets/images/cta/phone.svg"}
              width={320}
              height={650}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
