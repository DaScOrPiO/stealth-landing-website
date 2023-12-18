"use client";

import Image from "next/image";
import React from 'react';
import Carousel from "./carousel";

const WhyStealthMoney = () => {
  return (
    <div className="my-6">
      <p className="text-center text-[38px] text-white-100 font-medium mb-6">
        Why Stealth Money?
      </p>
      <div className="flex flex-wrap items-center mt-16">
        <Carousel />
      </div>
    </div>
  );
};

export default WhyStealthMoney;
