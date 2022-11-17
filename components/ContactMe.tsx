import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div
      className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact me
      </h3>
      <div className='space-y-10'>
        <h4 className='text-4xl semi-bold text-center'>
          I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets talk.</span>
        </h4>
        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>967 389 659</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>carlosserodio86@hotmail.com</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>Rua Barbosa do Bocage n 3A 7000-337</p>
        </div>
      </div>
    </div>
  );
}
