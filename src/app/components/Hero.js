"use client";
import React, { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../context/Search";
import Image from "next/image";

//motion
import { motion, easeInOut } from "framer-motion";

//variants
import { fadeIn } from "../../../variants";
const Hero = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10 " id="home">
      <div className="container h-full pt-20 mx-auto xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex flex-col items-center justify-center h-full xl:flex-row xl:justify-start ">
          {/* text */}
          <div>
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mt-16 text-center h1 xl:max-w-xl xl:text-left xl:mt-0"
            >
              Explore the Finest <span className="text-accent">Global</span>
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] text-center xl:text-left max-auto xl:mx-0 mb-6 xl:mb-10 "
            >
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex justify-center gap-x-3 xl:justify-start"
            >
              {/* btn appstore */}
              <button className="btn-cta">
                <Image
                  src={"/assets/icons/buttons/app-store.svg"}
                  alt=""
                  width={132}
                  height={36}
                />
              </button>
              {/* btn google */}
              <button className="btn-cta">
                <Image
                  src={"/assets/icons/buttons/google-play.svg"}
                  alt=""
                  width={132}
                  height={36}
                />
              </button>
            </motion.div>
          </div>
          {/* img car */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-[80%] h-[80%] max-h-[50vh] md:max-w-[70vw] xl:max-w-[700px] xl:max-h-[542px] xl:absolute xl:right-[15px] min-[1680px]:right-[120px] xl:top-30 "
          >
            <Image
              src={"/assets/images/hero/car.svg"}
              alt=""
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px] "
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto ">
          <motion.div
          variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"} 
            viewport={{ once: false, amount: 0.2 }}
          className="w-full -mt-12 max-w-[1300px] mx-auto "
        >
          <Search />
        </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;
