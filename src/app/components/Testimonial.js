'use client'
import React from "react";
//components 
import TestimonialSlider from "./TestimonialSlider";
const Testimonial = () => {
  return (
    <div className="flex items-center section" id="testimonial">
      <div className="container mx-auto">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
