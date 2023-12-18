'use client'
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { IMAGES } from "../../public/assets";

const WeeklySuscrible = () => {
  return (
    <div
      className="flex flex-col md:flex-row text-white items-center justify-center md:p-8 mx-16 my-4 rounded-xl bg-[#3B3B3B]">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 py-5 px-10">
        <Image
          src={IMAGES.card1}
          alt="Weekly Section Image"
          className="w-full h-auto md:w-auto"
        />
      </div>
      <div className="md:w-1/2 md:ml-4 py-10 px-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join our weekly digest
        </h2>
        <p className="mb-4">
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <div className="bg-white p-1 rounded-xl">
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full md:w-2/3 p-2 focus:outline-none rounded mb-4 md:mr-4 md:mb-0 text-black"
            />
            <Button
              type="submit"
              title="Suscribe"
              className="w-full md:w-1/3 bg-purple-600 text-white p-2 rounded"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeeklySuscrible;
