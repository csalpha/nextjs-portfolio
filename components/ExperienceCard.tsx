import React from "react";
import Image from "next/image";
import image from "../public/assets/carlos.png";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden'
    >
      <motion.img
        src='assets/capgemini.png'
        alt=''
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Web Developer</h4>
        <p className='font-bold text-2xl mt-1'>Capgemini</p>
        <div className='flex space-x-2 my-2'>
          <img
            src='assets/javascript.png'
            alt=''
            className='h-10 w-10 rounded-full'
          />
          <img
            src='assets/html.png'
            alt=''
            className='h-10 w-10 rounded-full'
          />
          <img src='assets/css.png' alt='' className='h-10 w-10 rounded-full' />
        </div>
        {/*
        <p className='uppercase py-5 text-grey-300'>Started Work...</p>
       
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
           <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
        </ul> */}
      </div>
    </article>
  );
}
